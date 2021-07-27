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

function App() {
  return (
    <div className="App">
      <Navigate />
      {/* <About />
      <Skills /> */}
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Experience' exact component={Experience} />
          <Route path='/Skills' exact component={Skills} />
          <Route path='/Portfolio' exact component={Portfolio} />
          <Route path='/Contact' exact component={Contact} />
      </Switch>
      <div className="footer">
        <p className="footer-text">DESIGNED BY GREG DUSEK Ⓒ 2021</p>
      </div>
    </div>
  );
}

export default App;