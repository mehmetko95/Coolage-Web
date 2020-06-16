import React from "react";
import { NavLink } from "react-router-dom";

export default class FAQCXO extends React.Component {
  render() {
    return (
      <div className="faq-list">
        <ul>
          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" className="collapse" href="#faq-1">
              What are the departments in which I can apply?{" "}
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-1" className="collapse show" data-parent=".faq-list">
              <p>
                1. Artificial Intelligence <br />
                2. Product Design/ Management
                <br />
                3. Web/App Development
                <br />
                4. UX Designer
                <br />
                5. Graphic designer/ video animation
                <br />
                6. Content Writing
                <br />
                7. HR
                <br />
                8. Digital Marketing/ Social Media Marketing
                <br />
                9. Market Research/ Business development
                <br />
              </p>
            </div>
          </li>
          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-10" className="collapsed">
              {" "}
              What is CXO?<i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-10" className="collapse" data-parent=".faq-list">
              <p>
              CXO comprises of all the executive positions like CEO, CMO, CTO, CBO & more.
              </p>
            </div>
          </li>
          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-2" className="collapsed">
              {" "}
              How do I apply?<i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-2" className="collapse" data-parent=".faq-list">
              <p>
                To apply for this internship click the following link.
                <NavLink to="/intern">Internships at Coolage</NavLink>
              </p>
            </div>
          </li>

          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-3" className="collapsed">
              What are the incentives will I get?
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-3" className="collapse" data-parent=".faq-list">
              <p>
                - Certificate of Excellence for internship
                <br />
                - Certificate of honour for ‘Be a CEO’ <br />
                - You will be featured for appreciation on our social media and
                website
                <br />
                - Free resources
                <br />
                - Letter of Recommendation
                <br />
                - Future opportunities at the company
                <br />
              </p>
            </div>
          </li>
          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-8" className="collapsed">
              How this internship is beneficial for me?
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-8" className="collapse" data-parent=".faq-list">
              <p>
                You will get the following benefits: - valuable work experience{" "}
                <br />
                - This isn't just an internship, it's a chance to be CEO <br />
                - Opportunity to be our Campus Head i.e CCD <br />
                - Experience of our work culture <br />
                - Startup environment exposure <br />- To learn leadership and
                decision making in action
              </p>
            </div>
          </li>
          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-4" className="collapsed">
              Is it a Work from home internship?
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-4" className="collapse" data-parent=".faq-list">
              <p>
                Yes. It is a work from home internship with flexible working
                hours.
              </p>
            </div>
          </li>

          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-5" className="collapsed">
              What is the duration of this internship?
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-5" className="collapse" data-parent=".faq-list">
              <p>The duration of this internship is 1-2 Months.</p>
            </div>
          </li>

          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-6" className="collapsed">
              How would I get selected to become ‘CXO for one week’?
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-6" className="collapse" data-parent=".faq-list">
              <p>
                After being selected as an intern you will be selected to become
                the “CXO for one week” based on your previous week’s performance
                with your dedication level and leadership skills. For the next
                week again new selections will be done and this cycle will
                continue during the whole internship period [ in this way every
                intern will get a fair chance to prove themselves.]
              </p>
            </div>
          </li>
          <li>
            <i className="bx bx-help-circle icon-help"></i>{" "}
            <a data-toggle="collapse" href="#faq-list-7" className="collapsed">
              Can I become ‘CXO for One Week’ multiple times?
              <i className="bx bx-chevron-down icon-show"></i>
              <i className="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-7" className="collapse" data-parent=".faq-list">
              <p>
                Yes. It is all up to your performance of the previous week. So
                if you would be competent enough to crack the selection process
                of multiple weeks (which we are expecting) then yes you can
                become the ‘CXO for One Week’ again.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
