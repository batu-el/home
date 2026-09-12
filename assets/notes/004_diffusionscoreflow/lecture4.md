## motivation

so far the entire course has focused on the *generation paradigm* — how do we sample new images? lecture 1 gave us discrete diffusion (ddpm), lecture 2 gave us score matching and the sde/pf-ode picture, lecture 3 gave us flow matching.

but all of those operated on raw images, treated as flat vectors of pixels, and all of them generated *unconditionally* — no captions, no labels. today we add the two crucial ingredients that turn this machinery into something a person actually wants to use: a **better space to do diffusion in**, and a way to **guide** generation toward a desired condition (like a text prompt). the lecture splits into three parts.

1. **latent space.** why pixel space is awful, how autoencoders compress images into a "tractable, compact, meaningful" latent space, and how **latent diffusion** then runs the entire generation machinery on these compact codes.
2. **multimodal representations.** tokenization, transformers (recap), vision transformers (vit), and how contrastive learning (clip) gives us a single embedding space where text and images live together.
3. **guidance.** classifier guidance, then classifier-free guidance — how to make diffusion follow a text prompt.

---

## part 1 — from pixel space to latent space

### why pixel space is the wrong place to do diffusion

the naive approach: represent every image as a $H \times W \times 3$ tensor of $\{0, \ldots, 255\}$ pixel values, and run diffusion directly on those. three problems.

**high dimensionality.** a 512×512 rgb image is 786,432 numbers. diffusion models need to process that at every denoising step, every layer, for thousands of training images. computationally brutal.

**redundancy.** adjacent pixels are heavily correlated. a blue sky has millions of nearly identical "blue" values; we don't need that many bits to represent it.

**lack of meaning.** if we move a small step in pixel space, we don't get a slightly-different but still-coherent image — we get a noisy version of the same image. pixel-space distance does not correspond to semantic distance. a cat and a slightly-rotated cat are far apart in pixels; a cat and a noisy cat are close.

so our wishlist for an "ideal" space is:

- **tractable dimension** — much smaller than pixel count.
- **compact representation** — efficient use of the available dimensions, without redundancy.
- **meaningful representation** — moving in the space corresponds to moving between semantically related images.

we also want to distinguish two notions of similarity. **semantic similarity** is structural / global / "low frequency" — two images of cats are semantically similar even if textures differ. **perceptual similarity** is local / texture / "high frequency" — two images of the same cat with slightly different lighting are perceptually similar.

### attempt 1 — plain autoencoder (ae)

train an encoder $E_\varphi$ that maps pixel space → latent space, and a decoder $D_\theta$ that goes back. make them undo each other:

$$
\mathcal{L}_{\text{ae}} = \|x - D_\theta(E_\varphi(x))\|^2.
$$

the encoder is built from convolutions + pooling (downsampling); the decoder uses transposed convolutions / upsampling. the "spatial compression ratio" $f = H/h = W/w$ tells you how much smaller the latent grid is than the pixel grid. typical values: $f = 4$ or $f = 8$.

checklist for plain ae: tractable dimension ✓. compact representation ✓. **meaningful representation ✗** — the latent space is a free-for-all. two semantically similar images can land in completely different latent regions. generation by sampling a random latent vector and decoding produces garbage.

### attempt 2 — variational autoencoder (vae)

to fix the meaningfulness problem, we *constrain* the latent space to be approximately a standard gaussian. the encoder outputs not a single point but a distribution:

$$
q_\varphi(z \mid x) = \mathcal{N}(\mu_\varphi(x),\; \sigma_\varphi^2(x)).
$$

the decoder is now $p_\theta(x \mid z)$ — typically gaussian with mean $D_\theta(z)$ and constant variance.

we want to maximize $\log p_\theta(x)$. the same elbo trick from lecture 1 applies.

#### step 1 — derive the lower bound

by marginalization, $p_\theta(x) = \int p_\theta(x, z)\, dz = \int p(z)\, p_\theta(x \mid z)\, dz$ where $p(z) = \mathcal{N}(0, I)$ is the prior.

multiply and divide by the encoder distribution:

$$
p_\theta(x) = \int \frac{p(z)\, p_\theta(x \mid z)}{q_\varphi(z \mid x)}\, q_\varphi(z \mid x)\, dz = \mathbb{E}_{z \sim q_\varphi(z \mid x)}\!\left[\frac{p(z)\, p_\theta(x \mid z)}{q_\varphi(z \mid x)}\right].
$$

