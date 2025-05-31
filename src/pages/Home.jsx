import React from 'react';
import Experience from '../components/Experience';
import AboutMe from '../components/Aboutme';


// Dynamically import all experience JSON files
const experienceFiles = import.meta.glob('./experience/*.json', { eager: true });

// Transform the imported files into an array of experience objects
const experiences = Object.values(experienceFiles).map((module) => module.default);

const Home = () => (
  <main className="max-w-4xl mx-auto py-8 space-y-8">
    
    <AboutMe />

    {/* Dynamically render Experience components */}
    <section className='experience p-4'>
    <h2>Experience</h2>
    {experiences.map((experience, index) => (
      <Experience
        title={experience.JobTitle}
        date={experience.Date}
        projects={experience.Projects}
      />
    ))}
    </section>
  </main>
);

export default Home;