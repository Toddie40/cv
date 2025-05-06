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
    <Router>
      <div className="font-sans leading-relaxed pt-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {projects.map((project) => (
            <Route
              key={project.route}
              path={`/projects/${project.route}`}
              element={<Project {...project} />}
            />
          ))}
        </Routes>
        <Footer />
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