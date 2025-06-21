import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 sm:px-12 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-extrabold text-blue-900 mb-10 text-center">
        My Resume
      </h2>

      <p className="max-w-3xl text-center text-blue-700 mb-8 leading-relaxed text-lg">
        Download my professional resume to learn more about my skills,
        experiences, and projects.
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;
