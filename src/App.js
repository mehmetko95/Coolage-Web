import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';


import Home from './components/home';
import NavBar from './components/header/navbar';
import Footer from './components/footer/footer';
import Error from './components/404/error';
import Campus from './components/campus/campus';
import Intern from './components/intern/intern';
import './assets/css/style.css';
import Contact from './components/contact/contact';
import Invite from './components/invite/invite';
import CXO from './components/cxo/cxo';
import Community from './components/community/community';
import Projects from './components/project/projects';

function App() {
  return (
    <Router >
      <Switch>
        <div className="App">
        <ScrollToTop>
      
          <NavBar />
      
            <Route exact path="/" component={Home} />
            <Route exact path="/campus" component={Campus} />
            <Route exact path="/intern" component={Intern} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/invite" component={Invite} />
            <Route exact path="/be-a-ceo" component={CXO} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/project" component={Projects} />
            <br />
            <Route path="/404" component={Error} />
            <br />
       
          <Footer />
          </ScrollToTop>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
