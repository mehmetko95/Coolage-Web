import React from 'react';
import Lottie from "react-lottie";
import network from "../../lotties/network.json";

export default function Detail2(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: network,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    return(
        <div className="row content">
        <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
        <Lottie options={defaultOptions} height="700" width="700" />
        </div>
        <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up" style={{marginTop:"6%"}}>
          <h3>People and Network</h3>
          <p >
          Tired of looking for guidance from strange professionals, well, No more surfing the net for finding experience and expertise when you can have your panel of maestro's at just one place!
          </p>
          <p>
          Your search for people with similar interests, a dream team for a project/startup, or finding a gang to explore new endeavours ends here.
          </p>
        </div>
      </div>
    )
}