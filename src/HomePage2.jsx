import React from 'react';
// Verify lucide-react is installed and imported correctly
import { User, Github, Mail, ExternalLink } from 'lucide-react';
// import profilePic from './assets/profile.jpg';

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
      tags: ["Pyhton"]
    },
    {
      title: "Different Inductive Biases Can Lead to Similar Performance via Distinct Algorithms",
      description: "Project for Geometric Deep Learning at the University of Cambridge | Advisor: Chaitanya Joshi",
      tags: ["Pyhton"]
    },
    {
      title: "Understanding Toy Backdoors via Mechanistic Interpretability",
      description: "Part of a Project for Theory of Deep Learning at the University of Cambridge",
      tags: ["Python"]
    },
    {
      title: "Bayesian Optimization for Guided Hypothesis Sampling in Minimum Bayes Risk Decoding",
      description: "Project for Machine Learning for Language Processing at the University of Cambridge | Advisor: Julius Cheng",
      tags: ["Python"]
    },
    {
      title: "Comparative Analysis of Stanford U-PCFG and Berkeley Neural Parsers",
      description: "Project for Introduction to Natural Language Syntax and Parsing at the University of Cambridge",
      tags: ["Python"]
    },
    {
      title: "Abstractive Summarization of CNN/DailyMail Articles with Encoder-Decoder Transformer",
      description: "Project for Overview of Natural Language Processing at the University of Cambridge",
      tags: ["Python"]
    },
    {
      title: "Reserve Management Survey Report 2023: Insights into Public Asset Management",
      description: "Conducted the data analysis for the 4th Biennial Reserve Management Survey Report at the World Bank | Manager: Eric Bouyé",
      tags: ["Python"]
    },
    {
      title: "Parameterizing Chains in Generalized Fixed-Point-Free Involutions",
      description: "Undergraduate Mathematics Thesis at Tulane University | Advisor: Michael Joyce",
      tags: ["Python"]
    },
  ];

  return (
    <div className="h-screen flex bg-white">
      {/* Left Section - Bio */}
      <div className="w-1/2 h-screen overflow-y-auto p-8 bg-white">
        <div className="max-w-md mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/api/placeholder/400/400"
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg"
            />
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">Batu El</h1>
            <h2 className="text-2xl text-gray-600">PhD Candidate at Stanford University</h2>
            
            <p className="text-gray-600 leading-relaxed">
            I am a first-year PhD student in Computational and Mathematical Engineering (ICME) at Stanford University and a Knight-Hennessy Scholar. In summer 2024, I graduated with an MPhil in Advanced Computer Science from the University of Cambridge, where I focused on out-of-distribution generalization and interpretability of language models.
            My MPhil thesis, advised by Professor Andreas Vlachos and Dr. Michalis Korakakis, was on understanding and improving representation learning in the presence of shortcuts. Previously, I worked as a Junior Analyst at the World Bank, where I was the Vice President of the World Bank and IMF Turkish Staff Association.
            I got my undergraduate degree from Tulane University as the medalist of the Class of 2022 with majors in Mathematics, Computer Science, and Economics. For my thesis in Mathematics, I proved a theorem in algebraic combinatorics on parameterizing chains in generalized fixed-point-free involutions. In my thesis in Computer Science and Economics, I investigated how artificial intelligence can assist hiring managers to detect and reduce age discrimination during resume screening.
            In 2020, I co-founded Chember, a social platform that connects basketball enthusiasts. You can download our mobile app that now has over ~30,000 users from App Store or Google Play Store, and watch my crossover in our promotional video. You can check out the summary of my experiences on my resume. 
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-gray-800 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-800 transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-800 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
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
      <div className="w-1/2 h-screen overflow-y-auto p-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
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