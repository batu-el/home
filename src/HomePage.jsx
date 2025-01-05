import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">John Doe</h1>
            <h2 className="text-xl md:text-2xl text-gray-600">Full Stack Developer</h2>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              I'm a passionate developer with 5+ years of experience in building web applications.
              I specialize in React, Node.js, and cloud architecture. When I'm not coding,
              you can find me contributing to open-source projects or writing technical blogs.
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;