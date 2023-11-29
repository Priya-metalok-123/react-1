import "./App.scss";
import React from 'react'
import Navbar from './components/navBar';
import Home from "./containers/home";
import About from './containers/about'
import { loadFull } from "tsparticles";
import particles from "./utils.js/particles";
import Particles from "react-tsparticles";

function App() {
  const renderParticleJsInHomePage = true;
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
     <div className="App">
     <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

    <Navbar />
    <Home />
    <About />
    
    </div>
    </div>
    </>
  )
}

export default App