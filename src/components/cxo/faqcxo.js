import React from "react";
import FAQCXO from "./faqcxolist";


export default class FaqCXO extends React.Component{
    render(){
        return(
          
            <section id="faq" className="faq section-bg container-fluid">
            <div className="container">
      
              <div className="section-title" >
                <h2>F.A.Q</h2>
                <p>Frequently Asked Questions</p>
              </div>
              <FAQCXO/>
              </div>
              </section>
        )
    }
}