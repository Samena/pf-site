import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import Contact from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';
import Footer from './components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
          <CssBaseline />
      <NavBar/>
      <Jumbotron/>
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact component={NoMatch}/>
      </Switch>
    </Router>
    <Footer/>
    
        </React.Fragment>
     
  );
}

export default App;
