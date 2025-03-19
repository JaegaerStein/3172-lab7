import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://three172-lab7.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>
              <a
                href={
                  project.name === "Portfolio Site"
                    ? "https://jaegaerstein.github.io/JaegarStein.github.io/index.html"
                    : project.name === "Item Shop"
                    ? "https://web.cs.dal.ca/~steinhauer/csci3172/labs/lab3/"
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            </h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
