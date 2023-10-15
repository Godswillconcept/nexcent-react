import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import logo from "../assets/logo.png";

function CustomFooter() {
  return (
    <Footer bgDark className="px-20 rounded-none py-14">
      <div className="w-full px-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3 space-y-3 mb-10"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-gray-200 font-bold">NEXCENT</span>
            </a>
            <div>
              <p className="mb-7 text-gray-50">
                Copyright &copy; 2022 Nexcent Ltd
              </p>
              <p className="mb-7 text-gray-50">All rights reserved</p>
              <div className="w-full sm:flex sm:items-center sm:justify-between">
                <div className="mt-4 flex space-x-6 sm:mt-0  sm:justify-center">
                  <Footer.Icon
                    className="text-gray-50"
                    href="#"
                    icon={BsFacebook}
                  />
                  <Footer.Icon
                    className="text-gray-50"
                    href="#"
                    icon={BsInstagram}
                  />
                  <Footer.Icon
                    className="text-gray-50"
                    href="#"
                    icon={BsTwitter}
                  />
                  <Footer.Icon
                    className="text-gray-50"
                    href="#"
                    icon={BsGithub}
                  />
                  <Footer.Icon
                    className="text-gray-50"
                    href="#"
                    icon={BsDribbble}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="company" className="text-gray-50" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-gray-50" href="#">
                  About us
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Blog
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Contact us
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Pricing
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Testimonials
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-gray-50" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-gray-50" href="#">
                  Help Centre
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Terms of service
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Legal
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Privacy policy
                </Footer.Link>
                <Footer.Link className="text-gray-50" href="#">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Stay up to date" className="text-gray-50" />
              <form className="flex max-w-md flex-col gap-4">
                <div>
                  <TextInput
                    id="email"
                    placeholder="name@nexcent.com"
                    required
                    rightIcon={HiOutlinePaperAirplane}
                    type="email"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default CustomFooter;
