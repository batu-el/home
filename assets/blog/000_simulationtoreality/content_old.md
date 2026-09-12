robots learn slowly in the real world. every fall costs hardware, every grasp costs time, and exploration risks damage to the robot or the people around it. simulators promise the opposite: cheap, fast, parallelizable rollouts where mistakes are free and scenarios can be sampled at will. the trouble is the *reality gap* — physics simulators are approximate, renderings are imperfect, motors have backlash and delay, and a policy that masters the simulator often fails the moment it touches the world.

a small set of papers established that this gap is bridgeable, and roughly *how*. each made a different argument for why a model trained only in simulation could nevertheless generalize to reality.


## part 1. foundational papers in sim2real for robotics


### domain randomization (tobin et al., 2017)

- *problem.* perception models trained on simulated images fail on real ones because the simulator's textures, lighting, and camera intrinsics never match reality.
- *setup/method.* instead of trying to make the simulator photorealistic, randomize it. each rollout samples new textures, lighting positions, camera poses, and distractor objects. the network learns to treat reality as just another sample.
- *experiments/findings.* a detector trained only on simulated rgb localized real objects to within 1.5 cm — accurate enough to drive a robot to grasp them — without ever seeing a real image during training.


### CAD2RL (sadeghi and levine, 2017)

- *problem.* training drones to avoid collisions in real environments is dangerous and data-inefficient; nobody had shown a purely simulated visuomotor policy fly a real quadrotor.
- *setup/method.* a deep convnet was trained in simulated 3d cad hallways with heavily randomized rendering, predicting long-horizon collision probability from a single rgb image and mapping pixels directly to velocity commands.
- *experiments/findings.* the resulting policy flew a real quadrotor through indoor environments it had never seen, with no real training images, no depth sensor, no slam, and no motion plan.


### sim-to-real transfer with dynamics randomization (peng et al., 2018)

- *problem.* visual randomization addresses appearance, but real robots also differ from their simulators in mass, friction, motor delay, and gear backlash.
- *setup/method.* randomize the *physics* during training: sample dynamics parameters per rollout (link masses, joint damping, observation noise, action latency) and train a recurrent policy that can implicitly identify which world it is in.
- *experiments/findings.* a policy trained entirely in simulation pushed objects to target locations on a real fetch arm, robust to large calibration errors that broke a non-randomized baseline.


### learning dexterous in-hand manipulation (openai et al., 2018)

- *problem.* manipulation with a 24-dof hand had been considered out of reach for end-to-end rl: contact-rich dynamics, high-dimensional control, and prohibitively expensive real-world data.
- *setup/method.* train a recurrent ppo policy in mujoco with both visual and dynamics randomization (object size, friction, gravity, hand noise) plus a separate vision network from simulated rgb to object pose; transfer zero-shot to a shadow dexterous hand.
- *experiments/findings.* the real hand reoriented a block to target poses dozens of times in succession and discovered human-like grasps — finger pivoting, sliding, multi-finger gating — that no one had hand-coded.


### solving rubik's cube with a robot hand — automatic domain randomization (akkaya et al., 2019)

- *problem.* hand-tuning randomization ranges is brittle: too narrow and the policy overfits to the simulator, too wide and it cannot learn at all. the right ranges also change as the policy improves.
- *setup/method.* automatic domain randomization (adr) widens each randomization parameter whenever the policy crosses a performance threshold and narrows it when performance drops, building an automatic curriculum of increasingly hard simulators.
- *experiments/findings.* a policy trained this way solved a rubik's cube one-handed and recovered from perturbations the team had never simulated — rubber gloves, a plush giraffe, adversarial poking — evidence that the curriculum produced something closer to meta-learning than memorization.


### learning agile and dynamic motor skills for legged robots (hwangbo et al., 2019)

- *problem.* model-based controllers for quadrupeds are hand-crafted per skill and brittle; rl on the real robot is prohibitively expensive and unsafe for dynamic skills like running and self-righting.
- *setup/method.* fit an actuator network on real motor data so the simulator's dynamics match the robot's, then train a policy in this corrected simulator with terrain and disturbance randomization, and deploy to anymal.
- *experiments/findings.* anymal ran faster, used less energy, and recovered from a fall in arbitrary configurations — abilities earlier hand-designed controllers could not match, all from a policy that never touched the real robot during learning.


