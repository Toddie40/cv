import React from 'react';

const Overview = ({ route, title, description, details }) => (
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
    <p className="text-lg leading-relaxed mb-4">{description}</p>
    {details && details.length > 0 && (
      <ul className="list-disc list-inside pl-4">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

export default Overview;