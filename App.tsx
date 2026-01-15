
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Demo from './components/Demo';
import SystemicJourney from './components/SystemicJourney';
import Impact from './components/Impact';
import Reflection from './components/Reflection';
import Team from './components/Team';
import Appendix from './components/Appendix';

function App() {
  return (
    <div className="min-h-screen bg-beige-50 text-brand-dark selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SystemicJourney />
        <Reflection />
        <Demo />
        <Impact />
        <Team />
        <Appendix />
      </main>
    </div>
  );
}

export default App;
