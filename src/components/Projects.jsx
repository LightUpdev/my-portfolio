// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="space-y-8">
          <div className="project">
            <div>
              <h3 className="text-2xl font-bold">Employee Management System</h3>
              <p>Technologies: MongoDB, Express.js, React.js, Node.js, JWT</p>
              <p>Developed a full-stack employee management system...</p>
              <a
                href="https://employee-mangement-app-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Link to Project
              </a>
            </div>
            <div style={{textAlign:"right"}}>
              <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
              <p>Technologies: React.js, Node.js, MongoDB, Stripe API</p>
              <p>
                Built a full-stack e-commerce platform with secure
                transactions...
              </p>
              <a
                href="https://shopito-app-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Link to Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
