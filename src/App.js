import './App.css';
import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Landing from './Components/Landing';
import Navigate from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Toolbox from './Components/Toolbox';

function App() {
  return (
    <div className="App">
      <Navigate />
      {/* <Home />
      <About />
      <Experience />
      <Skills />
      <Landing />
      <Portfolio />
      <Toolbox />
      <Contact /> */}
    </div>
  );
}

export default App;