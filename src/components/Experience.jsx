// src/components/Experience.js
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-8 ">
          <div className="work-experience">
            <div>
              <h3 className="text-2xl font-bold">
                Software Developer - Freelance
              </h3>
              <p className="text-lg">Jan 2022 - Present</p>
              <ul>
                <li>Developed and maintained multiple web applications...</li>
                <li>Built REST APIs and integrated third-party services.</li>
              </ul>
            </div>
            <div className="second-job">
              <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
              <p className="text-lg">Sep 2023 - Present</p>
              <ul>
                <li>Developed a full-stack employee management system...</li>
                <li>
                  Implemented CRUD operations, pagination, and role-based
                  access.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
