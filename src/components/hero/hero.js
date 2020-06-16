import React from 'react';
import hero from '../../assets/img/hero-img.png';
import {NavLink} from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
            <div data-aos="zoom-out">
              <h1>Glide over the roller coaster of your college life with <span>coolage.</span></h1>
              <h2>An App just made to improvise your college life</h2>
              <div className="text-center text-lg-left">
                <NavLink to="/invite" className="btn-get-started scrollto">Get Early Access</NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
            <img src={hero} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>

      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="wave1">
          <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
        </g>
        <g className="wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
        </g>
        <g className="wave3">
          <use href="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>

    </section>
  )
}