apply jensen's inequality:

$$
\log p_\theta(x) \;\ge\; \mathbb{E}_{z \sim q_\varphi(z \mid x)}\!\left[\log \frac{p_\theta(x, z)}{q_\varphi(z \mid x)}\right] \;=\; \mathcal{L}_{\text{elbo}}.
$$

#### step 2 — expand

using $\log \frac{p(z) p_\theta(x \mid z)}{q_\varphi(z \mid x)} = \log p_\theta(x \mid z) + \log \frac{p(z)}{q_\varphi(z \mid x)}$:

$$
\mathcal{L}_{\text{elbo}} = \underbrace{\mathbb{E}_{z \sim q_\varphi(z \mid x)}\!\left[\log p_\theta(x \mid z)\right]}_{\text{reconstruction}} - \underbrace{\mathrm{KL}\!\left(q_\varphi(z \mid x)\;\|\;p(z)\right)}_{\text{latent regularization}}.
$$

so the vae objective is:

$$
\mathcal{L}_{\text{vae}} = \underbrace{\mathbb{E}_z\big[\|x - D_\theta(z)\|^2\big]}_{\mathcal{L}_{\text{rec}}} \;+\; \lambda_{\text{KL}}\, \underbrace{\mathrm{KL}\!\left(q_\varphi(z \mid x)\;\|\;\mathcal{N}(0, I)\right)}_{\mathcal{L}_{\text{kl}}}.
$$

a trade-off: reconstruct the input well *and* keep the latent distribution close to $\mathcal{N}(0, I)$.

checklist: tractable ✓. compact ✓. meaningful ✓. **truthful representation ✗** — vaes produce *blurry* images.

### attempt 3 — refined vae for less blur

why the blur? the reconstruction loss is l2 pixel-distance. for ambiguous regions, the l2-optimal prediction is the *mean* of all plausible outputs — and the mean of many sharp variants is a blur.

the fix is to add two more loss terms.

**perceptual loss (lpips).** instead of comparing pixels, run both $x$ and $\hat x$ through a pretrained cnn and compare the feature maps. early layers of trained cnns are sensitive to edges, textures, and shapes — exactly the things humans notice. penalizing differences in these features, rather than raw pixels, encourages the decoder to preserve perceptually salient structure. weight $\lambda_{\text{perc}}$. too high → "checkerboard artifacts" from upsampling.

**adversarial loss.** add a discriminator $D$ trained to distinguish real images from reconstructions, and add a term that incentivizes the decoder to fool it. this is the gan trick. effect: the decoder is *forced* to produce images on the realistic-image manifold — no blurry intermediates allowed. weight $\lambda_{\text{adv}}$. too high → "mode collapse" (decoder ignores the latent and outputs a single realistic image).

the full refined vae loss:

$$
\mathcal{L}_{\text{ref-vae}} = \mathcal{L}_{\text{rec}} + \lambda_{\text{KL}}\, \mathcal{L}_{\text{kl}} + \lambda_{\text{perc}}\, \mathcal{L}_{\text{perc}} + \lambda_{\text{adv}}\, \mathcal{L}_{\text{adv}}.
$$

reconstruction + latent-space regularization + (mitigate blur via perception + adversarial). the kl weight is typically tiny — about $10^{-6}$ — because the other terms dominate in practice.

### latent diffusion: diffusion in vae space

now the punchline. the vae has given us a tractable, compact, meaningful, sharp latent space. run diffusion *there* instead of in pixel space (rombach et al., 2021).

**training.**

1. train the vae.
2. **freeze the vae encoder** $E_\varphi$. train your favorite image generator (ddpm / score-based / flow matching) on the latents $z = E_\varphi(x)$ rather than on raw pixels.

**inference.**

1. run the diffusion / score-matching / flow-matching reverse process in *latent* space, starting from a noisy latent and ending at a clean latent $z$.
2. decode: $x = D_\theta(z)$.

the win is enormous: diffusion is now operating on a much smaller, well-structured space, so each network forward pass is faster and the model converges much more quickly. this is the core idea behind stable diffusion and most modern systems.

a few notes about the vae in this setup:

- the encoder behaves as a "low-pass filter" — it strips out high-frequency content the diffusion model doesn't need to model.
- the decoder is responsible for "texture hallucination" — turning a low-dim, smooth latent back into a high-resolution, detailed image. it's typically about 2× larger than the encoder for that reason.

