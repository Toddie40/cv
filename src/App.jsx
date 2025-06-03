import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Project from './components/Project';
import Contact from './pages/Contact';
import { ProjectsProvider, useProjects } from './context/ProjectsProvider';

const AppContent = () => {
  const projects = useProjects(); // Access projects from context

  return (
    <Router basename="/cv/"> {/* Set the base path */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/> 
      </head>
      <div className="page-font flex flex-col h-screen overflow-hidden">
        <Navbar/>
        <div className="overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {projects.map((project) => (
              <Route
                key={project.route}
                path={`/projects/${project.route}`}
                element={<Project project={project} />}
              />
            ))}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

const App = () => (
  <ProjectsProvider>
    <AppContent />
  </ProjectsProvider>
);

export default App;