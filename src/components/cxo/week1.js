import React from "react";
import TeamList from "./week1list";


export default class Week extends React.Component{
    render(){
        return(
            <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <p className="text-center">Our CEO's this week</p>
        </div>
        <TeamList/>
        </div>
        </section>
        )
    }
}