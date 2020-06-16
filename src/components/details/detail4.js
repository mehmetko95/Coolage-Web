import React from 'react';
import Lottie from "react-lottie";
import campus from "../../lotties/campus.json";

export default function Detail4(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: campus,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    return(
        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-right">
          <Lottie options={defaultOptions} height="700" width="700" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1"data-aos="fade-up" style={{marginTop:"10%"}}>
            <h3>Your Profession</h3>
            <p>With our career guidance programme throw an invisibilty cloak on all your confusions, puzzlement regarding your future walk of life.</p>
            <p>
            From exploring a new subject to acing internships in it at the top notch firms, COOLAGE is there to aid you at every point so,let us be the Dronacharya to your Arjuna to hit the fish's eye in your professional growth.
Connect, learn & grow your skillset with the right mantras from the right folks.            </p>
          </div>
        </div>
    )
}