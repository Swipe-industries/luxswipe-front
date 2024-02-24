import React from 'react'
import logo from "../assets/Group 2.svg";
import building from "../assets/Building.svg";
import location from "../assets/Location.svg";
import contact from "../assets/contact.svg";
import mail from "../assets/Mail.svg";
import phone from "../assets/Phone.svg";
import grp from "../assets/Frame 12.svg";

function Footer() {
  return (
    <div className=" flex flex-col mt-10  bg-contrast-1 bg-opacity-25 shadow-sm" >
    <div className="flex  mt-16 items-center justify-evenly   md:px-16" >
      <div><img className="md:h-[100px] mb-[60px] w-20" src={logo} alt="" /></div>
      <div className="hidden md:block mb-10" >
        About
        <div className="flex items-center " >
          <a href=""><img src={building} alt="" /></a>
          <p className="font-poppins py-3 text-[16px]" >Swipe Industries</p>
        </div>
        <div className="flex " >
          <a className="" href=""><img src={location} alt="" /></a>
          <p className="font-poppins text-[16px]" >Pbt By - Pass Road, MJPRU <br /> Bareilly, 243006, Uttar Pradesh</p>
        </div>
      </div  >
      <div>
      Contact
      <div className="flex items-center" >
        <a href=""><img src={contact} alt="" /></a>
        <p className="font-poppins py-2 text-[16px]" >Contact us</p>
      </div>
      <div className="flex items-center" >
        <a href=""><img src={mail} alt="" /></a>
        <p className="font-poppins text-[16px]" >hello@luxswipe.in</p>
      </div>
      <div className="flex items-center" >
        <a href=""><img src={phone} alt="" /></a>
        <p className="font-poppins py-2 text-[16px]" >+91 80575 66303</p>
      </div>
      <div>
        <a href=""><img src={grp} alt="" /></a>
      </div>
    </div>
     
      
     </div>
     <div className="flex mx-auto text-[12px] md:text-[20px] mt-6 mb-6" >
        <a className="  font-poppins text-[12px]" href="">© 2024 Swipe Industries Private Limited, All Rights Reserved</a>
      </div>
    </div>
  )
}

export default Footer
