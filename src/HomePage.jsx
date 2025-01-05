import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const projects = [
    {
    title: "Sociotechnical Alignment in Automated Optimization Modeling via Textual Bisection",
    description: "Udell Lab at Stanford University | Advisor: Madeleine Udell",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Understanding and Improving Representation Learning in the Presence of Shortcuts",
    description: "MPhil Thesis at the University of Cambridge | Advisors: Andreas Vlachos and Michalis Korakakis",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Different Inductive Biases Can Lead to Similar Performance via Distinct Algorithms",
    description: "Project for Geometric Deep Learning at the University of Cambridge | Advisor: Chaitanya Joshi",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Understanding Toy Backdoors via Mechanistic Interpretability",
    description: "Part of a Project for Theory of Deep Learning at the University of Cambridge",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Bayesian Optimization for Guided Hypothesis Sampling in Minimum Bayes Risk Decoding",
    description: "Project for Machine Learning for Language Processing at the University of Cambridge | Advisor: Julius Cheng",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Comparative Analysis of Stanford U-PCFG and Berkeley Neural Parsers",
    description: "Project for Introduction to Natural Language Syntax and Parsing at the University of Cambridge",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Abstractive Summarization of CNN/DailyMail Articles with Encoder-Decoder Transformer",
    description: "Project for Overview of Natural Language Processing at the University of Cambridge",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Reserve Management Survey Report 2023: Insights into Public Asset Management",
    description: "Conducted the data analysis for the 4th Biennial Reserve Management Survey Report at the World Bank | Manager: Eric Bouyé",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Parameterizing Chains in Generalized Fixed-Point-Free Involutions",
    description: "Undergraduate Mathematics Thesis at Tulane University | Advisor: Michael Joyce",
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <img
          src="/api/placeholder/400/300"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;