import React from "react";
import logo from "../assets/Logo.svg";
import building from "../assets/buildings-fill.svg";
import location from "../assets/Location.svg";
import contact from "../assets/contact.svg";
import mail from "../assets/Mail.svg";
import phone from "../assets/Phone.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

function Footer() {
  return (
    <>
      <div id="footer" className="flex flex-col mt-10 bg-contrast-1 bg-opacity-25 shadow-sm justify-center items-center w-full md:h-auto">
        <div className="mt-auto flex pt-10">
          <div id="logo" className="mr-10 md:mr-0">
            <img className="w-20" src={logo} alt="company logo" />
          </div>

          <div id="about" className="hidden md:block mb-10 md:mx-10">
            <p className="text-xs font-poppins text-base-3 mb-1">About</p>

            <div className="flex items-center">
              <img className="scale-125" src={building} alt="buildings logo" />
              <p className="font-poppins text-sm text-base-1 ml-2">
                Swipe Industries
              </p>
            </div>

            <div className="flex items-center">
              <img
                className="scale-125"
                src={location}
                alt="location pin logo"
              />
              <p className="font-poppins text-sm text-base-1 ml-2">
                Pbt By - Pass Road, MJPRU
                <br />
                Bareilly, 243006, Uttar Pradesh
              </p>
            </div>
          </div>

          <div id="contacts" className="mb-5">
            <p className="text-xs font-poppins text-base-3 mb-1">Contacts</p>

            <div className="flex items-center">
              <img className="scale-125" src={contact} alt="contact logo svg" />
              <p className="font-poppins text-sm text-base-1 ml-2">
                Contact us
              </p>
            </div>

            <div className="flex items-center">
              <img className="scale-125" src={mail} alt="mail logo svg" />
              <p className="font-poppins text-sm text-base-1 ml-2 my-1">
                hello@luxswipe.in
              </p>
            </div>

            <div className="flex items-center">
              <img className="scale-125" src={phone} alt="phone logo svg" />
              <p className="font-poppins py-2 text-sm text-base-1 ml-2">
                +91 80575 66303
              </p>
            </div>

            <div className="flex items-center my-2">
              <a href="https://www.linkedin.com/company/luxswipe/?viewAsMember=true">
                <img
                  className="hover:scale-110 scale-125"
                  src={linkedin}
                  alt="LinkedIn logo"
                />
              </a>
              <a href="https://www.instagram.com/lux_swipe/">
                <img
                  className="px-1 hover:scale-110 scale-125 mx-1"
                  src={instagram}
                  alt="Instagram logo"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCpP2x2FLcrkOC4vcQVml-ZA">
                <img
                  className="hover:scale-110 scale-125 w-5"
                  src={youtube}
                  alt="YouTube Logo"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex mx-auto text-xs md:text-sm mt-6 mb-6">
          <span>
            © 2024 Swipe Industries Private Limited, All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
