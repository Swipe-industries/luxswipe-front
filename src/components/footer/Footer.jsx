import React from "react";
import logo from "../../assets/Logo.svg";
import building from "../../assets/buildings-fill.svg";
import location from "../../assets/Location.svg";
import mail from "../../assets/Mail.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Footer() {
  const { username } = useParams();
  return (
    <>
      <div
        id="footer"
        className={(`${username ? "hidden" : null} flex flex-col bg-mystic shadow-sm items-center w-full md:h-auto`)}
      >

        <div className="flex flex-row-reverse lg:flex-col">
          <div className="mt-16 flex flex-col md:flex-row justify-between">

            <div id="about" className="ml-12 md:mr-0 space-y-2">
              <p className="text-xs font-poppins font-medium text-base-2 mb-1">Contact Us</p>
              <div className="flex items-center pl-1 ">
                <img className="scale-125 space-y-3" src={mail} alt="mail logo svg" />
                <p className="font-poppins text-sm text-black ml-2">
                  hello@luxswipe.in
                </p>
              </div>
              <div className="flex items-center pl-1">
                <img className="scale-125" src={location} alt="location pin logo" />
                <p className="font-poppins text-sm text-black ml-2">
                  India
                </p>
              </div>
              <div className="flex items-center pl-1">
                <img className="scale-125" src={building} alt="building logo" />
                <p className="font-poppins text-sm text-black ml-2">
                  ONE Corp.
                </p>
              </div>
            </div>

            <div id="contacts" className="hidden mr-64 md:block space-y-1">
              <p className="text-xs font-poppins  font-medium text-base-2 mb-2 lg:ml-0">Follow Us On</p>
              <div className="flex items-center pl-1">
                <Link className="flex" to="https://www.linkedin.com/company/luxswipe/?viewAsMember=true">
                  <img
                    className="scale-125"
                    src={linkedin}
                    alt="LinkedIn Logo"
                  />
                  <p className="font-poppins text-sm text-black ml-2 my-1">
                    LinkedIn
                  </p>
                </Link>
              </div>
              <div className="flex items-center pl-1">
                <Link className="flex" to="https://www.instagram.com/lux_swipe/">
                  <img
                    className="scale-125"
                    src={instagram}
                    alt="Instagram logo"
                  />
                  <p className="font-poppins text-sm text-black ml-2 my-1">
                    Instagram
                  </p>
                </Link>
              </div>
              <div className="flex items-center pl-1">
                <Link className="flex" to="https://www.youtube.com/channel/UCpP2x2FLcrkOC4vcQVml-ZA">
                  <img
                    className="scale-125 w-5"
                    src={youtube}
                    alt="YouTube Logo"
                  />
                </Link>
                <p className="font-poppins text-sm text-black ml-2 my-1">
                  YouTube
                </p>
              </div>
            </div>
          </div>

          <div className="lg:border-b-1 lg:border-black mt-auto flex flex-col md:flex-row pt-10 lg:space-x-80 mr-5">
            <div id="about" className="flex flex-col md:flex-row mb-3 md:mx-10 space-x-0 md:space-x-96">
              <div className="block items-center ml-2">
                <img className="w-24 justify-center" src={logo} alt="company logo svg" />
                <p className="mt-3 font-kalnia text-black text-xl m-auto text-center">LuxSwipe</p>
              </div>
            </div>

            <div id="contacts" className="mb-2 hidden md:block">
              <p className="text-2xl font-poppins font-medium text-black">
                Want to manage your links? <br />
                LuxSwipe is all you need. <br />
                Sign Up Now!
              </p>
            </div>
          </div>
        </div>

        <div className="flex mx-auto text-xs font-medium md:text-sm mt-6 mb-6 font-poppins">
          <span>
            © {new Date().getFullYear()} ONE Corp. Private Limited, All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
