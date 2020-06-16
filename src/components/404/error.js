import React from "react";
import Lottie from "react-lottie";
import error from "../../lotties/404.json";
import {NavLink} from 'react-router-dom';

export default class Error extends React.Component{
    
    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: error,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return(
      <div className="container pt-5">
      <div className="row justify-content-center pt-5">
      <Lottie options={defaultOptions} height="600" width="600"/>
      </div>
      <div className="row justify-content-center">
      <NavLink to="/" > <span className="btn ">Back to Home</span></NavLink>
      </div>
  </div>
           
        )
    }
}