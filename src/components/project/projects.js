import React from 'react';
import './projects.css';
import Swadeshi from "./Swadeshi.PNG";
import logo from "./logo.PNG";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import DSC from "./DSC.png";
import DSC2 from "./DSC2.png";

export default class Projects extends React.Component{
    render(){
        return (
            <section>
            <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src= {Swadeshi} alt="Swadeshi" />
                
                </div>
                <div className="flip-card-back">
                <img src= {logo} alt="logo" className='logo' /><br/>
                <p>Swadeshi is the government's vision that focuses on the need for a "swadeshi" or home grown model of economic development. </p>
                <img src= {logo2} alt="logo" className='logo2' />
                <img src= {logo3} alt="logo" className='logo3' />
                <img src= {logo4} alt="logo" className='logo4' /><br/>
                <button type="button" class="btn btn-success"><a href="https://swadeshiandolan.com/#/">Visit</a></button>
                
                </div>
                </div>


            </div>


            <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src= {DSC2} alt="DSC2" />
            
                </div>
                <div className="flip-card-back">
                <img src= {DSC} alt="logo" className='dsc' /><br/>
                <h7>Developer Students Club </h7>
                <img src= {logo2} alt="logo" className='dsc2' />
                <img src= {logo3} alt="logo" className='dsc3' />
                <img src= {logo4} alt="logo" className='dsc4' /><br/>
                <button type="button" class="btn btn-success" ><a href="www.developerstudentclub.com">Visit</a></button>
                </div>
                </div>


            </div>
            </section>


        );
            
        


    

    }
}