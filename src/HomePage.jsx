import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const projects = [
    {
    title: "Sociotechnical Alignment in Automated Optimization Modeling via Textual Bisection",
    description: "Udell Lab at Stanford University | Advisor: Madeleine Udell",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Understanding and Improving Representation Learning in the Presence of Shortcuts",
    description: "MPhil Thesis at the University of Cambridge | Advisors: Andreas Vlachos and Michalis Korakakis",
    tags: ["Pyhton"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Different Inductive Biases Can Lead to Similar Performance via Distinct Algorithms",
    description: "Project for Geometric Deep Learning at the University of Cambridge | Advisor: Chaitanya Joshi",
    tags: ["Pyhton"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Understanding Toy Backdoors via Mechanistic Interpretability",
    description: "Part of a Project for Theory of Deep Learning at the University of Cambridge",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Bayesian Optimization for Guided Hypothesis Sampling in Minimum Bayes Risk Decoding",
    description: "Project for Machine Learning for Language Processing at the University of Cambridge | Advisor: Julius Cheng",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Comparative Analysis of Stanford U-PCFG and Berkeley Neural Parsers",
    description: "Project for Introduction to Natural Language Syntax and Parsing at the University of Cambridge",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Abstractive Summarization of CNN/DailyMail Articles with Encoder-Decoder Transformer",
    description: "Project for Overview of Natural Language Processing at the University of Cambridge",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Reserve Management Survey Report 2023: Insights into Public Asset Management",
    description: "Conducted the data analysis for the 4th Biennial Reserve Management Survey Report at the World Bank | Manager: Eric Bouyé",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
    {
    title: "Parameterizing Chains in Generalized Fixed-Point-Free Involutions",
    description: "Undergraduate Mathematics Thesis at Tulane University | Advisor: Michael Joyce",
    tags: ["Python"],
    githubLink: "https://github.com/example1",
    paperLink: "https://example.com/paper1"
    },
  ];

  return (
    // Main container with flex direction column on mobile, row on web
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Section - Bio */}
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-white">
        <div className="max-w-md mx-auto">
          {/* Profile Image */}
          <div className="mb-6 md:mb-8">
            <img
              src="/api/placeholder/400/400"
              alt="Profile"
              className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mx-auto shadow-lg"
            />
          </div>

          {/* Bio Content */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Batu El</h1>
            <h2 className="text-xl md:text-2xl text-gray-600">PhD Candidate at Stanford</h2>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            I am a first-year PhD student in Computational and Mathematical Engineering (ICME) at Stanford University and a Knight-Hennessy Scholar. 
            In summer 2024, I graduated with an MPhil in Advanced Computer Science from the University of Cambridge, where I focused on out-of-distribution generalization and interpretability of language models.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 text-gray-600">
              <a href="#" className="hover:text-gray-800 transition-colors">
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:text-gray-800 transition-colors">
                <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="hover:text-gray-800 transition-colors">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Skills */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Projects */}
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Projects</h2>
          <div className="space-y-6 md:space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="space-y-3">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs md:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.paperLink && (
                      <a 
                        href={project.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Paper</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;