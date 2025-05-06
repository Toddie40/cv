import React from 'react';
import { useProjects } from '../context/ProjectsProvider';

const Experience = ({ title, date, projects }) => {
    const globalProjects = useProjects(); // Access the global projects array from context

    // Filter the global projects array to match the routes in the experience JSON
    const matchedProjects = globalProjects.filter((project) =>
      projects.includes(project.route)
    );
  
    console.log('Matched projects:', matchedProjects); // Debugging: Check the matched projects
  
    return (
      <div>
        <h3>{title}</h3>
        <p className="subtitle text-lg leading-relaxed mb-4">{date}</p>
        {matchedProjects && matchedProjects.length > 0 && (
          <ul className="pl-4">
            {matchedProjects.map((project, index) => (
              <li key={index}>
                <a href={"/projects/"+project.route} className="font-bold">{project.title}</a>
                <p className="text-base">{project.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Experience;