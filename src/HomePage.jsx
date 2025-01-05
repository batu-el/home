import React from 'react';
import { Github, Mail, ExternalLink, Presentation } from 'lucide-react';
import profilePic from './assets/profile.jpg';

const HomePage = () => {
  const projects = [
    {
    title: "Sociotechnical Alignment in Automated Optimization Modeling via Textual Bisection",
    description: "Udell Lab at Stanford University | Advisor: Madeleine Udell",
    year: 2024,  
    githubLink: "https://github.com/batu-el/bitextion",
    paperLink: "https://github.com/batu-el/bitextion/blob/main/bitextion_paper.pdf",
    tags: ["Alignment", "Automated Optimization Modeling"],
    },
    {
    title: "Understanding and Improving Representation Learning in the Presence of Shortcuts",
    description: "MPhil Thesis at the University of Cambridge | Advisors: Andreas Vlachos and Michalis Korakakis",
    year: 2024,  
    githubLink: "https://github.com/batu-el/understanding-shortcuts",
    paperLink: "https://github.com/batu-el/understanding-shortcuts/blob/main/paper.pdf",
    presentationLink: "https://github.com/batu-el/understanding-shortcuts/blob/main/presentation.pdf",
    tags: ["Shortcut Learning" , "Mechanistic Interpretability", "Out-of-Distribution Generalization", "Adverserial Robustness"],
    },
    {
    title: "Different Inductive Biases Can Lead to Similar Performance via Distinct Algorithms",
    description: "Project for Geometric Deep Learning at the University of Cambridge | Advisor: Chaitanya Joshi",
    year: 2024,  
    githubLink: "https://github.com/batu-el/understanding-inductive-biases-of-gnns",
    paperLink: "https://github.com/batu-el/understanding-inductive-biases-of-gnns/blob/main/different_inductive_bias_similar_performance_paper.pdf",
    presentationLink: "https://github.com/batu-el/understanding-inductive-biases-of-gnns/blob/main/presentation.pdf",
    tags: ["Graph Neural Networks" , "Interpretability",],
    },
    {
    title: "Understanding Toy Backdoors via Mechanistic Interpretability",
    description: "Part of a Project for Theory of Deep Learning at the University of Cambridge",
    year: 2024,  
    githubLink: "https://github.com/batu-el/understanding-toy-backdoors",
    paperLink: "https://github.com/batu-el/understanding-toy-backdoors/blob/main/understanding-backdoors.pdf",
    tags: ["Backdoors" , "Toy Models", "Mechanistic Interpretability", "Adverserial Robustness"],
    },
    {
    title: "Bayesian Optimization for Guided Hypothesis Sampling in Minimum Bayes Risk Decoding",
    description: "Project for Machine Learning for Language Processing at the University of Cambridge | Advisor: Julius Cheng",
    year: 2024,  
    githubLink: "https://github.com/batu-el/guided-hypothesis-sampling",
    paperLink: "https://github.com/batu-el/guided-hypothesis-sampling/blob/main/paper-guided-hypothesis-sampling.pdf",
    tags: ["Test-time Compute", "Neural Machine Translation", "Bayesian Optimization", "Soft Majority Voting"],
    },
    {
    title: "Comparative Analysis of Stanford U-PCFG and Berkeley Neural Parsers",
    description: "Project for Introduction to Natural Language Syntax and Parsing at the University of Cambridge",
    year: 2024,  
    githubLink: "https://github.com/batu-el/constituency-parser-comparison",
    paperLink: "https://github.com/batu-el/constituency-parser-comparison/blob/main/paper-comparative-analysis-of-constituency-parsers.pdf",
    tags: ["Syntax and Parsing" , "Natural Language Processing",],
    },
    {
    title: "Abstractive Summarization of CNN/DailyMail Articles with Encoder-Decoder Transformer",
    description: "Project for Overview of Natural Language Processing at the University of Cambridge",
    year: 2023,  
    githubLink: "https://github.com/batu-el/extractive-abstractive-summarizer",
    paperLink: "https://github.com/batu-el/extractive-abstractive-summarizer/blob/main/paper-summarizer.pdf",
    tags: ["Summarization" , "Encoder-Decoder Transformer",],
    },
    {
    title: "Reserve Management Survey Report 2023: Insights into Public Asset Management",
    description: "I worked on the data analysis for the 4th Biennial Reserve Management Survey Report at the World Bank | Manager: Eric Bouyé",
    year: 2023,  
    paperLink: "https://openknowledge.worldbank.org/entities/publication/3e23f0dd-7849-4a55-8ce7-2a104bef2c68",
    tags: ["The World Bank", "Public Asset Management" ,"Central Banking" ],
    },
    {
    title: "Parameterizing Chains in Generalized Fixed-Point-Free Involutions",
    description: "Undergraduate Mathematics Thesis at Tulane University | Advisor: Michael Joyce",
    year: 2022,  
    githubLink: "https://github.com/batu-el/parameterizing-chains-in-generalized-involutions",
    presentationLink: "https://github.com/batu-el/parameterizing-chains-in-generalized-involutions/blob/main/HT2-Presentation.pdf",
    paperLink: "https://library.search.tulane.edu/discovery/delivery/01TUL_INST:Tulane/12433822100006326",
    tags: ["Algebraic Combinatorics", "Involutions"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <img
          src={profilePic}
          alt="Profile"
          className="w-64 h-48 object-cover rounded"
        />
        
        <div>
          <h1 className="text-2xl font-bold mb-2">Batu El</h1>
          <h2 className="text-lg text-gray-600 mb-4">PhD Candidate at Stanford</h2>
          
          <p className="text-gray-600 mb-4">
            I am a first-year PhD student in Computational and Mathematical Engineering (ICME) at Stanford University and a Knight-Hennessy Scholar. 
            In summer 2024, I graduated with an MPhil in Advanced Computer Science from the University of Cambridge.
          </p>

          <div className="flex gap-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <ExternalLink className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div>
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
              <span
                key={skill}
                className="inline-block mr-2 mb-2 px-2 py-1 bg-gray-100 text-sm rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <h2 className="text-xl font-bold mb-6">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0">
            <h3 className="font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags && project.tags.map((tag, tagIndex) => (
                <span
                  key={`tag-${tagIndex}`}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
              {project.keywords && project.keywords.map((keyword, keywordIndex) => (
                <span
                  key={`keyword-${keywordIndex}`}
                  className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-sm flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.paperLink && (
                <a 
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-sm flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Paper
                </a>
              )}
              {project.presentationLink && (
                <a 
                  href={project.presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-sm flex items-center gap-1"
                >
                  <Presentation className="w-4 h-4" />
                  Slides
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;