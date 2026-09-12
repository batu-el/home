## motivation

in lecture 1 we built diffusion models by writing down a hierarchical markov model, deriving an elbo, and reading off a noise-prediction loss. that worked, but the route was indirect. today we approach the same problem from a completely different angle, and we'll see that the two perspectives meet in a beautiful way.

the motivation: images come from some complicated, unknown distribution $p_{\text{data}}(x)$. we want to push samples from a simple gaussian noise distribution toward that data distribution. if we knew the *gradient* of the log-density of the data, we could literally do this by gradient ascent — walking samples uphill in log-probability. so the question becomes: can we learn that gradient?

## why the *gradient of log* and not the gradient of the density itself?

you might think: "fine, just learn $\nabla_x \, p_{\text{data}}(x)$ directly." two problems.

**problem 1 — normalization is intractable.** probability densities have to integrate to one. so we always model

$$
p_{\text{data}}(x) = \frac{f_\theta(x)}{Z}, \qquad Z = \int f_\theta(x)\, dx.
$$

the normalizer $Z$ is a $d$-dimensional integral over the entire image space. there is no hope.

**problem 2 — numerical instability.** in low-density regions, $p$ can be astronomically small, and small differences in tiny numbers are noisy.

**the fix: take the gradient of the log.** notice

$$
\nabla_x \log p_{\text{data}}(x) = \nabla_x \log f_\theta(x) - \nabla_x \log Z = \nabla_x \log f_\theta(x).
$$

the normalizer $Z$ doesn't depend on $x$, so it just disappears. we've sidestepped the intractability entirely. as a bonus, the log-gradient

$$
\nabla_x \log p(x) = \frac{\nabla_x p(x)}{p(x)}
$$

points in the same direction as $\nabla_x p(x)$ but is rescaled by $1/p(x)$, which automatically inflates gradients in low-density regions where they would otherwise vanish.

this object — $\nabla_x \log p(x)$ — has a name. it is the **score function**:

$$
s(x) := \nabla_x \log p(x).
$$

geometrically, the score is a vector field over $\mathbb{R}^d$: at every point it tells you the direction of steepest ascent of log-density. in lecture 3 we'll contrast this with a *velocity* field; for now think of the score as a compass pointing toward higher-probability regions.

## using the score to sample: langevin dynamics

if we had access to $s(x) = \nabla_x \log p(x)$, how would we sample? **langevin dynamics:**

$$
x_t = x_{t-1} + \frac{\alpha}{2}\, s(x_{t-1}) + \sqrt{\alpha}\,\varepsilon_t,\qquad \varepsilon_t \sim \mathcal{N}(0, I).
$$

the deterministic term $\tfrac{\alpha}{2}\, s$ pushes us toward higher density. the stochastic term $\sqrt{\alpha}\,\varepsilon$ is a brownian kick that prevents collapse to a single mode and lets the chain explore — it's an mcmc method. under mild conditions, as $t \to \infty$ and $\alpha \to 0$, the iterates converge to samples from $p$.

so if we can *learn* the score, we can sample. time to figure out how.

## score matching: the goal and the catch

the natural objective is to fit a parametric score model $s_\theta(x)$ to the true score:

$$
\mathcal{L}_{\text{sm}} = \mathbb{E}_{x \sim p_{\text{data}}}\!\left[\left\| s_\theta(x) - \nabla_x \log p_{\text{data}}(x) \right\|^2\right].
$$

beautiful — except we don't have access to $\nabla_x \log p_{\text{data}}(x)$. that's the whole reason we're here.

there are a few classical workarounds:

- **implicit score matching (ism)** — integrate by parts, $\mathcal{L}_{\text{ism}} = \mathbb{E}_x\!\left[\tfrac{1}{2}\|s_\theta(x)\|^2 + \nabla_x \cdot s_\theta(x)\right]$. the divergence is expensive in high dimensions.
- **sliced score matching (ssm)** — project onto random directions $v$, $\mathcal{L}_{\text{ssm}} = \mathbb{E}_{x, v}\!\left[2 v^\top \nabla_x s_\theta(x) v + |v^\top s_\theta(x)|^2\right]$. cheaper, but still requires hessian-vector products.

both work in principle but are awkward at scale.

## clever idea: add noise so the score becomes analytical

