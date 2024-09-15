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
        className={(`${username ? "hidden" : null} flex flex-col bg-mystic shadow-sm items-center w-full md:h-auto`)}
      >

<div className="flex   flex-row-reverse lg:flex-col " >
<div className="mt-auto flex flex-col md:flex-row pt-10 justify-between">
  
  <div id="about" className="mb-10 ml-12 md:mr-0 space-y-2">
    <p className="text-xs font-poppins font-medium text-base-2 mb-1">Contact Us</p>
    <div className="flex items-center ">
      <img className="scale-125 space-y-3" src={mail} alt="mail logo svg" />
      <p className="font-poppins text-sm text-base-1 ml-2">
        hello@luxswipe.in
      </p>
    </div>
    <div className="flex items-center">
      <img className="scale-125" src={location} alt="location pin logo" />
      <p className="font-poppins text-sm text-base-1 ml-2">
        India
      </p>
    </div>
    <div className="flex items-center">
      <img className="scale-125" src={building} alt="building logo" />
      <p className="font-poppins text-sm text-base-1 ml-2">
        ONE Corp.
      </p>
    </div>


  </div>

  <div id="contacts" className="mb-5 hidden mr-64 md:block">
    <p className="text-xs font-poppins  font-medium text-base-2 mb-1 lg:ml-0">Follow Us On</p>
    <div className="flex items-center">
      <img className="scale-125" src={linkedin} alt="LinkedIn logo" />
      <p className="font-poppins text-sm text-base-1 ml-2 my-1">
        LinkedIn
      </p>
    </div>
    <div className="flex items-center">
      <img className="scale-125" src={instagram} alt="Instagram logo" />
      <p className="font-poppins text-sm text-base-1 ml-2 my-1">
        Instagram
      </p>
    </div>
    <div className="flex items-center">
      <img className="scale-125" src={youtube} alt="YouTube logo" />
      <p className="font-poppins text-sm text-base-1 ml-2 my-1">
        YouTube
      </p>
    </div>
  </div>
</div>

<div className="lg:border-b-1 lg:border-black mt-auto flex flex-col md:flex-row pt-10 lg:space-x-80">
  <div id="about" className="flex flex-col md:flex-row mb-3 md:mx-10 space-x-0 md:space-x-96">
    <div className="block items-center">
      <img className="w-20 justify-center " src={logo} alt="mail logo svg" />
      <p className="mt-3 w-20 font-kalnia m-auto text-center">LuxSwipe</p>
    </div>
  </div>

  <div id="contacts"  className="mb-2 hidden md:block">
    <p className="text-2xl font-kalnia font-medium text-base-2">
      Want to manage your links? <br />
      LuxSwipe is all you need. <br />
      Sign Up Now!
    </p>
  </div>
</div>
</div>



        <div className="flex mx-auto text-xs font-medium md:text-sm mt-6 mb-6 font-poppins">
          <span>
            © {new Date().getFullYear()} ONE Corp. Private Limited, All Right Reserved
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
