import React from "react";
import Lottie from "react-lottie";
import campus from "../../lotties/campus.json";
import { NavLink } from 'react-router-dom';

export default class Campus extends React.Component {

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: campus,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="container pt-5">
        <div className="row justify-content-center ">
          <Lottie options={defaultOptions} height="600" width="600" />
        </div>
        <h1 className="text-center" >Hola! People <br />We will be opening soon</h1>
        <div className="row justify-content-center">
          <NavLink to="/" > <span className="btn ">Back to Home</span></NavLink>
        </div>
      </div>

    )
  }
}