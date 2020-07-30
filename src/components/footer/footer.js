import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../../assets/img/logo.png"
export default function Footer(){
    return(
      <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-center">
  
            <div className="col-lg-6 col-md-6">
              <div className="footer-info logo " >
              <NavLink to="/"><img src={logo} alt="" className="img-fluid" style={{width:"60%" ,height:"60%"}}/>&trade;</NavLink>
                <p className="pb-3"><em>Your all in one gateway to stay Updated, Organized and Connected to your College Life.</em></p>
                <p>
                  <strong>Phone:</strong>+91 79749 22411<br/>
                  <strong>Email:</strong> hello@coolage.app<br/>
                </p>
                <div className="social-links mt-3">
                  <a href="https://twitter.com/CoolAgeapp" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.facebook.com/coolageapp/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="https://www.instagram.com/coolageapp/" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="https://www.linkedin.com/company/coolageapp/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/intern">Internships</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/be-a-ceo">Be a CEO</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/community">Join Our Community</NavLink></li>
              </ul>
            </div>
  
        
  
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Get Early Access</h4>
              <p>Digitalize your college life</p>
              <NavLink to="/invite" className="btn">Request Invite</NavLink>
  
          </div>
        </div>
      </div>
  
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span><a href="https://coolage.app/">coolage 	&trade;</a></span></strong> .  All Rights Reserved
        </div>
      </div>
      </div>
    </footer>
    )
 
    
}