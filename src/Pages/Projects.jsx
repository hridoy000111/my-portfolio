import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    imageUrl: "https://via.placeholder.com/400x250.png?text=Portfolio+Website",
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "Fully responsive e-commerce store with shopping cart, product filters, and payment integration.",
    imageUrl: "https://via.placeholder.com/400x250.png?text=E-commerce+Store",
    liveUrl: "https://yourecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-store",
  },
  {
    id: 3,
    title: "Task Manager App",
    description:
      "A React-based task manager app with CRUD operations and local storage support.",
    imageUrl: "https://via.placeholder.com/400x250.png?text=Task+Manager+App",
    liveUrl: "https://yourtaskmanager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
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
