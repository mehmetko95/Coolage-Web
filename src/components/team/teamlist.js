import React from "react";
import sandeep from "../../assets/img/team/sandeep.png";
import praveen from "../../assets/img/team/praveen.png";
import jeet from "../../assets/img/team/jeet.png";
import rishabh from "../../assets/img/team/rishabh.png";
import kartik from "../../assets/img/team/kartik.png";
import om from "../../assets/img/team/om.png";
import harpreet from "../../assets/img/team/harpreet.png";
import pratiksha from "../../assets/img/team/pratiksha.png";
import naaz from "../../assets/img/team/naaz.png";
import parth from "../../assets/img/team/parth.png";
import kunal from "../../assets/img/team/kunal.png";
import harsh from "../../assets/img/team/harsh.png";
import anmol from "../../assets/img/team/anmol.png";
import rudram from "../../assets/img/team/rudram.png";
import neelam from "../../assets/img/team/neelam.png";
import shilpa from "../../assets/img/team/shilpa.png";
import ayurdha from "../../assets/img/team/ayurdha.png";
import siddharth from "../../assets/img/team/siddharth.png";
import kashyap from "../../assets/img/team/kashyap.png";
import harshm from "../../assets/img/team/harshm.png";
import shubham from "../../assets/img/team/shubham.png";
import shrishty from "../../assets/img/team/shrishty.png";

