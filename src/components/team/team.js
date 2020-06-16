import React from "react";
import TeamList from "./teamlist";


export default class Team extends React.Component{
    render(){
        return(
            <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our Great Team</p>
        </div>
        <TeamList/>
        </div>
        </section>
        )
    }
}