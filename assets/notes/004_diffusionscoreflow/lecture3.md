## motivation

we've now seen image generation through two lenses. lecture 1 was the *variational* lens: write a noising chain, derive an elbo, train a noise predictor. lecture 2 was the *score* lens: learn $\nabla_x \log p_t(x)$, take the continuous limit, and either follow a stochastic reverse sde or its deterministic probability-flow ode counterpart.

today we change perspective once more, to the *flow* lens. the mental picture: instead of adding noise and learning to remove it, we directly **transport probability mass** from a simple initial distribution $p_0$ (gaussian noise) to the target $p_1 = p_{\text{data}}$. we learn a vector field that at every time $t \in [0, 1]$ tells each particle where to go next.

this view will turn out to be cleaner mathematically, give us a slightly more general training objective (conditional flow matching), and motivate a clever trick called **rectified flow** that straightens out generation paths so we can use very few inference steps.

## notation: pay attention to the time direction

a note that is genuinely important when reading flow-matching papers: the **convention for time is flipped** relative to what we used in lectures 1 and 2.

- in diffusion / score matching: $x_0$ is the **clean** image, $x_T$ is **pure noise**.
- in flow matching: $x_0 \sim p_0 = \mathcal{N}(0, I)$ is the **initial (noise)** distribution, $x_1 \sim p_1 = p_{\text{data}}$ is the **target (clean)** distribution.

same physics, opposite arrow. get used to it.

## now, we define the basic objects

**trajectory.** $\psi_t(x_0)$ is the path taken by a single sample over time, starting from $x_0$ at $t = 0$ and ending at $x_1 = \psi_1(x_0)$ at $t = 1$. so $\psi : [0, 1] \times \mathbb{R}^d \to \mathbb{R}^d$.

**flow.** the collection of trajectories $\psi_t(\cdot)$ as $x_0$ varies. think of a smoke cloud whose particles each follow their own path — the flow is the choreography of *all* of them.

**probability path.** $p_t(x)$ is the distribution of $x_t$ at time $t$. we require $p_0 = \mathcal{N}(0, I)$ and $p_1 = p_{\text{data}}$, so a probability path is a continuous interpolation between the two.

**vector field (velocity).** $u_t(x) \in \mathbb{R}^d$: the direction and speed at which a particle currently at location $x$ at time $t$ should move. the relationship between trajectory and velocity is just an ode:

$$
\frac{dx_t}{dt} = u_t(x_t).
$$

### velocity vs. score: highway vs. compass

useful contrast. the score $\nabla_x \log p_t(x)$ tells you the general direction of higher probability — a **compass**. the velocity $u_t(x)$ tells you specifically where to *go* from your current location at this moment — a **highway sign with a speed**: direction and magnitude.

a trajectory starting from $x_0$ is **unique** as long as $u_t$ is lipschitz continuous (picard–lindelöf theorem). lipschitz means $\|u_t(x) - u_t(y)\| \le M\|x - y\|$ for some constant $M$ — i.e., the velocity doesn't vary too dramatically over short distances. with lipschitz $u$, ode solutions don't cross or bifurcate.

## two ways to think about the same dynamics

given a velocity field $u_t(x)$, we can describe its effect at two scales.

**single-sample view (ode):**

$$
\frac{dx_t}{dt} = u_t(x_t),\qquad x_0 \sim p_0.
$$

**distributional view (continuity equation / mass conservation):**

$$
\frac{\partial p_t(x)}{\partial t} = -\,\nabla \cdot \big(p_t(x)\, u_t(x)\big).
$$

the continuity equation is just a statement of conservation: the rate at which density at $x$ changes equals (inflow of probability flux) minus (outflow). the "flux" is $p_t \cdot u_t$ — density times velocity, exactly like flow rate in fluid dynamics.

[question: what is the definition of flux, wht does it measure, and why $p_t \cdot u_t$ is the right quantity to measure this]

### why the divergence is of the *flux* and not of the *velocity*

a subtlety worth pausing on. you might have written the continuity equation as $\partial_t p = -\nabla \cdot u$. **wrong.** consider a scenario where everything has constant probability density and constant velocity, $p_t \equiv c$ and $u_t \equiv v_0$. density isn't changing, so $\partial_t p = 0$. the divergence of the velocity is also zero (it's a constant), so we'd get the same answer either way. but now imagine the *velocity* is constant and the *density* varies: probability mass is sliding sideways, and densities at fixed locations should change. $\nabla \cdot u_t = 0$, but $\nabla \cdot (p_t u_t) \ne 0$. the right object to track is the probability *flux* $p_t u_t$.

