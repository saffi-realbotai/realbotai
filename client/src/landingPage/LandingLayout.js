// LandingLayout.js - Layout Component for RealBotAI Landing Page

import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';

const LandingLayout = () => {
  return (
    <Router>
      <div className="landing-layout">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </div>
    </Router>
  );
};

export default LandingLayout;
