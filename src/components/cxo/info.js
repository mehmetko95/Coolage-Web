import React from "react";
import { NavLink } from "react-router-dom";
import support from "../../assets/img/cxo/support.svg";
import cxo from '../../assets/img/cxo/cxo.svg'

export default function Info() {
 
  return (
    <section className="details">
    <div className=" row content"  >
       <div className="col-lg-4 order-1 order-md-2">
        <img src={support} className="img-fluid " alt="opening" />
      </div>
      <div className="col-lg-8 order-2 order-md-1" >
        <h3>Program Overview</h3>
        <p>
          We at <strong>COOLAGE </strong>provide supporting interference to students through this
          program so that they can develop an actual mindset regarding their
          work of interest. It is our effort for developing an environment so
          that we can work together seamlessly with curious minds as a single
          body.
        </p>
        <p>
          We believe sharing is caring and to leverage this fact we are sharing
          an internship program in various streams and what about the lion’s
          share of responsibilities you will get by becoming the <strong>‘CXO for One
          Week’</strong>  in a particular stream.
        </p>
        <p>
          Isn’t that amazing handling you are commanding stuff by your own,
          making your own decisions, and flourishing the tasks in your own way?
          <br /> Definitely, it would be more rewarding than gaining knowledge
          because here you will develop the guts for applying in the real world.
          Lay the foundations for your journey towards building a great career
          in this challenging world of work with our Internship Program. <br />
        <strong> <NavLink to="/intern" target="_blank" rel="noopener noreferrer">
            Apply here
          </NavLink>{" "}
          and get a head start.</strong> 
        </p>
        <br/>
      </div>
      </div>
      <div className=" row content"  >
      <div className="col-lg-4 order-1 order-md-2">
        <img src={cxo} className="img-fluid " alt="opening" />
      </div>
      <div className="col-lg-8 order-2 order-md-1" style={{marginTop:"8%"}}>
        <h3>ABOUT ‘CXO for a Week’</h3>
        <p>
        <strong>‘CXO for a week’</strong>   is an extended feature of the internship program
          organized by COOLAGE to add real value to one’s career being a
          productive group of society. The diligent interns will get the
          opportunity to be the <strong>head of their departments </strong> of choice for one
          week. They will decide and implement to keep the flow of work
          streamlined with the glitter of their creativity. ‘CXO for a week’ is
          going to make its first drive with experienced drivers at COOLAGE. The
          only thing that is needed to let it complete its journey is your
          enthusiastic involvement and a thirst for the ride which would be
          rewarding no doubt.
        </p>
      </div>
      
    </div>
    </section>
  );
}
