import React from 'react';
import Hero from './hero/hero';
import About from './about/about';
import Counter from './counter/counter';
import Detailslist from './details/detailslist';
import Team from './team/team';
import Contact from './contact/contact';



function Home() {
  
  return (
    <div className="Home ">
    
      <Hero/>
      <div id="main">
          <About/>
          <Counter/>
          <Detailslist/>
          <Team/>
          <Contact/>
      </div>

    </div>
  );
}

export default Home;
