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
      <div className="font-sans flex flex-col h-screen overflow-hidden">
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