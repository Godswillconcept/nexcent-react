import React from "react";
import mobileLogin from "../assets/mobile-login.png";
import maecenas from "../assets/maecenas.png";
import company1 from "../assets/companies/01.png";
import company2 from "../assets/companies/02.png";
import company3 from "../assets/companies/03.png";
import company4 from "../assets/companies/04.png";
import company5 from "../assets/companies/05.png";
import company6 from "../assets/companies/06.png";

function Products() {
  return (
    <div id="product">
      {/* product text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
          <div>
            <img src={mobileLogin} alt="banner1" />
          </div>
          {/* product texts */}
          <div className="md:w-3/5">
            <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="text-neutralGrey text-sm mb-8 md:w-3/4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-register">Learn More</button>
          </div>
        </div>
      </div>
      {/* comapny stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver" id="testimonial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={maecenas} alt="" />
          </div>
          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div className="">
              <p className="text-neutralGrey md:w-4/5 text-sm mb-8 leading-6">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h4 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h4>
              <p className="text-neutralGrey text-base mb-8">
                British Dragon Boat Racing Association
              </p>
              <div className="">
                <div className="flex items-center gap-8 flex-wrap">
                  <img src={company1} alt="" className="currsor-pointer" />
                  <img src={company2} alt="" className="currsor-pointer" />
                  <img src={company3} alt="" className="currsor-pointer" />
                  <img src={company4} alt="" className="currsor-pointer" />
                  <img src={company5} alt="" className="currsor-pointer" />
                  <img src={company6} alt="" className="currsor-pointer" />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="text-brandPrimary font-bold hover:text-neutral-700"
                    >
                      Meet all customers{" "}
                      <svg
                        className="inline-block ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
