import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => (
  <div className="project">
  <div className="justify-between max-w-4xl mx-auto px-4">
    <div className="flex flex-col">
      <div className='sticky'>
        <Link className="text-right pt-4" to="/">↩&#xFE0E; Back to CV</Link>
      </div>
      
      <h1 className="text-3xl font-bold mt-4 text-center underline">{project.title}</h1>

      <div className='flex flex-wrap md:flex-nowrap gap-4 mt-4'>
      <div>  
        <p className="text-lg leading-relaxed py-4 px-12 italic">{project.one_line_description}</p>
      </div>
      {project.image && <div className='max-w-[50%]'>
        <img className="rounded-sm" src={`${import.meta.env.BASE_URL}images/${project.image}`} />
      </div>}
      
      </div>
      {project.details && Array.isArray(project.details) && (
        <div className='mt-8'>
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
          <div className="p-4 flex flex-wrap justify-center gap-4">
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

      {project.links && (
        <div>
          <h2>External Links:</h2>
          <div className='flex flex-wrap text-center justify-center gap-4 p-4'>
          {project.links.map((link, index) => (
            <a key={index} href={link.url} className='button'>{link.name}</a>
          ))}
          </div>
        </div>
      )}
      </div>
    </div>
  </div>
);

export default Project;