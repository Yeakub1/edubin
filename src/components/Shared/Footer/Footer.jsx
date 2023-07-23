import React from "react";
import logo from "../../../assets/images/logo.png";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <>
        {/* component */}
        <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
                <p className="max-w-xs mt-4 text-sm text-gray-600 text-justify">
                  Gravida nibh vel velit auctor aliquetn quibibendum auci elit
                  cons equat ipsutis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate.
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                  <a
                    className="hover:opacity-75 w-6 h-6"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaFacebook />
                    </span>
                  </a>
                  <a
                    className="hover:opacity-75 w-6 h-6"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaInstagram />
                    </span>
                  </a>
                  <a
                    className="hover:opacity-75 w-6 h-6"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaTwitter />
                    </span>
                  </a>
                  <a
                    className="hover:opacity-75 w-6 h-6"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    className="hover:opacity-75 w-6 h-6"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="w-10 h-10">
                      <FaDribbble />
                    </span>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="font-medium">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      1on1 Coaching
                    </a>
                    <a className="hover:opacity-75" href="">
                      Company Review
                    </a>
                    <a className="hover:opacity-75" href="">
                      Accounts Review
                    </a>
                    <a className="hover:opacity-75" href="">
                      HR Consulting
                    </a>
                    <a className="hover:opacity-75" href="">
                      SEO Optimisation
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Helpful Links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      Contact
                    </a>
                    <a className="hover:opacity-75" href="">
                      FAQs
                    </a>
                    <a className="hover:opacity-75" href="">
                      Live Chat
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href="">
                      Privacy Policy
                    </a>
                    <a className="hover:opacity-75" href="">
                      Terms &amp; Conditions
                    </a>
                    <a className="hover:opacity-75" href="">
                      Returns Policy
                    </a>
                    <a className="hover:opacity-75" href="">
                      Accessibility
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-center text-gray-800">
              &copy; 2023 - All right reserved by Edubin
            </p>
          </div>
        </footer>
      </>
    </div>
  );
};

export default Footer;
