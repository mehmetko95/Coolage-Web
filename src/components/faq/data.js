import React from "react";

export default class FAQList extends React.Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div class="container">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-head" id="headingOne">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What is Coolage ?
                </h2>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Coolage is your all in one gateway to stay Updated, Organized
                  and Connected to your College Life. It also provides you the
                  access to your hostels, mentors, canteens and your portal for
                  Buying and selling ,Lost & found things in the campus. For
                  more details, please visit our About Us page.{" "}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingTwo">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How do I download Coolage App?
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  The app can be easily downloaded via google playstore.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-head" id="headingThree">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  My app isn't working properly, Where to report that?
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  The app can be easily downloaded via google playstore.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingFour">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Can i be a mentor at Coolage ?
                </h2>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, just enter your field of expertise and you could help out
                  users looking out for guidance in that respective field.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingFive">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Does Coolage access personal files on my mobile?
                </h2>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  No,coolage doesnot comprise on data privacy and security. No
                  files or personal information is accessed without user's
                  consent.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingSix">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Can I add books, photos, or other document to Coolage for
                  other users to view?
                </h2>
              </div>
              <div
                id="collapseSix"
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, all the inputs from our users are always welcome
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingSeven">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  How do I interact with mentors in the field of my choice ?
                </h2>
              </div>
              <div
                id="collapseSeven"
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Follow these steps : Click on the mentors tab on home
                  screen>>click on the field of technology desired>>choose the
                  mentor profile to interact & connect with them to chat.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingEight">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Can I sell anything using Buy & Sell feature ?
                </h2>
              </div>
              <div
                id="collapseEight"
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, you can unless it does not violates the terms and
                  conditions for the buy & sell items.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingNine">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  How can I order food using Coolage ?
                </h2>
              </div>
              <div
                id="collapseNine"
                class="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Go to the Food Court tab >> Choose your desired canteen to
                  order from>>Select the desired food items >> Click on "View
                  Cart"to finalize your order and review the items & quantity >>
                  Choose the delivery address >> Select your desired p.ayment
                  confirmation gateway to place your order.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingTen">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  Can I join the Coolage team ?
                </h2>
              </div>
              <div
                id="collapseTen"
                class="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, go to "Join Us" tab and fill in the details,our team will
                  get back to you soon.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingEleven">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  Can I download pdfs and documents to view offline ?
                </h2>
              </div>
              <div
                id="collapseEleven"
                class="collapse"
                aria-labelledby="headingEleven"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, downloaded material can be viewed offline.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingTwelve">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  Can I apply for Hostel leave/Mess Off ?
                </h2>
              </div>
              <div
                id="collapseTwelve"
                class="collapse"
                aria-labelledby="headingTwelve"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, Coolage eases the hustle to regsiter your Hostel leave
                  and Mess off and do them online. Click on "Hostel" tab to
                  access these features online.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingThirteen">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThirteen"
                  aria-expanded="false"
                  aria-controls="collapseThirteen"
                >
                  Is there any reminder feature available for college events,
                  inductions and meetings.
                </h2>
              </div>
              <div
                id="collapseThirteen"
                class="collapse"
                aria-labelledby="headingThirteen"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Absolutely, using the Calendar feature you can easily figure
                  out the schedules for all meetings, inductions, exam dates and
                  college club events.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-head" id="headingFourteen">
                <h2
                  class="mb-0 collapsed"
                  data-toggle="collapse"
                  data-target="#collapseFourteen"
                  aria-expanded="false"
                  aria-controls="collapseFourteen"
                >
                  What is the contact feature for ?
                </h2>
              </div>
              <div
                id="collapseFourteen"
                class="collapse"
                aria-labelledby="headingFourteen"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  It provides you the contact details of Administration, faculty
                  and Wardens.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
