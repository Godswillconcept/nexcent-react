import React from "react";
import company1 from "../assets/companies/01.png";
import company2 from "../assets/companies/02.png";
import company3 from "../assets/companies/03.png";
import company4 from "../assets/companies/04.png";
import company5 from "../assets/companies/05.png";
import company6 from "../assets/companies/06.png";
import service1 from "../assets/services/01.png";
import service2 from "../assets/services/02.png";
import service3 from "../assets/services/03.png";

function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: service1,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: service2,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: service3,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 ">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logos */}
        <div className="flex flex-wrap justify-around items-center my-12">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
          <img src={company3} alt="" />
        </div>
      </div>
      {/* services */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 ">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      {/* services cards */}
      <div className="service-card-layout">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="">
              <div className="service-icon">
                <img src={service.image} className="ml-5" />
              </div>
              <h4 className="text-2xl font-bold mx-auto text-neutralDGrey w-4/5 mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
