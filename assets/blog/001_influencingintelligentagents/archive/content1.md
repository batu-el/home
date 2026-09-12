we recently wrote a position paper with friends from the [cognitive security task force](https://www.cstf.dev/) (under Stanford HAI) and the [intelligence khollective](https://knight-hennessy.stanford.edu/opportunities/intelligence-collective) (under the Knight-Hennessy scholarship). our paper argues that AI development should prioritize cognitive security; you can find it [here](paper). in this post, i offer my perspective on the opportunities and risks of *influencing intelligent agents*. it is meant to complement the paper, not substitute for it.

## influencing intelligent agents
An intelligent agent's behavior is captured by a *policy* $\pi_\theta(a \mid o)$: a function, often a neural network parameterized by $\theta$, that maps an observation of the world $o$ to a distribution over actions $a$. This policy encodes the agent's accumulated knowledge, beliefs, values, and learned associations.

In this context, influencing the agent means changing what action $a$ the agent takes. There are three fundamentally different ways to do that, and keeping them separate matters because they operate through different means:

*Type 0: forcing.* Forcing overrides the action directly. The physical example here would be moving someone's hand by force. The agent's policy is not in action here, nor does how the policy processes the observation affect the action. The action is "forced" and, at this point, is not governed by the agent. Forcing can also be done at a deeper level by sending a signal to the neural network that causes it to output a particular action. These types of interventions are studied under [model steering](add reference).

*Type 1: deception.* Deception changes the observations of the agent. The objective of the deceiver is to make the agent perceive an observation $o'$ such that, once the agent's policy processes $o'$, the agent's natural response is the desired action $a'$. Formally,
$$
o' = \arg\max_o \, \pi_\theta(a' \mid o).
$$
Note that deception is the inverse problem of the forward problem that the policy $\pi$ solves.

*Type 2: teaching.* Teaching is a more subtle case. The goal of the teacher is to provide the agent with a series of experiences such that, once the agent's learning algorithm $\Psi$—an update rule such as gradient descent—updates the parameters after processing those experiences, the agent's policy changes so that it now gives the response $a'$ to the observation $o$. While the deceiver changes the agent's observations, the teacher changes the parameters $\theta$. However, the teacher does not have the ability to change them directly. Therefore, she curates a series of experiences $E$ such that, once the agent learns from those experiences, the new parameters
  $$
  \theta_{t+1} = \Psi(\theta_1, \theta_2, \ldots, \theta_t, E)
  $$
  satisfy
  $$
  \theta_{t+1} = \arg\max_\theta \, \pi_\theta(a' \mid o).
  $$
  Note that teaching is the inverse problem of the forward problem that the learning algorithm $\Psi$ solves.

## part 2. opportunities and risks

the society hasn't yet properly distinguished and formulated these cases, which i guess it my contribution here. note that similar discussions usually happen around the factuality (misinformation/disinformation), but the dimension i introduce here is orthogonal to factuality. both type 1 and type 2 influence can be implemented via factual claims or via lies. so we will set that aside for now.

as ai technologies mature, opportunities will emerge alongside the risks. but to talk about either, we need to be clear about *when* an act of influence is *bad* and when it isn't. a useful starting point is the asymmetry in how we already treat the three types when applied to humans. 

type-0 (forcing) is unambiguously against our social values, norms, and in many cases laws. type-1 (deception) is also bad, but less so. type-2 (teaching) is, in most contexts, not just acceptable but desirable.

why the asymmetry? one explanation is *tractability*. forcing has always been tractable; anyone can grab a hand. effective deception used to require sophistication, scale, or proximity. effective teaching required even more: long-term access, structure, expertise. as a result, types 1 and 2 were never as immediately threatening as type 0, and our norms hardened around the easy case.

generative AI changes this. effective deception is now cheap, scalable, and highly targeted. effective teaching, the at-scale shaping of beliefs and behavior, is rapidly becoming so. if the only thing keeping types 1 and 2 in a softer normative category was practical difficulty, then the underlying values question becomes urgent: what is it about *forcing* that we object to, and does the objection generalize?

it might. one consistent reading of our existing norms is that we accept influences that, on net, make the influenced person's life better, and reject the ones that make it worse, independent of whether they operate on the body, the input, or the policy. forcing someone away from a moving car is fine. forcing someone off a roof is not. teaching someone to read is good. teaching them to hate is not. on this reading, *risks* are exactly the cases where the influence makes the agent's life worse, and *opportunities* are the cases where it makes the agent's life better.

## part 3. research i want to work on

i've been thinking about how interactions with models influence human behavior. i believe model alignment should take into account *how interactions with the model change people, and through them, society*. if a model always shows me my preferred responses and i am becoming more radicalized as a result, then maybe i should not be shown more radicalizing content, even if, by every short-horizon preference signal, that is what i would have clicked on.

two concrete projects in this direction:

*project 1. how language models change people* i want to understadn the potential type-1 and type-2 effects (and biases) of language models on their users: how repeated interaction with a model shapes preferences and beliefs, empathetic tendencies, or user's resilience to deception. the goal is twofold: to measure these effects rigorously, and to ask whether models can be designed so that the changes they induce are positive, like making people more helpful and harmless, or empathetic and more resilient against manipulation, or simply more reflective about their own preferences.

*project 2. training teachers* if interaction shapes the user, then a model is a teacher whether or not we designed it to be. so: what is a *good* teacher? what objective do we train against if we want the model to be a good teacher? this is the inverse of the learning problem, which is explored under synthetic data generation. how to design the curriculum a model presents to a person so that the long-run effect on that person is one they would, on reflection, endorse.

if any of this is of interest to you, we wrote a [position paper](paper) which, today, i am presenting at the ICLR AIWILD workshop. if you want to collaborate on research related to these ideas, consider joining the [cognitive security task force](https://www.cstf.dev/) or the [intelligence khollective](https://knight-hennessy.stanford.edu/opportunities/intelligence-collective), and feel free to reach out direclty to me.