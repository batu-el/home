import React from 'react';
// Verify lucide-react is installed and imported correctly
import { User, Github, Mail, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js that helps users track their daily habits and goals.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "An AI-powered image recognition tool that can identify and classify different species of plants using computer vision.",
      tags: ["Python", "TensorFlow", "OpenCV"]
    },
    {
      title: "Project 3",
      description: "A mobile-first weather application that provides real-time weather updates and forecasts based on user location.",
      tags: ["React Native", "Weather API", "Geolocation"]
    },
    {
      title: "Project 4",
      description: "A blockchain-based voting system that ensures secure and transparent electronic voting.",
      tags: ["Solidity", "Ethereum", "Web3.js"]
    }
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
            <h1 className="text-4xl font-bold text-gray-800">John Doe</h1>
            <h2 className="text-2xl text-gray-600">Full Stack Developer</h2>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer with 5+ years of experience in building web applications.
              I specialize in React, Node.js, and cloud architecture. When I'm not coding,
              you can find me contributing to open-source projects or writing technical blogs.
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