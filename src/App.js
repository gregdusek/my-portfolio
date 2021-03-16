import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Navigate from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Toolbox from './Components/Toolbox';

function App() {
  return (
    <div className="App">
      <Navigate />
      <About />
      {/* <Switch> */}
          <Switch path='/' exact component={Home} />
          <Switch path='/About' exact component={About} />
          <Switch path='/Experience' exact component={Experience} />
          <Switch path='/Skills' exact component={Skills} />
          <Switch path='/Portfolio' exact component={Portfolio} />
          <Switch path='/Toolbox' exact component={Toolbox} />
          <Switch path='/Contact' exact component={Contact} />
      {/* </Switch> */}
    </div>
  );
}

export default App;