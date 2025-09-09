import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectsProvider';
import Dropdown from './Dropdown';

const Navbar = () => {
  const projects = useProjects();
  
  return (
    <nav className="shadow">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
        <Link to="/" className="text-xl font-bold text-shadow-sm">Alexander Todd</Link>
        </div>
        <div className="space-x-6 text-sm flex items-center">
          <Link to="/" className="hover:text-highlight text-shadow-sm">CV</Link>
          <Dropdown label="Projects" items={projects} />
          <Link to="/contact" className="hover:text-highlight">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;