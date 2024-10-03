// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p>
          Feel free to reach out to discuss potential collaboration or if you
          have any questions!
        </p>
        <p>Email: stevedevop95@gmail.com</p>
        <p>Phone: +234 708 640 4200, +234 906 505 4422</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lenity-stephen-065a471b3/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/lenity-stephen-065a471b3/
          </a>
        </p>
        <p>
          GitHub:
          <a
            href="https://github.com/LightUpdev"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/LightUpdev
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
