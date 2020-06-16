import React from "react";

export default class FAQList extends React.Component {
  render() {
    return (
      <div className="faq-list">
      <ul>
        <li data-aos="fade-up">
          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse" href="#faq-list-1">What is Coolage ?     <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
            <p>
            Coolage is your all in one gateway to stay Updated, Organized
                  and Connected to your College Life. It also provides you the
                  access to your hostels, mentors, canteens and your portal for
                  Buying and selling ,Lost & found things in the campus. For
                  more details, please visit our About Us page.              </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="100">
          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" className="collapsed"> How do I download Coolage App?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list-2" className="collapse" data-parent=".faq-list">
            <p>
           The app is in the beta version right now. You can Request Invite and we will contact you.
          </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="200">
          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Does Coolage access personal files on my mobile?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list-3" className="collapse" data-parent=".faq-list">
            <p>
            No, coolage does not compromises on data privacy and security. No
                  files or personal information is accessed without the user's
                  consent.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="300">
          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">My app isn't working properly, Where to report that?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list-4" className="collapse" data-parent=".faq-list">
            <p>
              Sorry to hear that,all the inputs from our users are always welcome you can report it in the contact us section.
            </p>
          </div>
        </li>

        <li data-aos="fade-up" data-aos-delay="400">
          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Can I join the Coolage team ?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
          <div id="faq-list-5" className="collapse" data-parent=".faq-list">
            <p>
            Yes, go to "Internships" tab and fill in the details,our team will
                  get back to you soon.            </p>
          </div>
        </li>

      </ul>
    </div>
    );
  }
}
