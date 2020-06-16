import React from "react";
import Lottie from "react-lottie";
import intern from "../../lotties/intern.json";
import ai from '../../assets/img/intern/ai.svg';
import content from '../../assets/img/intern/content.svg';
import designer from '../../assets/img/intern/designer.svg';
import product from '../../assets/img/intern/product.svg';
import developer from '../../assets/img/intern/developer.svg';
import digital from '../../assets/img/intern/digital.svg';
import hr from '../../assets/img/intern/hr.svg';
import market from '../../assets/img/intern/market.svg';
import ux from '../../assets/img/intern/ux.svg';

export default class Intern extends React.Component {
  constructor() {
    super();
    this.state = {
        isToggleOn: false,
        show: false,
        showme: true,
        opening: [
            { position:"Artificial Intelligence",
              description:"Are you a huge fan of AI? Then blow everyone’s mind with your AI skills.",
              image:ai,
              link:"https://forms.gle/4ZzWkL5idGXTvTYF6"
        },
        { position:"Web/App Development",
        description:"Feature a website/android app and make it more alive than ever.",
        image:developer,
        link:"https://forms.gle/sBvakWU6TnCevd9TA"
        },
        { position:"Graphic Designer/ Motion Designer",
        description:"Craft the communication in a beautiful way through design and animation.",
        image:designer,
        link:"https://forms.gle/PjdMH2LVuVpaTeUF8"
        },
        { position:"Product Design/Management",
        description:"Let the creativity flow through you and prove that a product is more than a product.",
        image:product,
        link:"https://forms.gle/jdCUueTCoG3mKonw6"
        },
        { position:"UX Designer",
        description:"Are you crazy enough to provide meaningful and relevant experience to user? Because experience is everything.",
        image:ux,
        link:"https://forms.gle/fFaZZ1NcZ1c6q5Y6A"
        },
        { position:"HR",
        description:"Show some competent HR skills and get the real world experience.",
        image:hr,
        link:"https://forms.gle/gDr31617puQUXy696"
        },
        { position:"Market Research/ Business Development",
        description:"Show that you can change the direction of wind at your will.",
        image:market,
        link:"https://forms.gle/NJgnnmxmpHNjBDtC8"
        },
        { position:"Content Writing",
        description:"Passionate about writing? Here we are giving you the opportunity to bring orgasm to the readers.",
        image:content,
        link:"https://forms.gle/mN94vJXWigCUSdiK7"
        },
       
        { position:"Digital Marketing/ Social Media Marketing",
        description:"Show your marketing skills and bring the vibrations of higher level.",
        image:digital,
        link:"https://forms.gle/ZU7w4wQ1g9mDAJaV9"
        },
        

      ]
    }
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: intern,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <section id="pricing" className="pricing" >
      
      <div className="container pt-5">

        <div className="row justify-content-center pt-5">
        <Lottie options={defaultOptions} height="200" width="200" />
        <div className=" section-title" >
        <p className="text-center" >Welcome to Coolage's Internship Program </p>
        </div>
      
        </div>
        <div className="row justify-content-center">
        {this.state.opening.map((opening, key) =>
          
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0 mb-5 intern-box">
          <a href={opening.link} target="_blank" rel="noopener noreferrer"  >
            <div className="box featured" data-aos="fade-up" data-aos-delay="200">
              <h3>{opening.position}</h3>
                  <img src={opening.image} className="img-fluid " alt="opening" />
              <p className="text-dark">{opening.description}</p>
              <div className="btn-wrap">
                <a href={opening.link} target="_blank" rel="noopener noreferrer" class="btn-buy">Apply</a>
              </div>
            </div>
            </a>
        </div>
    
        )}
        
      </div>
      <h3 className="text-center ">For any Queries contact us at hello@coolage.app</h3>
      </div>
</section>
    )
  }
}