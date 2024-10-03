// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaDocker } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    { name: 'React.js', icon: <FaReact className="text-blue-500 w-12 h-12" />, description: 'Frontend library for building user interfaces' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-12 h-12" />, description: 'Backend JavaScript runtime environment' },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-700 w-12 h-12" />, description: 'NoSQL database for modern applications' },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 w-12 h-12" />, description: 'Version control and collaboration' },
    { name: 'Docker', icon: <FaDocker className="text-blue-600 w-12 h-12" />, description: 'Containerization platform' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
