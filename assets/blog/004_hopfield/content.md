*based on* [Hopfield (1982)](https://doi.org/10.1073/pnas.79.8.2554) and [Hebb (1949)](https://archive.org/details/organizationofbe00hebbrich).

I've been thinking about Hopfield networks and collective intelligence of multi-agent systems. This is a quick overview of what they are and how they work.

*Spin Glass Setup.* Imagine a grid of tiny arrows (*spins*) each pointing up or down. A configuration of $N$ spins is a vector with one slot per site, each slot holding an up- or down-arrow. We write up as $+1$ and down as $-1$, so a system for $N=8$ might look like:

$$
S \;=\; (\,\uparrow,\; \downarrow,\; \uparrow,\; \uparrow,\; \downarrow,\; \uparrow,\; \downarrow,\; \downarrow\,) \;=\; (+1,\; -1,\; +1,\; +1,\; -1,\; +1,\; -1,\; -1).
$$

In an ordinary magnet all the arrows want to agree and point in the same direction (The Curie–Weiss Model). In a *spin glass* some pairs want to agree and others want to disagree. Each pair of sites $(i, j)$ carries a *coupling* $J_{ij}$: positive if the two sites prefer to agree, negative if they prefer to disagree. The energy of a configuration is the sum over all pairs,

$$
H(S) \;=\; -\sum_{i<j} J_{ij}\, S_i\, S_j,
$$

so a satisfied pair contributes $-|J_{ij}|$ and a violated pair contributes $+|J_{ij}|$. The system is then solving the optimization over the discrete cube,

$$
S^{*} \;=\; \arg\min_{S \,\in\, \{-1,\,+1\}^{N}} \; H(S),
$$

and the dynamics (flipping spins to lower $H$) is local search on this landscape.

*Frustration and Local Minima.* Often no configuration can satisfy everyone at once. For example, if site A wants to disagree with site B, site B wants to disagree with site C, but site A also wants to *agree* with site C, every preference can not be satisfied at the same time (see *frustration*). The energy minimizing system then has many configurations that are each a local optimum. The *energy* is high when many couplings are unhappy, low when most are satisfied. The resulting loss landscape has loss valleys where each valley is a local minimum. If we initialize the system in a state close to these valleys and proceed to update the states to minimize the energy, the system rolls downhill until it lands in a loss valley.

*Hopfield Networks Motivation.* A Hopfield network sets the weights between the neurons such that the state of the system when the local minimum is reached stores a pattern from the training data. Suppose you have patterns you want to store, each one a vector $\xi^\mu$ of $\pm 1$ s. The question is, how do you set the weights $J_{ij}$ such that, when you initialize the state and update it by minimizing the energy, the state almost always rolls into the pattern from the training set that is closest to the initial state.

*[Hebbian Learning](https://en.wikipedia.org/wiki/Hebbian_theory).* In 1949 (more than three decades before [Hopfield (1982)](https://doi.org/10.1073/pnas.79.8.2554)) [Donald Hebb](https://en.wikipedia.org/wiki/Donald_O._Hebb) proposed that neurons that are co-activated build a stronger connection (*"neurons that fire together wire together"*). We can use this idea to come up with a formula for setting $J_{ij}$. For each pattern $\xi^\mu$ you want stored, look at every pair of sites $i$ and $j$:

- If $\xi^\mu_i$ and $\xi^\mu_j$ have the same sign in that pattern, add a vote that says "these two should agree."
- If they have opposite signs, add a vote that says "these two should disagree."

We sum those votes across every pattern we would like to store to build the coupling matrix:

$$J_{ij} = \frac{1}{N} \sum_{\mu=1}^p \xi^\mu_i \xi^\mu_j.$$


*Energy in terms of overlaps.* Plugging this $J$ back into the Hamiltonian gives a much more interpretable expression.

$$
H(S)\;=\; -\sum_{i<j} J_{ij}\, S_i\, S_j \;=\; -\frac{1}{2}\sum_{i,j} J_{ij}\, S_i S_j \;=\; -\frac{1}{2N}\sum_{\mu=1}^{p}\,\sum_{i,j} \xi^\mu_i \xi^\mu_j\, S_i S_j.
$$

We group $S_i$ with $\xi^\mu_i$ and $S_j$ with $\xi^\mu_j$:

$$
\sum_{i,j} \xi^\mu_i \xi^\mu_j\, S_i S_j \;=\; \Bigl(\sum_i \xi^\mu_i S_i\Bigr)\!\Bigl(\sum_j \xi^\mu_j S_j\Bigr) \;=\; \Bigl(\sum_i \xi^\mu_i S_i\Bigr)^{\!2}.
$$

Define the overlap between the current state and pattern $\mu$,

$$
m^\mu \;=\; \frac{1}{N}\sum_{i=1}^{N} \xi^\mu_i\, S_i \;=\; \frac{1}{N}\,\xi^\mu \!\cdot\! S,
$$

so that $\sum_i \xi^\mu_i S_i = N m^\mu$. The overlap $m^\mu$ is just the normalized inner product between $S$ and $\xi^\mu$: it equals $+1$ if $S = \xi^\mu$, $-1$ if $S = -\xi^\mu$, and $\approx 0$ if they are uncorrelated. Substituting back:

$$
H(S) \;=\; -\frac{1}{2N}\sum_{\mu=1}^{p} (N m^\mu)^2 \;=\; -\frac{N}{2}\sum_{\mu=1}^{p} (m^\mu)^2.
$$

So the energy is low precisely when *some* $m^\mu$ is close to $\pm 1$. This happens when the network has committed to one of the stored memories.

*Energy Minimization.* For inference, we start with a corrupted input and let each neuron update by $S_i \leftarrow \text{sign}\!\left(\sum_j J_{ij} S_j\right)$, which is the same as saying *"look at the weighted opinion of everyone you're connected to, and flip to agree."* As a result of these updates, the state almost always settles into the stored memory closest in Hamming distance to where it started. That pattern is *content-addressable memory*. In ordinary RAM (or in a Python dictionary), you input an address or key and read back whatever byte or value lives there. Here you input a *noisy fragment* of a stored pattern, and the dynamics return the associated *full pattern*.