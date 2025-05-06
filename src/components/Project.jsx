import React from 'react';

const Project = ({ route, title, description, details }) => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-lg leading-relaxed mb-4">{description}</p>
    {details && (
      <p>{details}</p>
    )}
  </div>
);

export default Project;