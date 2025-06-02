import React, { createContext, useContext } from 'react';

// Dynamically import all project JSON files
const projectFiles = import.meta.glob('../json/projects/*.json', { eager: true });

// Transform the imported files into an array of projects
const projects = Object.entries(projectFiles).map(([filePath, module]) => {
  return {...module.default }; // Spread all JSON content into the object
});

// Create the context
const ProjectsContext = createContext([]);

// Create a provider component
export const ProjectsProvider = ({ children }) => (
  <ProjectsContext.Provider value={projects}>
    {children}
  </ProjectsContext.Provider>
);

// Custom hook to use the ProjectsContext
export const useProjects = () => useContext(ProjectsContext);