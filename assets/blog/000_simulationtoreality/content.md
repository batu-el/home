robots learn slowly in the real world. every fall costs hardware, every grasp costs time, and exploration risks damage to the robot or the people around it. simulators promise the opposite: cheap, fast, parallelizable rollouts where mistakes are free and scenarios can be sampled at will. the trouble is the *reality gap* — physics simulators are approximate, renderings are imperfect, motors have backlash and delay, and a policy that masters the simulator often fails the moment it touches the world.

a small set of ideas, introduced over roughly seven years of robotics research, established that this gap is bridgeable, and roughly *how*. each takes a different angle on why a model trained only in simulation could nevertheless generalize to reality. one section per idea below.


## a. domain randomization and dynamics randomization

*domain randomization for transferring deep neural networks from simulation to the real world* (tobin et al., 2017) [paper](https://arxiv.org/abs/1703.06907)  
*sim-to-real transfer of robotic control with dynamics randomization* (peng et al., 2017) [paper](https://arxiv.org/abs/1710.06537)

- *problem.* simulators never quite match reality — neither in pixels (textures, lighting, camera intrinsics) nor in physics (mass, friction, motor delay, gear backlash) — and policies trained on a single simulated world overfit to its idiosyncrasies.
- *setup/method.* instead of trying to make the simulator match reality, randomize it. each rollout samples new textures, lights, camera poses, and distractors (visual randomization) or new dynamics parameters (physics randomization). reality becomes one more sample inside the training distribution, and a recurrent policy can implicitly identify which world it is in from a short history.
- *experiments/findings.* a vision detector trained on randomized simulated rgb localized real objects to within 1.5 cm with no real images during training; a recurrent policy trained with randomized dynamics pushed objects to target on a real fetch arm and tolerated calibration errors that broke a non-randomized baseline.


## b. actuator networks

*learning agile and dynamic motor skills for legged robots* (hwangbo et al., 2019) [paper](https://arxiv.org/abs/1901.08652)

- *problem.* the dominant gap on a legged robot is not pixels but actuators: real series-elastic motors have nonlinear, history-dependent torque dynamics that off-the-shelf rigid-body simulators do not capture. policies trained against idealized motors behave well in sim and badly on hardware.
- *setup/method.* fit a small neural network on real motor data to predict actuator torque from a short window of joint state and commanded position. plug this learned actuator model into the simulator in place of an idealized motor, then train the policy in this corrected simulator with terrain and disturbance randomization.
- *experiments/findings.* anymal ran faster, used less energy, and recovered from a fall in arbitrary configurations — abilities earlier hand-designed controllers could not match — from a policy that never touched the real robot during training.


## c. automatic domain randomization

*solving rubik's cube with a robot hand* (akkaya et al., 2019) [paper](https://arxiv.org/abs/1910.07113)

- *problem.* hand-tuning randomization ranges is brittle: too narrow and the policy overfits to the simulator, too wide and it cannot learn at all. the right ranges also change as the policy improves, so they need a curriculum, not a fixed setting.
- *setup/method.* automatic domain randomization (adr) widens each randomization parameter when the policy crosses a performance threshold and narrows it when performance drops. the simulator itself becomes harder over training, like an automatic curriculum aimed at the edge of the policy's competence.
- *experiments/findings.* a shadow hand solved a rubik's cube one-handed and recovered from perturbations the team had never simulated — rubber gloves, a plush giraffe, adversarial poking — evidence that the curriculum produced something closer to meta-learning than memorization.


## d. teacher–student / privileged learning

*learning quadrupedal locomotion over challenging terrain* (lee et al., 2020) [paper](https://arxiv.org/abs/2010.11251)

- *problem.* a quadruped on real terrain only sees what its proprioception can sense — joint angles, imu, foot contact — but a policy trained directly from this raw stream is hard to optimize. in simulation, however, ground-truth terrain shape, friction, and contact forces are free.
- *setup/method.* train a *teacher* policy in simulation with access to all the privileged state, then distill it into a *student* that only sees what the real robot will see. the student matches the teacher's actions but conditions only on a history of proprioceptive observations, learning to *infer* the missing variables from past sensorimotor traces.
- *experiments/findings.* the resulting policy walked anymal across mud, snow, vegetation, water, and rubble it had never seen; it generalized far beyond the simulator and ran without any vision system at all.


## e. rapid motor adaptation

*rma: rapid motor adaptation for legged robots* (kumar et al., 2021) [paper](https://arxiv.org/abs/2107.04034)

- *problem.* teacher–student handles latent variables that are roughly stationary across an episode (terrain, payload). real deployment also has fast-changing perturbations — sticky joints, sudden loads, broken sensors — that need online adaptation, not just episode-level identification.
- *setup/method.* train a base policy conditioned on a latent vector that encodes environment parameters (the teacher), then train a small *adaptation module* that estimates this latent online from recent state-action history (the student). at deployment the adaptation module updates the latent every few control steps, so the policy adjusts in real time without any test-time gradient updates.
- *experiments/findings.* a1 quadrupeds traversed sand, rocks, mud, and uneven terrain with payloads up to 12 kg, adapting within fractions of a second to changes in mass and friction.


## f. asymmetric actor–critic

*asymmetric actor critic for image-based robot learning* (pinto et al., 2017) [paper](https://arxiv.org/abs/1710.06542)

- *problem.* image-based rl has to learn both *what* to do and *how to see*; the critic, which is only used during training, suffers most from the high-dimensional pixel input and slows the whole loop down.
- *setup/method.* exploit the asymmetry between training and deployment: in simulation, the critic is given full low-dimensional state (object positions, velocities, contacts), while the actor receives only the rendered image it will see at deployment. critic gradients are clean; the actor still learns to map pixels to actions.
- *experiments/findings.* the asymmetric setup learned manipulation policies — picking, pushing, peg insertion — far more sample-efficiently than symmetric pixel-only baselines, and transferred to a real arm with domain randomization on the visual side.


## g. domain adaptation with progressive nets

*sim-to-real robot learning from pixels with progressive nets* (rusu et al., 2017) [paper](https://arxiv.org/abs/1610.04286)

- *problem.* randomization handles the gap by widening the source distribution, but if real data is available, you would like to *use* it without overwriting what the simulator policy already learned. naive fine-tuning catastrophically forgets the simulator's hard-won features.
- *setup/method.* train a network in simulation, then freeze it and add a parallel column whose layers receive lateral connections from the frozen one. fine-tune only the new column on a small amount of real-world data. simulation features are preserved; the real column learns the residual.
- *experiments/findings.* a jaco arm trained in simulation transferred to real reaching with only a few thousand real samples — far less than learning from scratch — and outperformed naive fine-tuning baselines that lost the sim policy.


## h. learned reward

*deep reinforcement learning from human preferences* (christiano et al., 2017) [paper](https://arxiv.org/abs/1706.03741)

- *problem.* much of the sim2real gap is in fact a *reward* gap: hand-designed reward functions specify behavior the engineer can articulate, not the behavior the user actually wants, and they often reward simulator artifacts (jitter, exploits) that look broken on hardware.
- *setup/method.* replace the reward function with a learned model. humans compare short clips of agent behavior; a reward model is fit to their pairwise preferences; the rl policy is optimized against the learned reward, with the reward model retrained on fresh comparisons as the policy changes.
- *experiments/findings.* with a few thousand human comparisons, atari and mujoco agents learned behaviors no hand-designed reward had elicited (e.g. a simulated humanoid doing a backflip). the same pipeline became the basis of rlhf and remains the standard recipe for aligning language models to human preferences.


## i. trust region methods

*trust region policy optimization* (schulman et al., 2015) [paper](https://arxiv.org/abs/1502.05477)  
*proximal policy optimization algorithms* (schulman et al., 2017) [paper](https://arxiv.org/abs/1707.06347)

- *problem.* policy gradients with high-variance estimates and aggressive step sizes destabilize training; in sim2real this matters twice over, since destabilized policies tend to exploit the simulator and require expensive restarts.
- *setup/method.* trpo solves a constrained optimization at each step, capping the kl divergence between the new and old policies. ppo replaces the constraint with a clipped surrogate objective that achieves similar stability with first-order optimization, making it cheap enough for the long, parallel rollouts that sim2real depends on.
- *experiments/findings.* ppo became the workhorse behind nearly every sim2real result above — dexterous manipulation, anymal locomotion, rubik's cube, rma — because it tolerates aggressive randomization and long horizons without diverging.


## a tentative summary

across these ideas, sim2real worked when the simulator could be made *adequately wrong in the right ways*: appearance and physics randomized (a), actuators corrected by data (b), randomization itself put on a curriculum (c), privileged training signals available in sim and distilled into a deployable observation model (d, e, f), simulation features preserved while real data filled the residual (g), and reward and optimization made stable enough to exploit all of the above (h, i). reality is treated as one sample from a distribution of worlds, and the policy is forced to learn what is invariant across them.

an obvious next question is whether a similar program can work for *social* skills with language models — domain randomization over partner personalities, dynamics randomization over conversation pacing, an actuator network for a specific user's idiosyncrasies, asymmetric critics with privileged ground-truth user state. the analogies are tempting and the open problems are real; that's a topic for another post.