here is the move that unlocks everything. score matching is hard because $\nabla_x \log p_{\text{data}}(x)$ is unknown. but for a *gaussian*, the score is trivial.

score of a 1-d gaussian, $x \sim \mathcal{N}(\mu, \sigma^2)$:

$$
p(x) = \frac{1}{\sqrt{2\pi\sigma^2}}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) \;\Longrightarrow\; \nabla_x \log p(x) = -\frac{x - \mu}{\sigma^2}.
$$

so: take any data point $x$, perturb it with gaussian noise to get $\tilde x = x + \sigma \varepsilon$ with $\varepsilon \sim \mathcal{N}(0, I)$. then the *conditional* density is gaussian:

$$
q_\sigma(\tilde x \mid x) = \mathcal{N}(x,\; \sigma^2 I)\quad\text{so}\quad \nabla_{\tilde x} \log q_\sigma(\tilde x \mid x) = -\,\frac{\tilde x - x}{\sigma^2}.
$$

that right-hand side is fully tractable: it's just (noise added) divided by $-\sigma^2$.

the **denoising score matching** loss (vincent, 2010) replaces the unknown true score with the conditional score:

$$
\mathcal{L}_{\text{dsm}}(q_\sigma) = \mathbb{E}_{\tilde x, x}\!\left[\left\|s_\theta(\tilde x) - \nabla_{\tilde x} \log q_\sigma(\tilde x \mid x)\right\|^2\right].
$$

### why is this equivalent to fitting the noised marginal score?

the noised marginal is $q_\sigma(\tilde x) = \int q_\sigma(\tilde x \mid x)\, p_{\text{data}}(x)\, dx$ (a mixture of gaussians centered on data points). what we *really* care about is matching $\nabla_{\tilde x} \log q_\sigma(\tilde x)$. the vincent (2010) result says:

$$
\mathbb{E}_{\tilde x \sim q_\sigma}\!\left[\|s_\theta(\tilde x) - \nabla_{\tilde x} \log q_\sigma(\tilde x)\|^2\right] = \mathbb{E}_{\tilde x, x}\!\left[\|s_\theta(\tilde x) - \nabla_{\tilde x} \log q_\sigma(\tilde x \mid x)\|^2\right] + \text{const}.
$$

sketch: expand $\|a - b\|^2 = \|a\|^2 - 2\langle a, b\rangle + \|b\|^2$ on both sides. the $\|a\|^2$ terms (with $a = s_\theta$) match. the $\|b\|^2$ terms don't depend on $\theta$, so they're irrelevant for optimization. so we only need the cross terms $-2\langle s_\theta, \cdot \rangle$ to match. take the marginal-side cross term and use $q\,\nabla \log q = \nabla q$:

$$
\mathbb{E}_{\tilde x \sim q_\sigma}\!\left[\langle s_\theta(\tilde x),\, \nabla_{\tilde x} \log q_\sigma(\tilde x) \rangle\right]
= \int \langle s_\theta(\tilde x),\, \nabla_{\tilde x} q_\sigma(\tilde x) \rangle\, d\tilde x.
$$

now substitute the definition of the marginal $q_\sigma(\tilde x) = \int q_\sigma(\tilde x \mid x)\, p_{\text{data}}(x)\, dx$ and push the gradient inside the integral:

$$
= \int \!\Big\langle s_\theta(\tilde x),\, \int \nabla_{\tilde x} q_\sigma(\tilde x \mid x)\, p_{\text{data}}(x)\, dx \Big\rangle\, d\tilde x
= \int\!\!\int q_\sigma(\tilde x \mid x)\, p_{\text{data}}(x)\, \langle s_\theta(\tilde x),\, \nabla_{\tilde x} \log q_\sigma(\tilde x \mid x) \rangle\, dx\, d\tilde x,
$$

where the last step undoes the same $\nabla q = q\,\nabla \log q$ identity for the *conditional*. recognizing $q_\sigma(\tilde x \mid x)\, p_{\text{data}}(x)$ as the joint density of $(\tilde x, x)$:

$$
= \mathbb{E}_{\tilde x, x}\!\left[\langle s_\theta(\tilde x),\, \nabla_{\tilde x} \log q_\sigma(\tilde x \mid x) \rangle\right],
$$

which is exactly the cross term on the dsm side. the two cross terms agree, the $\|s_\theta\|^2$ terms agree, and the $\|b\|^2$ terms differ only by a $\theta$-independent constant — proving the equality.

