import { Github as GitHub, ExternalLink } from 'lucide-react';
import ToDoList from '../images/to-do-list.png';
import urlShortner from '../images/url-shortner.png';
import BlogApp from '../images/blog-app.png';
function ProjectCard({ title, description, tech, demoLink, githubLink, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
            >
              Live Demo <ExternalLink size={16} className="ml-1" />
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              GitHub <GitHub size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Chess Game",
      description: "This is a simple Chess Game developed in Java, providing a classic two-player chess experience. The game follows standard chess rules, with the goal of checkmating the opponent's king.",
      tech: ["Java", "JFrame", "Sphinx"],
      // demoLink: "https://demo-link.com",
      githubLink: "https://github.com/neev-ahuja/chess-java",
      image: "https://github.com/neev-ahuja/chess-java/raw/main/game_screenshot.png",
    },
    {
      title: "Blog App",
      description: "A comprehensive platform that stores and display blogs written by users. This full-stack application is built using the MERN stack, which includes MongoDB, Express, React, and Node.js.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      demoLink: "https:/neev-ahuja.github.io/Blog-website",
      githubLink: "https://github.com/neev-ahuja/Blog-website",
      image: BlogApp,
    },
    {
      title: "URL Shortner App",
      description: "An innovative URL shortening service that converts long URLs into short and easy-to-share links. This app is built using Node.js, Express, and MongoDB.",
      tech: ["NodeJs" , "React" , "Express" , "MongoDB"],
      githubLink: "https://github.com/neev-ahuja/url-shortner",
      image: urlShortner,
    },
    {
      title: "React To-Do List",
      description: "A simple and efficient To-Do List application built using ReactJS. This app helps you manage your daily tasks by allowing you to add, mark as completed, and delete tasks.",
      tech: ["ReactJS"],
      demoLink : 'https://neev-ahuja.github.io/To-Do-List/',
      githubLink: "https://github.com/neev-ahuja/to-do-list/",
      image: ToDoList,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;