## part 2. sim2real for social tasks with language models


robotics taught us that simulation works when the gap between the simulator and reality can be bridged: by randomization, by a more accurate dynamics model, or by enough variation that the policy is forced to learn the essential structure of the task instead of the surface statistics of the simulator. the obvious next question is whether a similar program is available for *social* skills. can a language model trained inside a simulated society of other language models cooperate, persuade, comfort, or negotiate with real people?

the situation is messier than in robotics. there is no clean physics of conversation, and the simulator is itself a language model — the same artifact we are trying to train. but a small set of papers have started to take the analogy seriously.


### cicero (meta fair, 2022)

- *problem.* the strategy game diplomacy requires natural-language negotiation, alliance-building, and occasional deception with up to six other players; supervised dialogue alone produces fluent but strategically incoherent agents, and pure self-play in language tends to drift away from human play.
- *setup/method.* a controllable language model is grounded by a planning module trained via self-play on diplomacy. the planner predicts other players' intents and chooses actions; the language model is conditioned on those plans (and on the dialogue history) to generate human-like negotiation messages.
- *experiments/findings.* on anonymous online webdiplomacy.net games against humans, cicero scored more than double the average human and ranked in the top 10% of repeat players, without being identified as an ai by its opponents.


### generative agents (park et al., 2023)

- *problem.* it was unclear whether language models could play the role of *people* inside a simulated society — sustaining identities, memories, plans, and relationships across long, asynchronous interactions.
- *setup/method.* twenty-five gpt-based agents lived in a sandbox town with a memory stream, periodic reflection, and retrieval-conditioned planning; humans could intervene by speaking to any agent in natural language.
- *experiments/findings.* the agents autonomously organized a valentine's day party, formed romantic and professional relationships, and remembered each other's history; in a controlled study they were rated more believable than human-written descriptions of the same agents. this is "sim only," but it established that language models can populate the simulator at all — the prerequisite for any sim2real social training program.


### stable alignment / training socially aligned language models in a simulated society (liu et al., iclr 2024)

- *problem.* sft and rlhf require expensive human labels and are vulnerable to jailbreaks; they don't expose the model to the kind of varied social pressure it will actually face once deployed.
- *setup/method.* sandbox is a simulated society of llm agents that critique and revise each other's responses under rule-guided social norms; the trainee model is fine-tuned on collective ratings, peer feedback, and step-by-step revisions produced inside this sandbox.
- *experiments/findings.* models trained in the simulated society were more robust to jailbreaks, scored higher on alignment benchmarks, and were preferred by human evaluators on real prompts — including prompts no agent had seen during simulation.


### sotopia-π (wang et al., acl 2024)

- *problem.* social goal completion — coordinating, collaborating, persuading, comforting — is rarely trained for explicitly, and it was unclear whether a smaller open model could learn it from interaction rather than from a static corpus.
- *setup/method.* sotopia generates diverse social scenarios and goals; pairs of agents (one of them the trainee) play them out; the resulting trajectories are filtered by gpt-4 ratings and used for behavior cloning plus self-reinforcement on a mistral-7b.
- *experiments/findings.* the trained 7b model reaches gpt-4-level social goal completion on held-out hard sotopia scenarios, in both gpt-4 and human evaluation, while preserving mmlu and improving safety. evaluation also reveals a *sotopia gap*: llm judges systematically overestimate the trained agent's social ability relative to human judges — the social analog of the reality gap.


## a tentative summary


in robotics, sim2real worked because we could randomize the non-essential details until the policy was forced to learn the essential ones, and because we could measure the gap (the policy either grasps the cube or it doesn't). for social tasks, both halves are harder. the analog of randomization is unclear — partner personalities, goals, cultural context, levels of cooperation, susceptibility to manipulation, all candidates — and the analog of the reality gap is itself fuzzy because the evaluator is also a language model. cicero suggests the program can work when the task has clean structure (a game with explicit rules and outcomes). sotopia-π shows the open version of the reality gap: the simulator's evaluators score differently from real humans, and we don't yet have a principled way to close it. closing that gap, and writing the social analog of automatic domain randomization, may be the most interesting problem in this corner of the field.