in 1-d, $\text{div}(f) = \partial f / \partial x$. in $d$ dimensions, $\text{div}(f) = \nabla \cdot f = \sum_{i=1}^d \partial f_i / \partial x_i$. positive divergence at a point means probability is leaving faster than arriving (density at $x$ is decreasing); negative divergence means the opposite.

if $u_t$ generates the path $p_t$ (the two satisfy the continuity equation), then a sample $x_0 \sim p_0$ pushed forward via $dx_t = u_t(x_t)\, dt$ will satisfy $x_t \sim p_t$ at every $t$. **vector field generates probability path.** this is the key bridge.

## flow models: training and inference

**goal.** map $x_0 \sim p_0$ to $x_1 \sim p_1$.

**strategy.**

1. **training.** estimate the vector field $u_t(x)$ for all $t \in [0, 1]$ and all $x \in \mathbb{R}^d$ via a neural network $u^\theta_t(x)$.
2. **inference.** sample $x_0 \sim p_0$, then numerically solve $\dot x_t = u^\theta_t(x_t)$ to obtain $x_1$.

### earlier attempts: continuous normalizing flows

the naive idea: learn $u^\theta$ by maximum likelihood. take logs of the continuity equation and integrate:

$$
\frac{d}{dt} \log p_t(x_t) = -\,\nabla \cdot u_t(x_t),
$$

which means

$$
\log p^\theta_1(x_1) = \log p_0(x_0) + \int_0^1 -\nabla \cdot u^\theta_t(x_t)\, dt.
$$

then one can do gradient ascent on $\log p^\theta_1$ over training data. this is **continuous normalizing flows** (chen et al., 2018). the catch: at training time, you have to *simulate the ode* and compute the divergence of the network — slow, expensive, and a pain.

we want a simulation-free training objective.

## flow matching (and why it's hard at first glance)

suppose we knew the true target velocity $u_t(x)$. then the obvious loss is l2 regression:

$$
\mathcal{L}_{\text{fm}} = \mathbb{E}_{t, x \sim p_t}\!\left[\|u^\theta_t(x) - u_t(x)\|^2\right].
$$

but, exactly as in score matching, we don't have access to the marginal $u_t(x)$.

the key trick — *the same trick as denoising score matching* — is to fall back on a **conditional** version where the math is closed-form, and then prove that the conditional and marginal objectives have the same gradients.

## a simpler setup: condition on a target sample

pick a single data point $x_1$. what if our target distribution were just a dirac at $x_1$? then we could ask: how should we go from $p_0 = \mathcal{N}(0, I)$ to a dirac at $x_1$?

**conditional probability path.** a clean choice (lipman et al., 2022) is the linear gaussian interpolation:

$$
p_t(x \mid x_1) = \mathcal{N}(t\, x_1,\; (1-t)^2 I).
$$

sanity check the boundary conditions:
- at $t = 0$: $\mathcal{N}(0, I) = p_0$. ✓
- at $t = 1$: $\mathcal{N}(x_1, 0) = \delta_{x_1}$. ✓

concretely, if $x_t \sim p_t(\cdot \mid x_1)$, then we can write

$$
x_t = t\, x_1 + (1 - t)\, x_0,\qquad x_0 \sim \mathcal{N}(0, I).
$$

a straight line from a gaussian sample $x_0$ to the data point $x_1$, parameterized by $t \in [0, 1]$.

**conditional vector field.** what velocity generates this conditional path? differentiate the trajectory:

$$
u_t(x_t \mid x_1) = \frac{d x_t}{dt} = x_1 - x_0.
$$

or equivalently, in terms of $x_t$:

$$
u_t(x \mid x_1) = \frac{x_1 - x}{1 - t}.
$$

you can check (via the continuity equation) that this $u_t(\cdot \mid x_1)$ does generate $p_t(\cdot \mid x_1)$.

**consequence.** if $x_0 \sim p_0(\cdot \mid x_1) = \mathcal{N}(0, I)$ and we evolve $x_t$ via $\dot x_t = u_t(x_t \mid x_1)$, then $x_t \sim p_t(\cdot \mid x_1)$ for every $t$. beautiful and simple.

## from conditional to marginal

the marginal probability path is obtained by integrating out $x_1$:

