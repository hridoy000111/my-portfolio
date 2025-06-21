import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-400 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 relative">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-5 animate-fade-in">
        {/* Badge */}
        <p className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
          Front-End Developer | React | Tailwind CSS
        </p>

        {/* Name */}
        <h2 className="text-lg text-gray-500">👋 Hello, I am</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
          Redoy Khan
        </h1>

        {/* Typewriter */}
        <h2 className="text-xl text-gray-600 font-medium">
          <Typewriter
            words={[
              "I build modern websites",
              "I love working with React.js",
              "I create beautiful UIs",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Bullet Points */}
        <ul className="text-left space-y-2 mt-2 text-gray-700 text-sm list-disc list-inside">
          <li>3+ years of experience in frontend development</li>
          <li>Responsive, mobile-first design expert</li>
          <li>Clean, scalable & pixel-perfect UI</li>
        </ul>

        {/* Buttons */}
        <div className="space-x-4 mt-4">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 duration-300 shadow-md"
          >
            📄 Download Resume
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white duration-300 shadow-sm"
          >
            📩 Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl text-blue-600">
          <a href="https://github.com/yourusername" target="_blank">
            <FaGithub className="hover:text-black duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <FaLinkedin className="hover:text-blue-800 duration-300" />
          </a>
          <a href="https://fiverr.com/yourusername" target="_blank">
            <SiFiverr className="hover:text-green-600 duration-300" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl hover:scale-105 duration-300">
          <img
            src={profile}
            alt="Redoy Khan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