bottom line: minimizing dsm is equivalent (up to a $\theta$-independent constant) to minimizing the score-matching loss on the *noised* distribution $q_\sigma$. tractable, exact, and just $L^2$ regression in disguise.

## a subtlety: vanilla dsm is brittle

there's a knob we haven't tuned: the noise level $\sigma$.

- **small $\sigma$:** $q_\sigma$ is close to $p_{\text{data}}$, which is what we want — but the data lies on a thin manifold and there is essentially zero probability mass in low-density regions. the score estimator is very noisy there because we never see training points away from the manifold.
- **large $\sigma$:** $q_\sigma$ is smooth and the score is well-estimated everywhere — but it no longer resembles $p_{\text{data}}$.

neither extreme is good on its own.

### ncsn: combine multiple noise levels

song & ermon's **noise conditional score network** (ncsn, 2019) trains one model that takes the noise level as input:

$$
s_\theta(x, \sigma_i),\qquad \sigma_1 < \sigma_2 < \cdots < \sigma_L.
$$

the training loss aggregates dsm losses across levels:

$$
\mathcal{L}_{\text{ncsn}} = \sum_{i=1}^L \lambda(\sigma_i)\, \mathbb{E}_{x, \tilde x}\!\left[\left\|s_\theta(\tilde x, \sigma_i) - \nabla_{\tilde x} \log q_{\sigma_i}(\tilde x \mid x)\right\|^2\right].
$$

at inference time we sample with **annealed langevin dynamics** (ald): start at the largest noise level (where the score is well-estimated), do a few langevin steps, then anneal $\sigma$ down to the smallest level. concretely:

1. sample $x \sim \mathcal{N}(0, \sigma_L^2 I)$.
2. for each $\sigma_i$ from $\sigma_L$ down to $\sigma_1$, perform $K$ steps of langevin dynamics:

$$
x \;\leftarrow\; x + \tfrac{\alpha_i}{2}\, s_\theta(x, \sigma_i) + \sqrt{\alpha_i}\,\varepsilon, \qquad \varepsilon \sim \mathcal{N}(0, I).
$$

3. return $x$.

the high noise levels do the rough work of moving the chain into a high-density region; the low noise levels polish the details.

## ddpm and ncsn are the same model

compare: ddpm trains a **noise predictor** $\varepsilon_\theta(x_t, t)$, and ncsn trains a **score predictor** $s_\theta(x, \sigma)$. they look different — but they're not.

for ddpm, $x_t \mid x_0 \sim \mathcal{N}(\sqrt{\bar\alpha_t}\, x_0,\; (1-\bar\alpha_t)I)$. apply the gaussian-score formula to this conditional:

$$
\nabla_{x_t} \log q(x_t \mid x_0) = -\,\frac{x_t - \sqrt{\bar\alpha_t}\, x_0}{1 - \bar\alpha_t} = -\,\frac{\sqrt{1-\bar\alpha_t}\,\varepsilon}{1 - \bar\alpha_t} = -\,\frac{\varepsilon}{\sqrt{1-\bar\alpha_t}}.
$$

so the score is just (negative) the noise we added, divided by a known scaling. **score and noise prediction are equivalent reparameterizations.** ddpm is variance-*preserving* ($x_t$ has bounded variance), ncsn is variance-*exploding* ($x_t$ variance grows with $\sigma$). same idea, different bookkeeping.

## going continuous: stochastic differential equations

so far, time is discrete. what if $T$ is huge and the per-step noise is tiny? the discrete process should converge to a continuous-time stochastic process. concretely:

a **wiener process** $W_t$ is the continuous analog of "summing many independent gaussian increments." it satisfies:

- $W_0 = 0$,
- $W_t - W_s \sim \mathcal{N}(0, (t-s)I)$ for $t > s$,
- increments over disjoint intervals are independent.

heuristically, $dW \sim \sqrt{dt}\,\varepsilon$.

### from ddpm to a forward sde

start from $x_t = \sqrt{1-\beta_t}\, x_{t-1} + \sqrt{\beta_t}\,\varepsilon$. subtract:

$$
x_t - x_{t-1} = (\sqrt{1-\beta_t} - 1)\, x_{t-1} + \sqrt{\beta_t}\,\varepsilon.
$$