---

## part 2 — representing text and images in the same space

to condition generation on text, we need to represent text in a form the generator can use. and eventually we want text and images to live in a *shared* space. let's build up.

### tokenization

a sentence like "a cute teddy bear is reading." gets split into discrete tokens. granularity is a design choice:

- **word-level:** "a / cute / teddy / bear / is / reading / ."
- **sub-word (bpe, wordpiece):** "a / cute / ted / ##dy / bear / is / read / ##ing / ." this is what modern transformers use.
- **character-level:** every character is its own token. robust to typos but slow.

each token is mapped to a learned embedding $\in \mathbb{R}^{d_{\text{model}}}$.

### transformers (a quick recap)

attention computes, for each query $q_i$, a weighted average of values $v_j$ where weights are softmax of scaled dot-products with keys $k_j$:

$$
\text{Attention}(Q, K, V) = \mathrm{softmax}\!\left(\frac{Q K^\top}{\sqrt{d_k}}\right) V.
$$

the transformer architecture stacks **self-attention** (sequence attends to itself) and **cross-attention** (decoder queries encoder output) together with feedforward layers, normalizations, and residual connections.

a subtle but essential trick is **positional encoding**: attention is permutation-invariant, so we have to add position information explicitly. either learned or hardcoded sinusoidal encodings, summed into the token embeddings.

the standard **typical embedding location** for getting a single vector representation of a sentence is the *last hidden state of the encoder* (or a designated [cls] token).

### vision transformer (vit)

can we do attention on images? "it's just numbers" — yes (dosovitskiy et al., 2020). the construction:

1. split the image into $P \times P$ patches (e.g., $16 \times 16$). for a $H \times W$ image, that gives $N = (H/P)(W/P)$ patches.
2. flatten each patch and pass through a linear projection to get patch embeddings of dimension $d_{\text{model}}$.
3. prepend a learnable [cls] token.
4. add positional embeddings.
5. pass through a transformer encoder.
6. use the [cls] output as the global image representation; feed to a classifier ffn for tasks like imagenet labeling.

limitation: supervised vit requires labeled data. modern approaches (dino, mae, etc.) use self-supervised pretraining to avoid that.

### contrastive learning: putting text and images in the same space

the remaining problem: image embeddings live in some space, text embeddings live in another, and they're not comparable. we want a *single* space where "an image of a teddy bear" lands close to the embedding of the text "teddy bear" and far from "water polo ball."

**idea: contrastive learning.**

- group similar (image, text) pairs together.
- push dissimilar (image, text) pairs apart.

#### loss setup

let $u$ be an image embedding (output of a vit followed by a projection to a shared dimension), and $v_{\text{text}}$ be a text embedding (output of a transformer text encoder, similarly projected). define **similarity**:

$$
s_{u, \text{text}} = \frac{u^\top v_{\text{text}}}{\|u\|\, \|v_{\text{text}}\|}.
$$

for a batch of $N$ image-text pairs, the probability that image "$\square$" matches text "teddy bear" is computed via softmax across the *batch* of texts:

$$
p_{\square \to \text{teddy bear}} = \frac{\exp(s_{\square,\, \text{teddy bear}})}{\sum_{j=1}^N \exp(s_{\square,\, \text{text}_j})}.
$$

symmetrically, $p_{\text{teddy bear} \to \square}$ uses softmax across the *batch of images*.

the clip loss (radford et al., 2021) is the average of two cross-entropy losses — image-to-text and text-to-image:

$$
\mathcal{L}_{\square \to \text{text}} = -\frac{1}{N} \sum_i \log p_{\square_i \to \text{text}_i},\qquad \mathcal{L}_{\text{text} \to \square} = -\frac{1}{N} \sum_i \log p_{\text{text}_i \to \square_i},
$$

$$
\mathcal{L}_{\text{clip}} = \tfrac{1}{2}\left(\mathcal{L}_{\square \to \text{text}} + \mathcal{L}_{\text{text} \to \square}\right).
$$

reading: for each image, the correct text out of all $N$ texts in the batch should have the highest similarity, and vice versa. this is the **in-batch negatives** assumption — every other (image, text) pair in the batch counts as a negative example.

#### training and results

clip was trained on 400m (image, caption) pairs scraped from the web. visual encoder: vit or resnet. text encoder: transformer. despite never being explicitly trained on imagenet labels, it achieves ~76% zero-shot imagenet accuracy by computing similarities between an image and prompts like "a photo of a {class name}" — possibly with some leakage from web-scraped data, but still remarkable.

