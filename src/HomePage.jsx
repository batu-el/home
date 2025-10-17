import React from 'react';
import { Github, Twitter, ExternalLink, Presentation, Linkedin, GraduationCap } from 'lucide-react';
import profilePic from './assets/profile.jpg';

const HomePage = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/batu-el",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/batu-el/",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/elb4tu",
      label: "Twitter"
    },
    {
      icon: GraduationCap,
      href: "https://scholar.google.com/citations?user=fuY9Zc8AAAAJ&hl=en",
      label: "Google Scholar"
    }
  ];

  const projects = [
    // Order starts here (top to bottom)
    {
      title: "Moloch's Bargain: Emergent Misalignment When LLMs Compete for Audiences",
      year: 2025,
      authors: "Batu El, James Zou",
      githubLink: "https://github.com/batu-el/molochs-bargain",
      paperLink: "https://arxiv.org/abs/2510.06105",
      twitterLink: "https://x.com/james_y_zou/status/1975939603363463659",
      tags: ["Preprint"]
    },
    {
      title: "Inefficiencies of Meta Agents for Agent Design",
      year: 2025,
      authors: "Batu El, Mert Yuksekgonul, James Zou",
      githubLink: "https://github.com/batu-el/meta-agent-inefficiency",
      paperLink: "https://arxiv.org/abs/2510.06711",
      posterLink: "/assets/emnlp-poster.png",
      tags: ["EMNLP 2025 Findings", "ICML 2025 PRAL Workshop"]
    },
    {
      title: "Cost-of-Pass: An Economic Framework for Evaluating Language Models",
      year: 2025,
      authors: "Mehmet Hamza Erol, Batu El, Mirac Suzgun, Mert Yuksekgonul, James Zou",
      githubLink: "https://github.com/mhamzaerol/Cost-of-Pass",
      paperLink: "https://arxiv.org/abs/2504.13359",
      tags: ["Preprint"]
    },
    {
      title: "Towards Mechanistic Interpretability of Graph Transformers via Attention Graphs",
      year: 2025,
      authors: "Batu El, Deepro Choudhury, Pietro Liò, Chaitanya K. Joshi",
      githubLink: "https://github.com/batu-el/understanding-inductive-biases-of-gnns",
      paperLink: "https://arxiv.org/abs/2502.12352",
      posterLink: "/assets/towards-mechanistic.pdf",
      tags: ["ICLR 2025 Workshop XAI4Science"]
    },
    {
      title: "Bayesian Optimization for Guided Hypothesis Sampling in Minimum Bayes Risk Decoding",
      year: 2024,  
      authors: "Batu El, Julius Cheng, Andreas Vlachos",
      githubLink: "https://github.com/batu-el/guided-hypothesis-sampling",
      paperLink: "https://github.com/batu-el/guided-hypothesis-sampling/blob/main/paper-guided-hypothesis-sampling.pdf",
      tags: ["Preprint"],
    },
    {
      title: "Understanding and Improving Representation Learning in the Presence of Shortcuts",
      year: 2024,  
      authors: "Batu El, Michalis Korakakis, Andreas Vlachos",
      githubLink: "https://github.com/batu-el/understanding-shortcuts",
      paperLink: "https://github.com/batu-el/understanding-shortcuts/blob/main/paper.pdf",
      presentationLink: "https://github.com/batu-el/understanding-shortcuts/blob/main/presentation.pdf",
      tags: ["MPhil Thesis"],
    },
    {
      title: "Parameterizing Chains in Generalized Fixed-Point-Free Involutions",
      year: 2022,  
      authors: "Batu El, Michael Joyce, Mahir Can",
      githubLink: "https://github.com/batu-el/parameterizing-chains-in-generalized-involutions",
      presentationLink: "https://github.com/batu-el/parameterizing-chains-in-generalized-involutions/blob/main/HT2-Presentation.pdf",
      paperLink: "https://library.search.tulane.edu/discovery/delivery/01TUL_INST:Tulane/12433822100006326",
      tags: ["Undergraduate Thesis"],
    },
  ];

  const ProjectLink = ({ icon: Icon, href, label }) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-black text-sm flex items-center gap-1"
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );

  const getYearLabel = (year) => {
    if (year >= 2025) return '2025';
    if (year === 2024) return '2024';
    return '2022';
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
        <img
          src={profilePic}
          alt="Profile"
          className="w-96 h-72 object-cover rounded"
        />
        
        <div>
          <h1 className="text-2xl font-bold mb-2 text-black">Batu El</h1>
          <p className="text-black mb-4">
            I am a PhD student in Computational and Mathematical Engineering (ICME) at Stanford University and a Knight-Hennessy Scholar. I am advised by 
            <a href="https://www.james-zou.com/" className="text-blue-600 hover:text-blue-800"> James Zou</a>. 
            I hold an MPhil in Advanced Computer Science from the University of Cambridge (advised by <a href="https://andreasvlachos.github.io/" className="text-blue-600 hover:text-blue-800">Andreas Vlachos</a>), and an 
            <a href="https://college.tulane.edu/newcomb-tulane-college-announces-class-2022-william-wallace-peery-society" className="text-blue-600 hover:text-blue-800"> undergraduate degree</a> from Tulane University with majors in mathematics, computer science, and economics.
            I previously worked at the World Bank. I am currently the president of the 
            <a href="https://stanford-turkish-student-association.github.io/turks-in-ai-forum/" className="text-blue-600 hover:text-blue-800"> Stanford Turkish Student Association</a>.
          </p> 

          <div className="flex gap-4 mb-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-xl font-bold mb-6 text-black">Selected Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">
                {project.title}
              </h3>
              <span className="text-black text-sm shrink-0 ml-4">{getYearLabel(project.year)}</span>
            </div>
            {project.description && (
              <p className="text-black mb-2 text-sm italic">
                {project.description}
              </p>
            )}
            {project.authors && (
              <p className="text-black mb-2 text-sm italic">
                {project.authors}
              </p>
            )}
            {/* tags moved inline with action links below */}
            <div className="flex gap-3 flex-wrap items-center">
              {project.paperLink && (
                <a 
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black text-sm flex items-center gap-1"
                >
                  Paper
                </a>
              )}
              {project.twitterLink && (
                <a 
                  href={project.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black text-sm flex items-center gap-1"
                >
                  Thread
                </a>
              )}
              {project.presentationLink && (
                <a 
                  href={project.presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black text-sm flex items-center gap-1"
                >
                  Slides
                </a>
              )}
              {project.posterLink && (
                <a 
                  href={project.posterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black text-sm flex items-center gap-1"
                >
                  Poster
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-black text-sm flex items-center gap-1"
                >
                  GitHub
                </a>
              )}
              {project.tags && project.tags.length > 0 && project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-0.5 bg-gray-100 text-black text-xs rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;