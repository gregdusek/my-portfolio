import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
// import Landing from './Components/Landing';
import Navigate from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Toolbox from './Components/Toolbox';

function App() {
  return (
    <div className="App">
      <Navigate />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About} />
          <Route path='/Experience' exact component={Experience} />
          <Route path='/Skills' exact component={Skills} />
          {/* <Landing /> */}
          <Route path='/Portfolio' exact component={Portfolio} />
          <Route path='/Toolbox' exact component={Toolbox} />
          <Route path='/Contact' exact component={Contact} />
      </Switch>
    </div>
  );
}

export default App;