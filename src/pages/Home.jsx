import React from 'react';
import Experience from '../components/Experience';

// Dynamically import all experience JSON files
const experienceFiles = import.meta.glob('./experience/*.json', { eager: true });

// Transform the imported files into an array of experience objects
const experiences = Object.values(experienceFiles).map((module) => module.default);

const Home = () => (
  <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
    <section>
      <h2>About Me</h2>
      <p>
        Hi, I'm Alex. I'm a Machine Learning and AI Specialist working at BMT. My background is in
        Mechanical Engineering, but recently I have pivoted to leveraging modern machine learning
        and artificial intelligence techniques to solving engineering problems. I sit at the
        interface between the real and the digital and excel at bringing machine learning techniques
        into the <b>real world.</b>
      </p>
    </section>

    {/* Dynamically render Experience components */}
    <section>
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