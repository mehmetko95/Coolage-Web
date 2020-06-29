import React from "react";
import Info from "./info";
import FaqCXO from "./faqcxo";
import Cxo from '../../assets/img/cxo.jpg';
import AboutCXO from "./aboutcxo";
import Week from "./week1";
export default function CXO() {


  return (
    <section >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 justify-content-center">
            <img src={Cxo} className="img-fluid" alt="cxo" />
          </div>
        </div>
        <div className="section-title pt-5">
          <p className="text-center" data-aos="fade-up" >
           Become a CEO for a week
          </p>
          <h3 className="lead text-center" data-aos="fade-up">
            “Knowing is not enough, we must apply. Willing is not enough we must
            do.”
            <br /> <strong>- Bruce Lee</strong>
          </h3>
        </div>
        <Week/>
        <AboutCXO />
        <Info />
      </div>
        <FaqCXO />
    </section>
  );
}
