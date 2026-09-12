## motivation

we have a set of images, and we want to create a brand-new image that looks like it could have been drawn from the same distribution. we don't have access to the underlying probability distribution, only to the samples it produced. the goal of a generative model is to learn enough about that distribution to draw new samples from it.

we will focus on the *unconditional* version of this problem in the first three lectures: no captions, no labels, just images. conditioning on text prompts comes later.

a natural question is: *where should the random new sample come from?* why not from a deterministic procedure? the answer is that we want **diversity**. we want every call to our generator to produce a different image. the cleanest way to inject randomness is to start from pure gaussian noise, because gaussian noise

- is trivial to sample from,
- is well understood mathematically (closed-form density, nice closure under linear maps),
- and is high-entropy, so nothing about the noise biases the output.

## forward and reverse processes

let $x_0 \in \mathbb{R}^d$ denote a clean image (we flatten the $H\times W \times 3$ tensor into a single vector). the **forward process** is a fixed markov chain that gradually corrupts $x_0$ with gaussian noise:

$$
x_0 \;\longrightarrow\; x_1 \;\longrightarrow\; \cdots \;\longrightarrow\; x_T,
$$

where $x_T$ is essentially pure noise. the **reverse process** is what we want to *learn*: a chain that goes the other way, taking pure noise and turning it back into a plausible image.

each forward transition is defined by us:

$$
q(x_t \mid x_{t-1}) \;=\; \mathcal{N}\!\left(\sqrt{1-\beta_t}\,x_{t-1},\; \beta_t I\right),
$$

so concretely

$$
x_t \;=\; \sqrt{1-\beta_t}\, x_{t-1} + \sqrt{\beta_t}\,\varepsilon,\qquad \varepsilon \sim \mathcal{N}(0, I).
$$

the sequence $\{\beta_t\}_{t=1}^T$ is the **noise schedule**. we typically pick $0 \le \beta_1 < \beta_2 < \cdots < \beta_T \le 1$. why increasing? early on the image is still close to clean, and we only want to perturb fine-grained details — so we add a little noise. later, the image is already fuzzy, so larger perturbations don't destroy more information than is already gone.

one sanity check before going further: why the $\sqrt{1-\beta_t}$ factor on the previous image? the variances of the two pieces sum to $(1-\beta_t)\,\text{Var}(x_{t-1}) + \beta_t$. if $x_{t-1}$ has unit variance, so does $x_t$ — the schedule is **variance-preserving**.

### closed form for $q(x_t \mid x_0)$

[derivation 1]

the forward chain is intentionally simple, so simple that we can short-circuit it: instead of running $t$ steps to get to $x_t$, we can sample $x_t$ directly from $x_0$.

define $\alpha_t := 1 - \beta_t$ and $\bar\alpha_t := \prod_{s=1}^t \alpha_s$. unrolling one step,

$$
x_t = \sqrt{\alpha_t}\, x_{t-1} + \sqrt{1-\alpha_t}\,\varepsilon_t,
$$

$$
x_{t-1} = \sqrt{\alpha_{t-1}}\, x_{t-2} + \sqrt{1-\alpha_{t-1}}\,\varepsilon_{t-1}.
$$

substituting the second into the first,

$$
x_t = \sqrt{\alpha_t \alpha_{t-1}}\, x_{t-2} + \sqrt{\alpha_t(1-\alpha_{t-1})}\,\varepsilon_{t-1} + \sqrt{1-\alpha_t}\,\varepsilon_t.
$$

the two noise terms are independent zero-mean gaussians, so their sum is again gaussian with variance equal to the sum of the variances:

$$
\alpha_t(1-\alpha_{t-1}) + (1-\alpha_t) = 1 - \alpha_t \alpha_{t-1}.
$$

so we can write $x_t = \sqrt{\alpha_t \alpha_{t-1}}\, x_{t-2} + \sqrt{1 - \alpha_t \alpha_{t-1}}\,\varepsilon$. continuing the induction down to $x_0$ gives the famous one-shot formula

$$
x_t = \sqrt{\bar\alpha_t}\, x_0 + \sqrt{1-\bar\alpha_t}\,\varepsilon,\qquad \varepsilon \sim \mathcal{N}(0, I).
$$

this is enormously useful: at training time we will need to noise an image to a random level $t$, and we can do it in a single matrix-vector op rather than $t$ chained ones.

## what's the objective?

we want to maximize the likelihood that our model assigns to real data:

$$
\max_\theta \; \log p_\theta(x_0).
$$

why log? two reasons. first, products of probabilities become sums of log-probabilities — numerically stable and analytically friendlier. second, $\log$ is monotonic, so maximizing $\log p_\theta(x_0)$ is the same as maximizing $p_\theta(x_0)$.

the trouble is computing $p_\theta(x_0)$ at all. to produce $x_0$, the model has to start from noise $x_T$ and denoise step by step through the latent variables $x_{1:T} = (x_1, \ldots, x_T)$. so

