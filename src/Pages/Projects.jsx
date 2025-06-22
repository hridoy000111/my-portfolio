import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    imageUrl: "/portfolio.png",
    liveUrl: "https://my-portfolio-ashen-psi-30.vercel.app",
    githubUrl: "https://github.com/hridoy000111/my-portfolio.git",
  },
  {
    id: 2,
    title: "Newspaper Project",
    description:
      "A responsive news portal built with React.js. It features category-wise news, dynamic routing, Firebase authentication (Email & Google login), and protected routes. Clean UI and smooth navigation using React Router and Context API.",
    imageUrl: "/dragon.png",
    liveUrl: "https://dragon-news-six-lime.vercel.app ",
    githubUrl: "https://github.com/hridoy000111/dragon-news.git",
  },
  {
    id: 3,
    title: "A Weather App",
    description:
      "A simple and responsive weather application built with React.js. It fetches real-time weather data using a public API and displays temperature, location, and weather conditions. Clean UI with smooth user experience.",
    imageUrl: "/weather.png",
    liveUrl: "https://weather-app-rosy-two-68.vercel.app",
    githubUrl: "https://github.com/hridoy000111/weather-app.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">
          My Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {projects.map(
            ({ id, title, description, imageUrl, liveUrl, githubUrl }) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-700 mb-4">{description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                      aria-label={`${title} GitHub Repository`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