define $\beta_t = \beta(t)\,dt$ (the noise rate at time $t$ times the timestep). substituting,

$$
x_t - x_{t-1} = (\sqrt{1 - \beta(t)\,dt} - 1)\, x_{t-1} + \sqrt{\beta(t)\,dt}\,\varepsilon.
$$

for small $dt$, taylor-expand $\sqrt{1-\beta(t)\,dt} \approx 1 - \tfrac{1}{2}\beta(t)\,dt$, and use $\sqrt{dt}\,\varepsilon = dW$:

$$
dx = -\tfrac{1}{2}\beta(t)\, x\, dt + \sqrt{\beta(t)}\, dW.
$$

this is the **variance-preserving sde** — the continuous limit of ddpm.

### the general form

every diffusion model we've seen fits the template

$$
dx = \underbrace{f(x, t)\, dt}_{\text{drift (deterministic)}} + \underbrace{g(t)\, dW}_{\text{diffusion (stochastic)}}.
$$

the two flavors that map onto our two earlier methods:

| | variance-preserving (ddpm) | variance-exploding (ncsn) |
|---|---|---|
| $f(x, t)$ | $-\tfrac{1}{2}\beta(t)\, x$ | $0$ |
| $g(t)$ | $\sqrt{\beta(t)}$ | $\sqrt{\dfrac{d[\sigma^2(t)]}{dt}}$ |
| $x_t \mid x_0$ | $\mathcal{N}(\sqrt{\bar\alpha(t)}\, x_0,\; (1-\bar\alpha(t))I)$ | $\mathcal{N}(x_0,\; \sigma^2(t)\, I)$ |

either way, training is the same denoising score matching as before, just with continuous $t \sim \mathcal{U}(0, T)$:

$$
\mathcal{L}_{\text{dsm}} = \mathbb{E}_{t, x_0, x_t}\!\left[\lambda(t)\, \big\|s_\theta(x_t, t) - \nabla_{x_t} \log p(x_t \mid x_0)\big\|^2\right].
$$

## the reverse sde

now the magical fact (anderson, 1982). if a forward process satisfies

$$
dx = f(x, t)\, dt + g(t)\, dW,
$$

then there is a **reverse-time sde** that samples the same marginals when run backward:

$$
dx = \big[f(x, t) - g(t)^2\, \nabla_x \log p_t(x)\big]\, dt + g(t)\, d\bar W.
$$

where $d\bar W$ is a reverse-time wiener process.

pause to read this. the drift in reverse time has the original drift $f(x, t)$ *plus* a correction term $-g(t)^2 \nabla_x \log p_t(x)$. the correction pulls samples toward regions of higher density even more aggressively than the score alone, to compensate for the diffusion term that's still pushing them around stochastically. the score $\nabla_x \log p_t(x)$ is what we're learning. everything else is known from the forward process.

### inference recipe (euler–maruyama)

to generate, we discretize the reverse sde. the euler–maruyama scheme:

1. sample $x_T \sim \mathcal{N}(0, \sigma_T^2 I)$.
2. for $i = N, N-1, \ldots, 1$, with step size $\Delta t = t_i - t_{i-1}$,

$$
x_{t_{i-1}} = x_{t_i} - \big[f(x_{t_i}, t_i) - g(t_i)^2\, s_\theta(x_{t_i}, t_i)\big]\Delta t + g(t_i)\sqrt{\Delta t}\,\varepsilon_i.
$$

3. output $x_0$.

this needs a lot of steps (1000–2000) because we don't know in advance which regions are "easy" vs. "hard," and the stochastic term injects extra error that we have to absorb with small $\Delta t$.

## probability flows: removing the stochasticity

the stochastic term has two costs. **slower solver** because we need fine discretization to control the noise. **more error sources** — both finite-step discretization error and the injected stochastic noise. so: can we get away without it?

suppose hypothetically we wrote

$$
dx = v(x, t)\, dt
$$

for some drift $v$. no $dW$. then we'd have a deterministic ode, and ode solvers are *much* more efficient (runge-kutta etc.). faster solver, only one source of error (discretization).

the miracle (song et al., 2020) is that you really *can* convert the sde to an ode with the same marginals — a different sample-level dynamic, but identical density evolution at every time.

### derivation sketch

start from the forward sde

$$
dx = f(x, t)\, dt + g(t)\, dW.
$$