$$
p_\theta(x_0) = \int p_\theta(x_{0:T})\, dx_{1:T}.
$$

this is an integral over *every* possible noise trajectory the model could have taken. intractable.

### refresher on joint and marginal probabilities

for two random variables, the joint distribution factors as

$$
p(x_1, x_2) = p(x_1)\, p(x_2 \mid x_1),
$$

and we recover marginals by integrating out:

$$
p(x_1) = \int p(x_1, x_2)\, dx_2.
$$

for a markov chain $x_1 \to x_2 \to \cdots \to x_T$, the joint factors as

$$
p(x_{1:T}) = p(x_1) \prod_{t=2}^T p(x_t \mid x_{t-1}).
$$

that's exactly the structure of our reverse process — the model only "looks one step back."

## a tractable loss in four steps

[derivation 2]

the high-level recipe:

1. derive a lower bound on $\log p_\theta(x_0)$.
2. expand the bound until the structure becomes clear.
3. show every term in the bound is computable.
4. read off the final loss.

### step 1 — the evidence lower bound (elbo)

we use the standard trick of multiplying and dividing by a "variational" distribution $q(x_{1:T} \mid x_0)$ — which we conveniently let be our forward process:

$$
p_\theta(x_0) = \int p_\theta(x_{0:T})\, dx_{1:T}
= \int \frac{p_\theta(x_{0:T})}{q(x_{1:T}\mid x_0)}\, q(x_{1:T} \mid x_0)\, dx_{1:T}
= \mathbb{E}_{q}\!\left[\frac{p_\theta(x_{0:T})}{q(x_{1:T} \mid x_0)}\right].
$$

now apply jensen's inequality. because $\log$ is concave, $\log \mathbb{E}[Y] \ge \mathbb{E}[\log Y]$:

$$
\log p_\theta(x_0) \;\ge\; \mathbb{E}_{q}\!\left[\log \frac{p_\theta(x_{0:T})}{q(x_{1:T}\mid x_0)}\right] \;=:\; \mathcal{L}_{\text{elbo}}.
$$

so instead of maximizing the (intractable) likelihood directly, we maximize this **lower bound** — equivalently, we minimize $-\mathcal{L}_{\text{elbo}}$.

### step 2 — expanding the bound

after expanding the log of the joint factorizations and rearranging (the algebra is in ho et al. 2020), the elbo surfaces a sum of kl divergences:

$$
-\mathcal{L}_{\text{elbo}} = \sum_{t=2}^T \underbrace{\mathrm{KL}\!\left(q(x_{t-1} \mid x_t, x_0)\;\|\;p_\theta(x_{t-1} \mid x_t)\right)}_{\text{learn } \theta\text{ to make these small}} + \text{(other terms)}.
$$

quick refresher on kl divergence: for densities $p, q$,

$$
\mathrm{KL}(p \;\|\; q) = \int p(x) \log \frac{p(x)}{q(x)}\, dx = \mathbb{E}_{x \sim p}\!\left[\log \frac{p(x)}{q(x)}\right].
$$

it's nonnegative and zero iff $p = q$, so it really does measure "distance" (asymmetrically) between distributions.

the two distributions inside the kl look intimidating, but each is tractable.

### step 3a — $q(x_{t-1} \mid x_t, x_0)$ is tractable

this is the question: *given the noisy image $x_t$ and the original clean image $x_0$, what's the distribution of the slightly-less-noisy version $x_{t-1}$?* bayes' rule gives

$$
q(x_{t-1} \mid x_t, x_0) = \frac{q(x_t \mid x_{t-1}, x_0)\, q(x_{t-1} \mid x_0)}{q(x_t \mid x_0)}.
$$

the markov property of the forward process simplifies the first factor: $q(x_t \mid x_{t-1}, x_0) = q(x_t \mid x_{t-1})$. all three resulting densities are gaussians we already wrote down explicitly. the product/quotient of gaussians is gaussian, so

$$
q(x_{t-1} \mid x_t, x_0) = \mathcal{N}\!\left(\tilde\mu_t(x_t, x_0),\; \tilde\beta_t I\right)
$$

for some closed-form $\tilde\mu_t, \tilde\beta_t$ that depend on the noise schedule.

### step 3b — $p_\theta(x_{t-1} \mid x_t)$ is tractable

here we make a modeling choice: we *assume* our reverse process is gaussian,

$$
p_\theta(x_{t-1} \mid x_t) = \mathcal{N}\!\left(\mu_\theta(x_t, t),\; \Sigma_\theta(x_t, t)\right).
$$

this is justified because, as $\beta_t \to 0$, the true reverse $q(x_{t-1} \mid x_t)$ is provably close to gaussian.

### step 4 — the final loss

we now have a kl divergence between two gaussians, which has a closed form. after substituting and simplifying — fixing the variance and reparameterizing the mean in terms of a *noise predictor* $\varepsilon_\theta$ — the loss collapses to something almost embarrassingly simple:

