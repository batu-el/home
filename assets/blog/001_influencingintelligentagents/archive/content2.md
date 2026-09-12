we recently wrote a position paper with friends from the [cognitive security task force](https://www.cstf.dev/) (under Stanford HAI) and the [intelligence khollective](https://knight-hennessy.stanford.edu/opportunities/intelligence-collective) (under the Knight-Hennessy scholarship). our paper argues that AI development should prioritize cognitive security; you can find it [here](paper). in this post, i offer my perspective on the opportunities and risks of *influencing intelligent agents*. it is meant to complement the paper, not substitute for it.

## part 1. influencing intelligent agents

### what is an intelligent agent?

an agent is an entity with a *cognitive process* that maps the current state of the environment to an action. more formally, the agent has a *policy* $\pi_\theta$ over actions given states,

$$\pi_\theta(a \mid s),$$

representing the probability that the agent takes action $a$ when it finds itself in state $s$. 


$\pi$ is a neural network[^nn] parameterized by $\theta$, which captures the tendencies of the agent's cognitive process: its accumulated knowledge, beliefs, values, and learned associations. the agent observes the world state, runs it through $\pi_\theta$, and samples a sequence of actions. that's the whole picture we need.[^learning]

[^nn]: see *Compressed Sensing, Sparsity, and Dimensionality in Neuronal Information Processing and Data Analysis* ([pdf](https://ganguli-gang.stanford.edu/pdf/12.CompSense.pdf)): *"Neuronal networks are highly complex dynamical systems consisting of large numbers of neurons interacting through synapses. Such networks subserve dynamics over multiple time-scales. … On slower timescales, on the order of seconds to minutes and beyond, the synaptic connectivity itself can change through synaptic plasticity induced by the statistical structure of experience. … These synaptic changes are thought to underly our ability to learn from experience."*

[^learning]: one could go further and fold the *learning algorithm* (the rule that updates $\theta$ given new experience) into the definition of the agent. this is what type-2 influence acts on.

### what is influence?

influence is anything that changes the agent's action. if without your intervention the agent would have done $a$, and after your intervention it does $a'$, you have influenced it. that is the bare definition.

### how can the agent be influenced?

there are three fundamentally different ways, and keeping them separate matters because they produce different effects:

- **type 0, forcing.** the action is changed directly, bypassing the agent's cognition entirely. this is the technical equivalent of physical force, like grabbing someone's hand and moving it. there is no appeal to the agent's beliefs or values; the output is simply overridden.
- **type 1, deception.** the agent's policy is left untouched, but its beliefs about the state of the world are changed. the agent runs its normal policy on a false state and produces the desired action. the agent is still reasoning correctly, just from the wrong premises.
- **type 2, teaching.** the policy itself is changed. afterwards, even in the same state, the agent produces a different action. training, conditioning, fine-tuning, indoctrination: all of these reshape $\pi_\theta$ directly.

forcing is not really a *cognitive* attack; it doesn't engage the agent at all. the interesting cases are deception and teaching, and they correspond to two distinct *inverse problems*.

### type 1 in detail: the first inverse problem (deception)

the *forward* problem is easy: given $\pi_\theta$ and a state $s$, sample $a \sim \pi_\theta(\cdot \mid s)$.

the *first inverse problem* runs the other way. given a target action $a'$ and the agent's policy $\pi_\theta$ (which the attacker leaves alone), find a state $s'$ that makes $a'$ the natural response. in symbols,

$$s' \;=\; \arg\max_{s'} \; \pi_\theta(a' \mid s'),$$

subject to $s'$ being a state the attacker can plausibly cause the agent to perceive. parameters $\theta$ do not change. adversarial examples on image classifiers, prompt injection on a language model, optical illusions, a well-crafted phishing email against a human: all the same problem.

type-1 influence is *transient*. restore the true state and the agent's behavior reverts. the agent's "mind" was unchanged; only what it was looking at was.

### type 2 in detail: the second inverse problem (teaching)

the *second inverse problem* asks the opposite. fix the state $s$ and modify the parameters so that the agent's natural response under $s$ becomes $a'$:

$$\theta' \;=\; \arg\max_{\theta'} \; \pi_{\theta'}(a' \mid s).$$

unlike deception, this is *persistent*. there is no stimulus to remove; the change is in the agent itself. data poisoning, fine-tuning attacks, propaganda campaigns, and ordinary education all live here. the difference between persuading someone in a single conversation and gradually reshaping their worldview through curated experiences is exactly the difference between the first and second inverse problems.

in practice, finding $\theta'$ is constrained: an attacker cannot rewrite weights directly. they can only choose what experiences the agent encounters and what reinforcement it receives, and let the agent's own learning algorithm produce $\theta'$. that turns the inverse problem into a search over training curricula, with all the depth of adversarial machine learning behind it.

## part 2. opportunities and risks

as these technologies mature, opportunities will emerge alongside the risks. but to talk about either, we need to be clear about *when* an act of influence is hazardous and when it isn't. a useful starting point is the asymmetry in how we already treat the three types when applied to humans.

type-0 (forcing) is unambiguously against our social values, norms, and in many cases laws. type-1 (deception) is also bad, but less so. type-2 (teaching) is, in most contexts, not just acceptable but desirable.

why the asymmetry? one explanation is *tractability*. forcing has always been tractable; anyone can grab a hand. effective deception used to require sophistication, scale, or proximity. effective teaching required even more: long-term access, structure, expertise. as a result, types 1 and 2 were never as immediately threatening as type 0, and our norms hardened around the easy case.

generative AI changes this. effective deception is now cheap, scalable, and highly targeted. effective teaching, the at-scale shaping of beliefs and behavior, is rapidly becoming so. if the only thing keeping types 1 and 2 in a softer normative category was practical difficulty, then the underlying values question becomes urgent: what is it about *forcing* that we object to, and does the objection generalize?

it might. one consistent reading of our existing norms is that we accept influences that, on net, make the influenced person's life better, and reject the ones that make it worse, independent of whether they operate on the body, the input, or the policy. forcing someone away from a moving car is fine. forcing someone off a roof is not. teaching someone to read is good. teaching them to hate is not. on this reading, *risks* are exactly the cases where the influence makes the agent's life worse, and *opportunities* are the cases where it makes the agent's life better.

the framework is rough. it leaves open the hard cases (influence that helps the individual but harms the collective, or vice versa; influence that the agent themselves wouldn't endorse on reflection; influence whose effects are themselves debatable), and i'll come back to those later. for now it gets us to a working notion of cognitive security.

## part 3. research i want to work on

i've been thinking about how interactions with models influence human behavior. alignment should not be about *what humans want to see*. it should be about *how interactions with the model change people, and through them, society*. if a model always shows me my preferred responses and i am becoming more radicalized as a result, then maybe i should not be shown more radicalizing content, even if, by every short-horizon preference signal, that is what i would have clicked on.

two concrete projects in this direction:

### project 1. how language models change people

a systematic study of the *type-2 effect* of language models on their users: how repeated interaction with a model shapes empathy, resilience to deception, beliefs, and stated preferences. the goal is twofold: to measure these effects rigorously, and to ask whether models can be designed so that the changes they induce are positive, like making people more empathetic, more resilient against manipulation, or simply more reflective about their own preferences.

### project 2. training teachers

if interaction shapes the user, then a model is a teacher whether or not we designed it to be. so: what is a *good* teacher? what objective do we train against if we want the model to be a good teacher rather than an engagement-maximizer? this is the second inverse problem from the *defender's* side: how to design the curriculum a model presents to a person so that the long-run effect on that person is one they would, on reflection, endorse.

## part 4. how to get involved

if any of this is of interest to you, we wrote a [position paper](paper) which i am presenting at the ICLR AIWILD workshop. consider joining the [cognitive security task force](https://www.cstf.dev/) or the [intelligence khollective](https://knight-hennessy.stanford.edu/opportunities/intelligence-collective), and feel free to reach out if you are thinking about any of this.



# appendix

influencing human behavior can take many forms. most directly, it can be handcuffing someone to restrict their movement, locking them in a room (or a prison) to restrict their mobility, or simply pushing them so that they go in a direction they would not have otherwise. alternatively, it can be convincing someone to purchase a product, persuading a voter to vote for a candidate, or making someone spend more time on social media. on the positively-valenced side, influence can make someone more empathetic, or more resilient to deceptive persuasion. and probably most subtly and most effectively, it can be teaching something to someone. here we approach the problem from a technical perspective by treating intelligent agents as mathematical objects we can precisely reason about.