export default class TeamList extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: false,
      show: false,
      showme: true,
      team: [
        {
          name: "Harsh Badhai",
          position: "Product Designer",
          image: harsh,
          linkedin: "https://www.linkedin.com/in/harsh-badhai-a9bb99183",
          instagram: "https://www.instagram.com/frames_by._harsh/",
        },
        {
          name: "Kartik Malviya",
          position: "UX Designer",
          image: kartik,
          linkedin: "https://www.linkedin.com/in/kartik-malviya-85146a191",
          instagram: "https://www.instagram.com/music.kartik/",
        },
        {
          name: "Anmol Sharma",
          position: "Marketing",
          image: anmol,
          linkedin: "https://www.linkedin.com/in/anmol-sharma-b8a642150",
          instagram: "https://www.instagram.com/anmolsharma_02",
        },
        {
          name: "Parth",
          position: "Management ",
          image: parth,
          linkedin: "https://www.linkedin.com/in/parthshinh",
          instagram: "https://www.instagram.com/in/parth_shinh",
        },
        {
          name: "Siddharth Arora",
          position: "Web Developer",
          image: siddharth,
          linkedin: "https://www.linkedin.com/in/siddharth-arora-8119b6150/",
          instagram: "https://www.instagram.com/sidd.hearrt/",
        },
        {
          name: "Pratiksha Sharma",
          position: "Content Writing",
          image: pratiksha,
          linkedin: "https://www.linkedin.com/in/pratiksha-sharma-053829185/",
          instagram: "https://www.instagram.com/pr_tiksh_/?hl=en",
        },

        {
          name: "Kashyap",
          position: "App Developer",
          image: kashyap,
          linkedin: "https://www.linkedin.com/in/kashyap-goutam-592460199",
          instagram: "http://Instagram.com/kashyap_193",
        },
        {
          name: "Shilpa",
          position: "HR",
          image: shilpa,
          linkedin: "https://www.linkedin.com/in/shilpa-sharma-34b571179",
          instagram: "https://www.instagram.com/_shilpasharma/",
        },

        {
          name: "Neelam Rani",
          position: "HR Manager",
          image: neelam,
          linkedin: "https://www.linkedin.com/in/neelam-rani-732709171",
          instagram: "#",
        },
        {
          name: "Kunal Garg",
          position: "Web Developer",
          image: kunal,
          linkedin: "https://www.linkedin.com/in/kunal-garg-0b199517a/",
          instagram: "https://www.instagram.com/kunal_g_29",
        },
        {
          name: "Rudram Meena",
          position: "Graphic Designer",
          image: rudram,
          linkedin: "http://www.linkedin.com/in/rudram-meena-685a68160",
          instagram:
            "https://www.instagram.com/invites/contact/?i=18icbacoa9o7j&utm_content=2zbuwbz",
        },
        {
          name: "Ayurdha Gupta",
          position: "Finance",
          image: ayurdha,
          linkedin: "https://www.linkedin.com/in/ayurdha-gupta-933450139",
          instagram: "#",
        },
        {
          name: "Jeet",
          position: "Management",
          image: jeet,
          linkedin: "https://www.linkedin.com/in/jeet-yadav-41a073175/",
          instagram: "https://www.instagram.com/jeet.yadav11/?hl=en",
        },
        {
          name: "Shubham Joshi",
          position: "Data Science and AI",
          image: shubham,
          linkedin: "https://www.linkedin.com/mwlite/in/shubhamjoshids",
          instagram: "https://www.instagram.com/justanotherjoshi/",
        },
        {
          name: "Harsh Mittal",
          position: "Data Science and AI",
          image: harshm,
          linkedin: "https://www.linkedin.com/in/mittalh/",
          instagram: "https://www.instagram.com/mitta_lh/",
        },
        {
          name: "Srishty Banga",
          position: "Graphic Designer",
          image: shrishty,
          linkedin: "https://www.linkedin.com/in/srishty-banga-99467217a",
          instagram:
            "https://instagram.com/artlover_shishtiii?igshid=1l8hk5emco4hk",
        },
        {
          name: "Rishabh Vatsa",
          position: "Marketing",
          image: rishabh,
          linkedin: "https://www.linkedin.com/in/rishabh-vatsa-38584a167",
          instagram:
            "https://instagram.com/vatsarishabh22?igshid=14kxrjrx4vexh",
        },
        {
          name: "Harpreet Kaur",
          position: "Marketing",
          image: harpreet,
          linkedin: "https://www.linkedin.com/in/harpreet-kaur-a27b6b146",
          instagram: "https://www.instagram.com/preet_hkaur18/",
        },

        {
          name: "Om Satya",
          position: "Management",
          image: om,
          linkedin: "#",
          instagram:
            "https://www.instagram.com/omsatyaswaroop/?igshid=18aysti22nkj6",
        },
        {
          name: "Naaz",
          position: "Publicity",
          image: naaz,
          linkedin: "https://www.linkedin.com/in/naaz-kakria-b63a30193",
          instagram: "https://instagram.com/naazk2001?igshid=mtpm0oap8zyw",
        },
        {
          name: "Sandeep Thakur",
          position: "CEO",
          image: sandeep,
          linkedin: "https://www.linkedin.com/in/sandeepthakur112/",
          instagram: "https://www.instagram.com/thakur_amorous/",
        },
        {
          name: "Praveen Agrawal",
          position: "CTO",
          image: praveen,
          linkedin:
            "https://www.linkedin.com/mwlite/in/praveen-agrawal-6b3b0b142   ",
          instagram: "https://www.instagram.com/praveenhbnsh ",
        },
      ],
      itemsToShow: 4,
      expanded: false,
    };
    this.showMore = this.showMore.bind(this);
  }
  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({ itemsToShow: this.state.team.length, expanded: true })
      : this.setState({ itemsToShow: 4, expanded: false });
  }
  render() {
    return (
      <div className="row justify-content-center" data-aos="fade-up">
        {this.state.team.slice(0, this.state.itemsToShow).map((team, key) => (
          <div className="col-lg-3 col-md-6 mb-5">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="pic">
                <img src={team.image} className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>{team.name}</h4>
                <span>{team.position}</span>
                <div className="social">
                  <a
                    href={team.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icofont-instagram"></i>
                  </a>
                  <a
                    href={team.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-12 col-md-6 mb-5 row justify-content-center">
        <button className="btn" onClick={this.showMore}>
          {this.state.expanded ? (
            <span style={{color:"#fff"}}>Show Less</span>
          ) : (
            <span style={{color:"#fff"}}>Show All</span>
          )}
        </button>
      </div>
      </div>
    );
  }
}