the corresponding **fokker–planck equation** describes how the density $p_t(x)$ evolves (this is a theorem; treat as given):

$$
\frac{\partial p_t}{\partial t} = -\nabla \cdot \big(f(x, t)\, p_t(x)\big) + \tfrac{1}{2} g(t)^2 \,\Delta p_t(x).
$$

use the identity $g^2 \Delta p = g^2 \nabla \cdot (\nabla p) = g^2 \nabla \cdot (p\, \nabla \log p)$ (because $\nabla p = p\, \nabla \log p$):

$$
\frac{\partial p_t}{\partial t} = -\nabla \cdot \!\Big(p_t \big[f(x, t) - \tfrac{1}{2} g(t)^2 \nabla_x \log p_t(x)\big]\Big).
$$

this is a **continuity equation** $\partial_t p + \nabla \cdot (p\, v) = 0$ with effective velocity

$$
v(x, t) = f(x, t) - \tfrac{1}{2} g(t)^2 \nabla_x \log p_t(x).
$$

a continuity equation describes the density evolution under *deterministic* transport along the velocity $v$. in other words, the deterministic ode

$$
dx = \Big[f(x, t) - \tfrac{1}{2} g(t)^2\, \underbrace{\nabla_x \log p_t(x)}_{\approx s_\theta(x, t)}\Big] dt
$$

has the **same marginal densities** $p_t$ at every $t$ as the original sde. this is the **probability flow ode (pf-ode)**.

important caveat: same marginals does **not** mean same trajectories. a given starting noise $x_T$ leads to *different* image samples under the sde versus the ode. both samples are drawn from the same data distribution, but the path through latent space is different.

### comparison

| | reverse sde | pf-ode |
|---|---|---|
| equation | $dx = [f - g^2 s_\theta]dt + g\, d\bar W$ | $dx = [f - \tfrac{1}{2}g^2 s_\theta]\, dt$ |
| process | stochastic | deterministic |
| diversity | higher | lower |
| sample quality | higher | lower |
| sampling speed | slower | faster |

notice the analogy with lecture 1: pf-ode is to the reverse sde what ddim is to ddpm. same trade-off, same way of buying speed.

## faster ode solvers: dpm-solver

once we have an ode, we can use any ode solver. the simplest, **euler's method**, is 1 nfe per step but has large error. **runge–kutta 4** is 4 nfes per step with smaller error. can we do better by exploiting the *structure* of the pf-ode?

for diffusion, the pf-ode has the form

$$
\frac{dx}{dt} = a(t)\, x + b(t)\, \varepsilon_\theta(x, t),
$$

where the first term is **linear in $x$** and the second is **non-linear in $x$** (because $\varepsilon_\theta$ is a neural network).

**traditional solvers** discretize the whole right-hand side. **dpm-solver** (lu et al., 2022) does something smarter: solve the linear part *exactly* (it's just an ode with constant coefficients in disguise), and only discretize the nonlinear part. after variation of constants and a change of variables to the noise log-snr, the iteration becomes

$$
x_{t_{i-1}} = \alpha\, x_{t_i} + \int_{t_i}^{t_{i-1}} \kappa(s)\, \varepsilon_\theta(x_s, s)\, ds,
$$

and only the integral (the nonlinear term) needs a numerical approximation. approximating $\varepsilon_\theta$ with a taylor expansion of order $k-1$ gives **dpm-solver-$k$**:

- dpm-solver-1: 1 nfe per step.
- dpm-solver-2: 2 nfe per step.
- dpm-solver-$k$: $k$ nfe per step.

empirically: 10–20 nfes are enough to produce reasonable samples, no retraining required.

## the big picture

we've now seen two stories:

- **lecture 1 (variational view):** define a forward chain, write an elbo, derive a noise-prediction loss. speedup via ddim.
- **lecture 2 (score view):** learn $\nabla_x \log p_t(x)$ via denoising score matching. take continuous limit → sde. same marginals → pf-ode. speedup via dpm-solver.

these are two languages for the *same model class*. ddpm is a discretization of a variance-preserving sde; ddim is essentially a coarse pf-ode solver. score matching and noise prediction are equivalent reparameterizations.

the mindset of lecture 2 — **forward sde → fokker-planck → continuity equation → pf-ode → fast solver** — is the through-line that gets us from "1000 steps to make one image" down to "10 steps to make one image" without retraining a thing.