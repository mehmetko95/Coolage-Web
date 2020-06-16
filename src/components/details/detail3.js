import React from 'react';
import Lottie from "react-lottie";
import ai from "../../lotties/ai.json";

export default function Detail3(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ai,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    return(
        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
          <Lottie options={defaultOptions} height="800" width="800" />
          </div>
          <div className="col-md-7 pt-5" data-aos="fade-up" style={{marginTop:"6%"}}>
            <h3>Under the umbrella of AI</h3>
            <p>We incorporated revolutionary technology with the pinch of AI features to make user experience spicier.<br/> We love trends with flabbergasted changes, here with the same intensity of love we are gaining momentum with smart AI steps to be that service that people come to expect. Featuring, evolving and improving to make a huge impact.</p>
           
          </div>
        </div>
    )
}