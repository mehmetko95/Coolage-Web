import React from "react";
import FAQList from "./faqlist";


export default class Faq extends React.Component{
    render(){
        return(
            <section id="faq" className="faq section-bg">
            <div className="container">
      
              <div className="section-title" data-aos="fade-up">
                <h2>F.A.Q</h2>
                <p>Frequently Asked Questions</p>
              </div>
              <FAQList/>
              </div>
              </section>
        )
    }
}