#### caveats

[question: is only the image part trined with text embeddings fixed?]
[question: N 1-1 comparisons is just less data no?]

clip's softmax-over-the-batch is computationally expensive — $O(N^2)$ similarity matrix, and the global normalization is memory-heavy. **siglip** (zhai et al., 2023) reframes the 1-vs-n softmax as n independent 1-vs-1 sigmoid binary classifications, scaling much better.

the output of clip is the representation we want. an image gets mapped to a clip image embedding; a caption gets mapped to a clip text embedding; both live in the same space, and similarity is meaningful.

---

## part 3 — guidance: making diffusion follow a condition

now we have all the pieces. we have latent diffusion. we have clip-style text embeddings to feed in as conditioning $y$. the remaining question: *how* do we use $y$ to actually steer generation?

[question: what is t here?]

we want the conditional reverse step

$$
p_{\theta}(x_t \mid x_{t+1},\, y).
$$

### first idea: classifier guidance

the original idea (dhariwal & nichol, 2021): bolt a classifier onto an already-trained unconditional diffusion model.

#### main derivation

apply bayes' rule to introduce $y$:

$$
p(A \mid B, C) = \frac{p(B \mid A, C)\, p(A \mid C)}{p(B \mid C)}.
$$

set $A = x_t$, $B = y$, $C = x_{t+1}$:

$$
p_\theta(x_t \mid y, x_{t+1}) = \frac{p_\phi(y \mid x_t, x_{t+1})\, p_\theta(x_t \mid x_{t+1})}{p_\phi(y \mid x_{t+1})}.
$$

by the markov property of the diffusion process, $y$ depends on $x_t$ once we know it, not on $x_{t+1}$, so $p_\phi(y \mid x_t, x_{t+1}) = p_\phi(y \mid x_t)$. the denominator doesn't depend on $x_t$:

$$
p_\theta(x_t \mid y, x_{t+1}) \;\propto\; \underbrace{p_\phi(y \mid x_t)}_{\text{classifier}}\; \underbrace{p_\theta(x_t \mid x_{t+1})}_{\text{unconditional reverse}}.
$$

two factors: the classifier (does this $x_t$ look like class $y$?), and the unconditional reverse step (is this $x_t$ a plausible denoising of $x_{t+1}$?).

#### detour 1 — the unconditional reverse step

from lecture 1, the unconditional reverse step is gaussian:

$$
p_\theta(x_t \mid x_{t+1}) \sim \mathcal{N}(\mu_\theta,\; \sigma_{t+1}^2 I).
$$

#### detour 2 — taylor expand the log-classifier

[question: explain]

linearize $\log p_\phi(y \mid x_t)$ around the unconditional mean $\mu_\theta$:

$$
\log p_\phi(y \mid x_t) \approx (x_t - \mu_\theta)^\top \nabla_{x_t} \log p_\phi(y \mid \mu_\theta) + \text{const}.
$$

#### combining

plug both into the conditional posterior:

$$
\log p_\theta(x_t \mid y, x_{t+1}) \approx -\frac{(x_t - \mu_\theta)^\top (x_t - \mu_\theta)}{2\sigma_{t+1}^2} + (x_t - \mu_\theta)^\top g + \text{const},
$$

where $g = \nabla_{x_t} \log p_\phi(y \mid \mu_\theta)$. complete the square:

$$
x_t \sim \mathcal{N}\!\left(\mu_\theta + \sigma_{t+1}^2\, g,\; \sigma_{t+1}^2\, I\right).
$$

the conditional reverse step is the *unconditional* one with a **shifted mean** — pushed in the direction of the classifier's gradient (toward higher $p(y \mid x)$), with magnitude proportional to the noise variance.

in practice we apply a **guidance scale** $w$ to the gradient, $\mu_\theta + w\, \sigma_{t+1}^2\, g$, with $w > 1$ for strong conditioning.

#### training & limitations

the unconditional generation model needs no retraining; this is purely a sampling-time technique. the classifier, however, has to be trained on **noised** images — we sample $x_t$ at every noise level and train the classifier with cross-entropy to predict the correct label. that's the catch:

