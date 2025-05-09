import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => (
  <div className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL + project.image})` }}
  >
      {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-white/80"></div>
  <div className="relative justify-between max-w-4xl mx-auto px-4">
    <div className="relative flex flex-col">
      <div className='sticky'>
        <Link className="text-right pt-4" to="/">↩&#xFE0E; Back to CV</Link>
      </div>
      <h1 className="text-3xl font-bold">{project.title}</h1>

      <p className="text-lg leading-relaxed py-4">{project.one_line_description}</p>
      {project.details && Array.isArray(project.details) && (
        <div>
        <h2>Description</h2>
        <div className="mt-4">
          {project.details.map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
          ))}
        </div>
        </div>
      )}
      

      {project.responsibilities_preamble && (
      <div className='mt-4'>
      <h2>Responsibilities:</h2>
      <p>{project.responsibilities_preamble}</p>
      </div>
      )}

      {project.responsibilities && (
        <div className='mt-4'>
          
          <ul className='list-disc list-inside p-4'>
            {project.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}

      {project.skills && (
        <div className="mt-4">
          <h2 className="mb-2">Skills Used:</h2>
          <div className="p-4 grid grid-cols-3 gap-4">
            {project.skills.map((skill, index) => (
              <div key={index} className="pill">
                <div>
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  </div>
);

export default Project;