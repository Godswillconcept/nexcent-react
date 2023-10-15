import React from "react";

function Newsletter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="newsletter">
      <div className="flex items-center justify-center lg:w-2/4 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl font-semibold mb-6 lg:leading-snug text-neutral-800">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-register">
              Get a Demo{" "}
              <svg
                className="inline-block ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
