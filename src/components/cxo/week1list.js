import React from "react";
import ananya from "../../assets/img/cxoweek/ananya.jpeg";
import bhuvan from "../../assets/img/cxoweek/bhuvan.jpeg";
import chhavi from "../../assets/img/cxoweek/chhavi.jpeg";
import deepak from "../../assets/img/cxoweek/deepak.jpeg";
import diksha from "../../assets/img/cxoweek/diksha.jpeg";
import lakshay from "../../assets/img/cxoweek/lakshay.jpeg";
import pallavi from "../../assets/img/cxoweek/pallavi.jpeg";
import pooja from "../../assets/img/cxoweek/pooja.jpeg";
import pradnya from "../../assets/img/cxoweek/pradnya.jpeg";
import rachita from "../../assets/img/cxoweek/rachita.jpeg";
import suhani from "../../assets/img/cxoweek/suhani.jpeg";
import upasana from "../../assets/img/cxoweek/upasana.jpeg";



export default class Weeklist extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: false,
      cxo: [
        {
          name: "Pradnya Karve",
          position: "CEO",
          image: pradnya,
          college:"Indira Gandhi College",
        },
        {
          name: "Deepak Kumar Arya",
          position: "CTO",
          image: deepak,
          college:"College of Engineering Roorkee",
        },
        {
          name: "Rachita Kriti",
          position: "CMO",
          image: rachita,
          college:"NIFT Delhi",
        },
        {
          name: "Bhuvan Aggarwal",
          position: "CBO",
          image: bhuvan,
          college:"IIT Bombay",
        },
        {
          name: "Pallavi Tulsian",
          position: "Head of Market Research",
          image: pallavi,
          college:"Singapore Management University",
        },
        {
          name: "Chhavi Gupta",
          position: "Head of Design",
          image: chhavi,
          college:"Aayojan School of Architecture",
        },
        {
          name: "Ananya Roy",
          position: "Head of AI",
          image: ananya,
          college:"MIT Manipal",
        },
        {
          name: "Lakshay Goel",
          position: "Chief Web Officer",
          image: lakshay,
          college:"University of Waterloo Canada",
        },
        {
          name: "Diksha Khanna",
          position: "Chief HR Officer",
          image: diksha,
          college:"Christ University Bangalore",
        },
        {
          name: "Dr. Suhani Jindal",
          position: "Social Media Head",
          image: suhani,
          college:"TAPMI Manipal",
        },
        {
          name: "Upasana Sharma",
          position: "Head of Content",
          image: upasana,
          college:"Zakir Husain College, Delhi",
        },
        {
          name: "Pooja Chauhan",
          position: "Head of Graphic Design",
          image: pooja,
          college:"Indraprastha College for Women",
        },

     
      ],
    };
  }
  render() {
    return (
      <div className="row justify-content-center" data-aos="fade-up">
        {this.state.cxo.map((team, key) => (
          <div className="col-lg-3 col-md-6 mb-5">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="pic">
                <img src={team.image} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>{team.name}</h4>
                <span>{team.position}</span>
                <span>{team.college}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}
