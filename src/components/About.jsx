// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="about-me ">
          <div className="about-me-text">
            <p className="text-lg">
              I am a dedicated and detail-oriented software developer with
              expertise in full-stack development, passionate about building
              scalable, user-centric applications. With a strong foundation in
              modern web technologies and a commitment to continuous learning, I
              aim to contribute to innovative projects that solve real-world
              problems. I am seeking opportunities within dynamic teams where I
              can leverage my technical skills, contribute to impactful
              solutions, and grow both personally and professionally.
            </p>
          </div>

          <div className="img">
            <img src="/profile1.jpg" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
