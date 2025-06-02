import React from 'react';
import AboutMe from '../components/Aboutme';
import Positions from '../components/Positions';
import Education from '../components/Education';

const Home = () => (
  <main className="max-w-4xl mx-auto py-8 space-y-8">
    
    <AboutMe />
    <Positions />
    <Education />
    
  </main>
);

export default Home;