$$
\mathcal{L}_{\text{ddpm}} = \mathbb{E}_{t,\, x_0,\, \varepsilon}\!\left[\Big\|\, \varepsilon_\theta\big(\sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\varepsilon,\; t\big) \;-\; \varepsilon\Big\|^2\right].
$$

where $t \sim \mathcal{U}\{1, \ldots, T\}$, $x_0 \sim q_0(x_0)$, $\varepsilon \sim \mathcal{N}(0, I)$.

in words: take a clean image, noise it to a random level $t$, ask the network to predict the noise that was added, and compute squared error. that's it. the expectation is over noise level $t$, training image $x_0$, and the random noise $\varepsilon$ added.

it's worth pausing to appreciate this. we started from intractable maximum likelihood, applied jensen's inequality, expanded a sum of kls, used bayes' rule plus the markov property, and the whole apparatus collapses to **l2 regression on noise**.

## training recipe

putting it together:

1. sample a clean image $x_0 \sim q_0(x_0)$, noise $\varepsilon \sim \mathcal{N}(0, I)$, and time step $t \sim \mathcal{U}\{1, \ldots, T\}$.
2. form $x_t = \sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\varepsilon$.
3. predict $\hat\varepsilon = \varepsilon_\theta(x_t, t)$ and minimize $\|\hat\varepsilon - \varepsilon\|^2$, backpropagating through $\theta$.

note that we feed $t$ to the network too, so it knows how noisy the input is.

## inference recipe

to generate, we reverse the chain:

1. sample $x_T \sim \mathcal{N}(0, I)$.
2. for $t = T, T-1, \ldots, 1$, perform the iterative update

$$
x_{t-1} = \frac{1}{\sqrt{\alpha_t}}\!\left(x_t - \frac{1 - \alpha_t}{\sqrt{1-\bar\alpha_t}}\,\varepsilon_\theta(x_t, t)\right) + \sigma_t z,
$$

where $z \sim \mathcal{N}(0, I)$ and $\sigma_t$ is a small variance term.

read this carefully: the parenthesized expression shifts $x_t$ along the predicted noise direction (subtracting the predicted noise to remove it), and $\sigma_t z$ adds a fresh small gaussian kick. the kick is critical — without it, the iteration would deterministically collapse to a single mode.

3. output $x_0$.

## ddpm is too slow

ddpm works, but the original paper used $T = 1000$ steps. each step is one neural network forward pass, so a single image takes a thousand evaluations of $\varepsilon_\theta$. that's orders of magnitude slower than vaes or gans and can mean minutes per sample.

so: can we go faster?

### attempt 1 — induction

apply the recursion inside itself: $x_{t-2}$ in terms of $x_t$, then $x_{t-3}$, and so on. the arithmetic works out, but you still call $\varepsilon_\theta$ at every step. no win.

### attempt 2 — just skip steps

take strides of size $k$. the problem: large jumps + injected stochasticity = quality crashes.

### reformulate the problem (ddim)

the crucial insight (song et al., 2020) is that **the loss only depends on the marginals $q(x_t \mid x_0)$**, not on the full chain. so we are free to define a *different* reverse process, as long as it agrees with ddpm on the marginals.

the choice we make is: kill the inter-step stochasticity. we design a reverse update that is deterministic given $x_t$ and the model's prediction. the clean-image estimate at time $t$ is

$$
\hat x_0(x_t, t) = \frac{x_t - \sqrt{1-\bar\alpha_t}\,\varepsilon_\theta(x_t, t)}{\sqrt{\bar\alpha_t}}.
$$

the ddim update is then

$$
x_{t-1} = \sqrt{\bar\alpha_{t-1}}\, \hat x_0(x_t, t) + \sqrt{1 - \bar\alpha_{t-1}}\,\varepsilon_\theta(x_t, t),
$$

no extra noise term. this is the **d**enoising **d**iffusion **i**mplicit **m**odel.

because the stochastic step is gone, we can also skip steps: instead of going $T \to T-1 \to \cdots \to 0$, go through any subsequence $\tau_1 > \tau_2 > \cdots > 0$ and apply the same formula with $\bar\alpha_{\tau_i}$ and $\bar\alpha_{\tau_{i+1}}$. crucially, **no retraining is needed** — the same noise predictor $\varepsilon_\theta$ works.

in practice this gives 10×–100× speedups. from the ddim paper's cifar-10 experiments:

| speed-up | 1× | 10× | 20× | 50× | 100× |
|---|---|---|---|---|---|
| fid change | baseline | +3% | +16% | +70% | +330% |

a 10× speedup costs almost nothing in quality — we lose the stochastic-noise diversity but the trade-off is usually worth it.

## summary

the ddpm mindset is: define a fixed, simple forward noising process; assume a gaussian reverse process; train the reverse model by maximizing an elbo; the elbo becomes a simple noise-prediction l2 loss thanks to bayes' rule plus gaussian closure. ddim then says: the same trained model can generate orders of magnitude faster if we drop the inter-step stochasticity and skip steps.

both ideas reappear, in different guises, throughout the rest of the course.