$$
p_t(x) = \int p_t(x \mid x_1)\, p_{\text{data}}(x_1)\, dx_1.
$$

[question: does integrating out x_1 mean averaging across all training datapoints / taking expectation in a way]

boundary conditions: $p_0(x) = \int \mathcal{N}(0, I)\, p_{\text{data}}(x_1)\, dx_1 = \mathcal{N}(0, I)$ (the conditional doesn't depend on $x_1$ at $t=0$); $p_1(x) = \int \delta_{x_1}\, p_{\text{data}}(x_1)\, dx_1 = p_{\text{data}}(x)$. ✓

the corresponding **marginal vector field** is the *posterior-weighted average* of the conditional fields. here is how it is forced on us.

we *want* a marginal velocity $u_t(x)$ that generates the marginal path $p_t(x)$ — i.e., satisfies the continuity equation

$$
\partial_t p_t(x) = -\nabla_x \cdot \big(p_t(x)\, u_t(x)\big).
$$

we *know* every conditional pair satisfies its own continuity equation,

$$
\partial_t p_t(x \mid x_1) = -\nabla_x \cdot \big(p_t(x \mid x_1)\, u_t(x \mid x_1)\big).
$$

multiply the conditional version by $p_{\text{data}}(x_1)$ and integrate over $x_1$:

$$
\int p_{\text{data}}(x_1)\, \partial_t p_t(x \mid x_1)\, dx_1 \;=\; -\int p_{\text{data}}(x_1)\, \nabla_x \cdot \big(p_t(x \mid x_1)\, u_t(x \mid x_1)\big)\, dx_1.
$$

on the left, swap the time derivative with the integral (regularity assumption) and use the definition of the marginal — that's exactly $\partial_t p_t(x)$. on the right, $\nabla_x$ doesn't see $x_1$, so it pulls out of the integral:

$$
\partial_t p_t(x) \;=\; -\nabla_x \cdot \!\left[\int p_t(x \mid x_1)\, u_t(x \mid x_1)\, p_{\text{data}}(x_1)\, dx_1\right].
$$

now compare with what the marginal continuity equation requires:

$$
\partial_t p_t(x) \;=\; -\nabla_x \cdot \big(p_t(x)\, u_t(x)\big).
$$

both right-hand sides are the divergence of *some* vector field, set equal to the same $\partial_t p_t$. strictly speaking, this only forces the two vector fields to agree *up to a divergence-free term* — there are infinitely many velocities that generate the same density evolution. so we're not solving for $u_t(x)$ uniquely; we're making a **choice**.

the natural choice is to set the two flux fields equal directly:

$$
p_t(x)\, u_t(x) \;:=\; \int p_t(x \mid x_1)\, u_t(x \mid x_1)\, p_{\text{data}}(x_1)\, dx_1.
$$

with this *definition*, the marginal continuity equation is satisfied by construction (just take $\nabla_x \cdot$ of both sides and read off both equations above). dividing by $p_t(x)$ gives the formula:

$$
u_t(x) = \int u_t(x \mid x_1)\, \underbrace{\frac{p_t(x \mid x_1)\, p_{\text{data}}(x_1)}{p_t(x)}}_{= p(x_1 \mid x)}\, dx_1.
$$

the recognized factor inside the integral is just bayes' rule: posterior over targets given current location.

read this as: "given that i am at location $x$ at time $t$, where should i go?" the answer is to consider every possible target $x_1$, weight it by how plausible it is that i'm being routed toward $x_1$, and take the weighted average velocity. **posterior mean.**

the construction also automatically *certifies* what we wanted: $u_t$ generates $p_t$, because we built it by enforcing the marginal continuity equation. so the derivation does double duty — it both gives us the formula and proves it's the right one.

## the miracle: cfm has the same gradients as fm

the conditional flow-matching loss is

$$
\mathcal{L}_{\text{cfm}} = \mathbb{E}_{t,\, x_1,\, x \sim p_t(\cdot \mid x_1)}\!\left[\|u^\theta_t(x) - u_t(x \mid x_1)\|^2\right].
$$

this is **tractable** — $u_t(x \mid x_1)$ is the closed-form expression we just derived. the flow-matching loss

[question: this being tractable menas that if we know what training point we are going towards, we know which direction to go, but if we don't know which x1 is our target, the direction that we will go towards is not tractable]

$$
\mathcal{L}_{\text{fm}} = \mathbb{E}_{t, x \sim p_t}\!\left[\|u^\theta_t(x) - u_t(x)\|^2\right]
$$

is what we *actually* want but can't compute. the claim:

$$
\nabla_\theta\, \mathcal{L}_{\text{fm}} = \nabla_\theta\, \mathcal{L}_{\text{cfm}}.
$$

i.e., training on the cfm loss is gradient-equivalent to training on the fm loss.

### sketch of why

expand both with $\|a - b\|^2 = \|a\|^2 - 2\langle a, b\rangle + \|b\|^2$. the $\|u^\theta_t\|^2$ terms agree. the $\|u_t\|^2$ and $\|u_t(\cdot \mid x_1)\|^2$ terms don't depend on $\theta$ — irrelevant. so the only thing to check is that the cross terms agree:

$$
\mathbb{E}_{t, x_1, x}\big[\langle u^\theta_t(x),\; u_t(x \mid x_1)\rangle\big] \;\stackrel{?}{=}\; \mathbb{E}_{t, x}\big[\langle u^\theta_t(x),\; u_t(x)\rangle\big].
$$

compute the lhs:

$$
\int_t \int_{x_1} \int_x \langle u^\theta_t(x),\, u_t(x \mid x_1)\rangle\, p_t(x \mid x_1)\, p_{\text{data}}(x_1)\, dx\, dx_1\, dt.
$$

pull $u^\theta_t(x)$ out and integrate the inside over $x_1$:

$$
\int_{x_1} u_t(x \mid x_1)\, p_t(x \mid x_1)\, p_{\text{data}}(x_1)\, dx_1
= p_t(x) \int_{x_1} u_t(x \mid x_1)\, \frac{p_t(x \mid x_1) p_{\text{data}}(x_1)}{p_t(x)}\, dx_1
= p_t(x)\, u_t(x).
$$

that last step uses the definition of the marginal vector field. plugging back:

$$
\int_t \int_x \langle u^\theta_t(x),\, u_t(x)\rangle\, p_t(x)\, dx\, dt = \mathbb{E}_{t, x \sim p_t}\big[\langle u^\theta_t(x),\, u_t(x)\rangle\big].
$$

done — the cross terms agree, so the gradients agree.

## final recap of the strategy

1. derive the target vector field for a simple case — dirac targets give us closed-form conditional dynamics.
2. construct the marginal target vector field via the continuity equation.
3. show the loss is tractable — gradients of fm and cfm are equal.
4. read off a stunningly simple loss.

[question: what exactly is the continuity equation, what was its role here?]

for the linear interpolation $x_t = t x_1 + (1-t) x_0$, the conditional velocity is just $x_1 - x_0$, so the final training objective is

$$
\mathcal{L}_{\text{cfm}} = \mathbb{E}_{t,\, x_0,\, x_1}\!\left[\|u^\theta_t(t x_1 + (1-t) x_0) - (x_1 - x_0)\|^2\right].
$$

read that aloud: sample noise $x_0$, sample data $x_1$, sample a time $t$, take the linear interpolant, and ask the network to predict $x_1 - x_0$ at the interpolant. that's *all*.

### why is it called "flow" matching?

historical reasons (continuous normalizing flows). and: if $u_t$ is lipschitz, the flow $\psi_t$ is a 1-to-1 mapping at each time. so we can think of $u^\theta$ ↔ $\psi^\theta$ as the same object in different language — vector field or flow.

## training and inference recipes

**training.**

1. sample noise $x_0 \sim \mathcal{N}(0, I)$, clean image $x_1 \sim p_{\text{data}}$, and time $t \sim \mathcal{U}(0, 1)$.
2. form $x_t = (1-t)\, x_0 + t\, x_1$.
3. predict $\hat v = u^\theta_t(x_t)$ and minimize $\|\hat v - (x_1 - x_0)\|^2$.

**inference.**

1. sample $x_0 \sim \mathcal{N}(0, I)$.
2. use a numerical ode solver (e.g., euler) to integrate from $t = 0$ to $t = 1$:

$$
x_{t_i} = x_{t_{i-1}} + u^\theta_{t_{i-1}}(x_{t_{i-1}})\,(t_i - t_{i-1}).
$$

3. output $x_1$.

already deterministic. no pf-ode detour — flow matching *is* deterministic from the start.

## are we happy? (spoiler: not quite.)

two concrete problems.

**learning complexity (intersecting paths).** consider a 2-d toy: two noise samples and two data samples, where the natural "x" pairing has paths that cross in the middle. the marginal vector field at the crossing has to average over two completely different target velocities — it ends up pointing in some compromise direction, which doesn't actually take any sample to its correct destination. the marginal field is well-defined but is the *posterior mean* of conditional fields, and means do badly on multimodal data. result: the model has to learn complicated curved trajectories to disentangle paths that should have been straight.

**inference inefficiency.** curved paths require many small steps to integrate accurately. even with a well-trained model, euler with 4 steps will be way off if the path bends sharply. and there's no cheap trick like dpm-solver here — the velocity has no exploitable linear structure to factor out.

## rectified flow: straighten the paths

the fix (liu et al., 2022) is shockingly simple. we retrain on the *paired* data we generated with the first model, which forces straighter paths.

**step 0.** train an initial flow-matching model. call it the **1-rectified flow**, with mapping $\psi^{(1)}$.

**step 1.** use $\psi^{(1)}$ to generate paired data: sample $x_0 \sim \mathcal{N}(0, I)$, then push it through $\psi^{(1)}$ to get $\hat x_1 = \psi^{(1)}_1(x_0)$. now we have *paired* $(x_0, \hat x_1)$ — every noise sample is paired with the specific data point the model would generate for it.

**step 2.** train a new flow-matching model on this paired data, using the linear interpolant $x_t = (1-t)\, x_0 + t\, \hat x_1$. because the pairing is now consistent (no more crossing assignments), the linear paths between matched pairs *don't intersect*, and the new model can learn them directly. this is the **2-rectified flow**.

**further steps.** repeat as desired.

### why does it work?

two properties (liu et al., 2022).

**property 1.** the resulting marginal at $t = 1$ is still $p_{\text{data}}$.

proof sketch. define $z_t = (1-t)\, x_0 + t\, \hat x_1$ where $\hat x_1 = \psi^{(1)}_1(x_0)$. by chain rule and law of total expectation, the new marginal at $t=1$ equals the distribution of $\hat x_1$, which by construction matches $p_{\text{data}}$ (because $\psi^{(1)}$ was trained to do that).

**property 2.** paths are provably straighter at each reflow.

define **straightness** as the variance of the velocity along the trajectory (a constant velocity → zero variance → fully straight). a telescoping argument plus variance decomposition shows the straightness measure decreases monotonically with each reflow.

### discussion

- one or two reflows is the sweet spot. after that, errors compound.
- with straightened paths, simple solvers like euler with very few steps (sometimes just one or two!) work surprisingly well.
- this is the engine behind several state-of-the-art image generators that promise "real-time" diffusion-quality samples.

## comparison: where does this fit?

we've now seen three paradigms, and they're really three perspectives on the same underlying mathematical object. the forward processes:

|  | forward process | what's learned |
|---|---|---|
| discrete-time diffusion (ddpm) | $x_t = \sqrt{\bar\alpha_t}\, x_0 + \sqrt{1-\bar\alpha_t}\, \varepsilon$ | noise $\varepsilon$ |
| score-based diffusion (ncsn/sde) | $x_t = x_0 + \sigma_t\, \varepsilon$ (ve) or vp-sde | score $\nabla_x \log p_t$ |
| flow matching | $x_t = (1-t)\, x_0 + t\, x_1$ | velocity $u_t = x_1 - x_0$ |

and the deterministic counterparts:

- ddpm ↔ ddim
- score sde ↔ pf-ode
- flow matching is **already deterministic**

the view that unifies all three (albergo et al., 2023) is **stochastic interpolants**, which writes a general $x_t = \alpha(t)\, x_0 + \beta(t)\, x_1 + \gamma(t)\, \varepsilon$ and recovers diffusion (one choice of $\alpha, \beta, \gamma$), score matching (another choice), and flow matching (yet another) as instances. different schedules, same machinery.

## wrap-up

[question: is this transport referring to the optimal transport literature?s]

flow matching reframes generation as transport: instead of noising and denoising, we directly move probability mass along a learned velocity field. the conditional flow-matching trick mirrors the conditional score-matching trick from lecture 2 — we can't access the marginal target, but we can access conditional targets in closed form, and the gradients turn out to be equivalent. the training loss is simply l2 regression onto $x_1 - x_0$. rectified flow then trains on the model's own paired output, straightening paths and unlocking very-few-step inference.

in the end, all three paradigms — diffusion, score matching, flow matching — are different lenses on the same problem: smoothly transporting gaussian noise to data. choose the lens that's most convenient for your application.