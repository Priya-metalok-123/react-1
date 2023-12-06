import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navBar';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import { loadFull } from 'tsparticles';
import particles from './utils.js/particles';
import Particles from 'react-tsparticles';

function App() {
  const renderParticleJsInHomePage = true;

  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Router>
      <>
        <div className="App">
          {/* particles js */}
          {renderParticleJsInHomePage && (
            <Particles id="particles" options={particles} init={handleInit} />
          )}

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
