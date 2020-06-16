import React from 'react';
import Lottie from "react-lottie";
import event from '../../lotties/event.json';

export default function Detail1(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: event,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    return(
        <div className="row content">
        <div className="col-md-4 justify-content-center" data-aos="fade-right">
        <Lottie options={defaultOptions} height="700" width="700" />
        </div>
        <div className="col-md-8 pt-4  " data-aos="fade-up" style={{marginTop:"10%"}}>
          <h3>Don't Miss Me</h3>
          <p >
          Stay updated with all the  happenings and gathering around your field of interests.
          </p>
          <p>
          Be it a professional educational meet or a cool fun escape, take a deep breath & relax cause Coolage's got your back to let nothing miss your attention.          </p>
        </div>
      </div>
    )
}