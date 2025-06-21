import React from "react";
import profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 px-6 sm:px-16 md:px-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image */}
        <div className="flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-blue-500 shadow-xl transition-transform duration-500 hover:scale-105">
          <img
            src={profile}
            alt="Redoy Khan"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <h2 className="text-5xl font-extrabold text-blue-900 drop-shadow-lg tracking-wide">
            About Me
          </h2>

          <p className="text-blue-800 text-lg leading-relaxed tracking-wide">
            👋 Hi, I am{" "}
            <strong className="text-blue-900 font-semibold">Redoy Khan</strong>,
            a passionate Front-End Developer with over 3 years of experience. I
            specialize in creating modern, responsive websites using{" "}
            <strong className="text-blue-900 font-semibold">React.js</strong>{" "}
            and{" "}
            <strong className="text-blue-900 font-semibold">
              Tailwind CSS
            </strong>
            . I love building clean and scalable user interfaces that provide
            great user experiences.
          </p>

          <p className="text-blue-700 text-lg leading-relaxed tracking-wide">
            I am detail-oriented, committed to writing clean code, and always
            eager to learn the latest web technologies. Whether you need a sleek
            landing page, a full-fledged web application, or a user-friendly UI,
            I am here to help bring your ideas to life.
          </p>

          <p className="text-blue-600 text-base italic tracking-wide">
            ✨ Let's work together and build something amazing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
