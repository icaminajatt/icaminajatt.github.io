import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Education from './components/pages/Education';
import Work from './components/pages/Work';
import FunFacts from './components/pages/FunFacts';
import Hobbies from './components/pages/Hobbies';
import Footer from './components/Footer/Footer';
import Review from './components/pages/Review';
import ScrollToTop from './components/NavBar/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/education' exact component={Education} />
          <Route path='/work' exact component={Work} />
          <Route path='/funfacts' exact component={FunFacts} />
          <Route path='/likes' exact component={Hobbies} />
          <Route path='/reviews' exact component={Review} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
