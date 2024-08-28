import React from "react";
import logo from "../../assets/Logo.svg";
import building from "../../assets/buildings-fill.svg";
import location from "../../assets/Location.svg";
import mail from "../../assets/Mail.svg";
import phone from "../../assets/Phone.svg";
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
        className={(`${username ? "hidden" : null} flex flex-col bg-mystic shadow-sm justify-center items-center w-full md:h-auto`)}
      >
        
        <div className="mt-auto flex pt-10">
          <div id="logo" className="mr-10 md:mr-0">
            <img className="w-20" src={logo} alt="company logo" />
          </div>

          <div id="about" className="mb-10 md:mx-10">
            <p className="text-xs font-poppins font-medium text-base-2 mb-1">About</p>

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
                Pbt By-Pass Road, MJPRU
                <br />
                Bareilly, 243006, Uttar Pradesh
              </p>
            </div>
          </div>

          <div id="contacts" className="mb-5 hidden md:block">
            <p className="text-xs font-poppins font-medium text-base-2 mb-1">Contacts</p>

            {/* <div className="flex items-center">
              <img className="scale-125" src={contact} alt="contact logo svg" />
              <p className="font-poppins text-sm text-base-1 ml-2">
                Contact us
              </p>
            </div> */}

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
              <Link to="https://www.linkedin.com/company/luxswipe/?viewAsMember=true">
                {" "}
                <img
                  className="hover:scale-110 scale-125"
                  src={linkedin}
                  alt="LinkedIn Logo"
                />
              </Link>
              <Link to="https://www.instagram.com/lux_swipe/">
                {" "}
                <img
                  className="px-2 hover:scale-110 scale-125"
                  src={instagram}
                  alt="Instagram logo"
                />
              </Link>
              <Link to="https://www.youtube.com/channel/UCpP2x2FLcrkOC4vcQVml-ZA">
                {" "}
                <img
                  className="hover:scale-110 scale-125 w-5"
                  src={youtube}
                  alt="YouTube Logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mx-auto text-xs font-medium md:text-sm mt-6 mb-6 font-poppins">
          <span>
            © 2024 Swipe Industries Private Limited, All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;

{
  /* <div className="container mx-auto flex flex-wrap justify-center my-5">
  {/*  Logo */
}
{/* <div className="footer-column mb-4 lg:w-1/4 lg:mb-10">
  <img src={logo} alt="Logo" className="lg:w-24 w-16" />
</div>; */}
{
  /* <!-- Navigation Links --> 
  <div className="footer-column mb-4 lg:w-1/4 lg:mb-0 mx-5">
    <ul className="text-center">
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          Home
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          About
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          Services
        </a>
      </li>
      <li className="mb-2">
        <a href="#" className="hover:text-gray-400">
          Contact
        </a>
      </li>
    </ul>
  </div>
  {/* <!-- Contact Info --> 
  <div className="footer-column mb-4 lg:w-1/4 lg:mb-0">
    <p className="text-center">123 Street Name</p>
    <p className="text-center">City, Country</p>
    <p className="text-center">Phone: 123-456-7890</p>
    <p className="text-center">Email: info@example.com</p>
  </div>
  {/* Social Links  
  <div className="footer-column lg:w-1/4 lg:hidden">
    <ul className="flex justify-center">
      <li className="mx-2">
        <a href="#" className="text-xl hover:text-gray-400">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li className="mx-2">
        <a href="#" className="text-xl hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="mx-2">
        <a href="#" className="text-xl hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
</div> */
}
