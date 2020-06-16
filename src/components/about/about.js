import React from 'react';
import Lottie from "react-lottie";
import about from '../../lotties/about.json';

export default function About(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    return(
        <section id="about" className="about">
        <div className="container-fluid">
  
          <div className="row">
            <div className="col-xl-5 col-lg-6  justify-content-center align-items-stretch" data-aos="fade-right">
            <Lottie options={defaultOptions} height="700" width="700" />
                   </div>
  
            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
          <h3>A brief elucidation of Coolage's AI-powered platform, its services and illustration of how it would impact to add cool to your college life !</h3>
  
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon"><i class="icofont-people"></i></div>
                <h4 className="title"><p>Who are we ?</p></h4>
                <p className="description">Innovators, Enterpreneurs, Millennials different people call us different names but actually we are just some young muggles wiling to bring some magic into our tiring and boring college routines with COOLAGE making those ecstatic spells.</p>
              </div>
  
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon"><i class="icofont-question"></i></div>
                <h4 className="title"><p>Why us ?</p></h4>
                <p className="description">There's no shame in addressing that an average college student begins to struggle with the hectic routine of keeping up with events, projects and club activities.To end this struggle of just existing but start exploring, evolving, networking and challenging yourself to new adventures COOLAGE brings you a compact solution to sauce up your </p>
              </div>
  
              <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon"><i className="bx bx-atom"></i></div>
                <h4 className="title"><p>How would you benefit ?</p></h4>
                <p className="description">COOLAGE tends to wrap all your college chores at one-go, along with it it gives you the access to all your college resources, essential happenings and gatherings of campus, counsel your career growth, enhance your networking prowess and much more to ease your life at college so that you don't miss out at the best times of college.</p>
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    )
 
    
}