- need labeled data.
- need an off-the-shelf classifier that operates on noisy inputs (these don't exist in the wild).
- distribution between generation model and classifier must be aligned.
- an extra classifier forward + backward pass per generation step.
- gradient scaling needs careful tuning.
- the taylor approximation introduces error.

### refined goal

can we get the same conditioning behavior using *only* generation weights — no separate classifier?

### classifier-free guidance (cfg)

the trick (ho & salimans, 2022): rearrange the bayes equation to recognize that the **conditional and unconditional generation signals together define an implicit classifier**.

$$
p_\phi(y \mid x_t) \;\propto\; \frac{p_\theta(x_t \mid y)}{p_\theta(x_t)}.
$$

take logs and gradients:

$$
\nabla_{x_t} \log p_\phi(y \mid x_t) \;\propto\; \nabla_{x_t} \log p_\theta(x_t \mid y) - \nabla_{x_t} \log p_\theta(x_t).
$$

the first term is the *conditional* score; the second is the *unconditional* score. both can be learned by the same diffusion model — we just train it to do both.

#### training

at training time, randomly drop the condition with some probability $p_{\text{uncond}}$ (typically 10-20%, replaced with a "null token" $\varnothing$):

1. sample $x_0$, noise $\varepsilon$, time step $t$, and condition $y$ (or $\varnothing$).
2. form $x_t = \sqrt{\bar\alpha_t}\, x_0 + \sqrt{1 - \bar\alpha_t}\,\varepsilon$.
3. predict $\hat\varepsilon = \varepsilon_\theta(x_t,\, t,\, y \text{ or } \varnothing)$, minimize $\|\hat\varepsilon - \varepsilon\|^2$.

the same model now learns both conditional and unconditional generation. the "drop condition" probability tunes how good each side is.

#### sampling

at inference, combine the two predictions:

$$
\tilde\varepsilon_\theta(x_t,\, y) = \varepsilon_\theta(x_t,\, \varnothing) + w\,\big[\varepsilon_\theta(x_t,\, y) - \varepsilon_\theta(x_t,\, \varnothing)\big].
$$

- $w = 0$: pure unconditional generation.
- $w = 1$: pure conditional generation.
- $w > 1$: extrapolate beyond the conditional — "even more $y$." this is what's typically used (often $w = 7$–$10$ for text-to-image), and produces dramatically more on-prompt outputs.

geometrically: take the unconditional sample, and push along the direction that the condition encourages. larger $w$ = bigger push.

#### comparison

[question: explain cclassifier forward backward]

| | classifier-based | classifier-free |
|---|---|---|
| update rule | $\varepsilon_\theta(x_t) - w\,\sigma_t\,\nabla_{x_t} \log p_\phi(y \mid x_t)$ | $\varepsilon_\theta(x_t,\, \varnothing) + w\,[\varepsilon_\theta(x_t,\, y) - \varepsilon_\theta(x_t,\, \varnothing)]$ |
| extra model | classifier | none (re-uses generation model) |
| calls per step | 2 (gen + classifier backward) | 2 (cond + uncond) |
| training | unconditional + classifier on noisy data | one model, condition randomly dropped |
| limitations | classifier on noisy data unusual; gradient tuning | still 2 calls per step, but no extra model |

#### practical considerations

- conditioning is flexible — text (via clip), class label, image, mask, edge map, anything that can be embedded.
- clip embeddings are particularly handy for text conditioning because of the multimodal training in part 2.
- guidance scale $w$ trades off prompt-fidelity vs. sample diversity. too high → over-saturated, "burnt" images.
- the two forward passes per step are usually batched together, so the cost is roughly 2× a single call.

---

## the big picture

today we did three things, each of which is essential to modern image generation:

**latent space.** pixel space is the wrong place to do diffusion. a vae trained with reconstruction + kl + perceptual + adversarial losses gives us a tractable, compact, meaningful, sharp latent space. run any of the generation paradigms from lectures 1–3 there, and decode at the end.

**multimodal embeddings.** tokenization → transformers → vit for images → contrastive learning (clip) to put images and text in the same space. now we have a rich numerical representation of "what the user wants."

**guidance.** classifier guidance was the original idea — bayes' rule plus a taylor expansion gives a shifted-mean reverse step. classifier-free guidance is the modern default — a single network learns both conditional and unconditional generation, and at sampling time we extrapolate from the unconditional toward the conditional with a guidance scale $w$.

stitch these together — latent diffusion in clip-conditioned latent space with classifier-free guidance — and you have, roughly, the architecture of every state-of-the-art text-to-image system in the field.