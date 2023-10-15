import React from "react";
import aboutImg from "../assets/about.png";
import stat1 from "../assets/stats/01.png";
import stat2 from "../assets/stats/02.png";
import stat3 from "../assets/stats/03.png";
import stat4 from "../assets/stats/04.png";
function About() {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
          <div>
            <img src={aboutImg} alt="banner1" />
          </div>
          {/* about texts */}
          <div className="md:w-3/5">
            <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-neutralGrey text-sm mb-8 md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio
            </p>
            <button className="btn-register">Learn More</button>
          </div>
        </div>
      </div>
      {/* comapny stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                {" "}
                business reinvent itself
              </span>
            </h2>
            <p className="text-neutralGrey mb-8 md:w-3/4">
              We reached here with our hard work and dedication
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={stat1} alt="" />
                <div>
                  <h3 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h3>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={stat3} alt="" />
                <div>
                  <h3 className="text-2xl text-neutralDGrey font-semibold">
                    828,867
                  </h3>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={stat2} alt="" />
                <div>
                  <h3 className="text-2xl text-neutralDGrey font-semibold">
                    46,328
                  </h3>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={stat4} alt="" />
                <div>
                  <h3 className="text-2xl text-neutralDGrey font-semibold">
                    1,926,436
                  </h3>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
