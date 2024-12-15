import React from "react";
import ayat from "../assets/ayat.png"
import aniket from "../assets/aniket.jpg";

function ContactUs() {
  return (
    <div className="min-h-screen bg-black/50 backdrop-blur-[1px] flex flex-col items-center justify-center py-10 px-4 lg:px-20">
      <h1 className="text-4xl font-bold text-mystic mb-6">Contact Us</h1>
      <p className="text-lg text-gray-200 text-center max-w-2xl mb-10">
        Have questions or need support? Feel free to reach out to our developer team. We’re here to help!
      </p>


      {/* Team Member Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Sohail */}
        <div className="group bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src="https://ik.imagekit.io/luxswipe/version-2.0/sohail.jpg?updatedAt=1716403818469"
            alt="Sohail"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-mystic"
          />
          <h3 className="text-xl font-bold text-white mb-1">Sohail</h3>
          <p className="text-mystic text-sm font-semibold">Full Stack Developer & UI/UX</p>
        </div>

        {/* Vaidik */}
        <div className="group bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src="https://ik.imagekit.io/luxswipe/version-2.0/vaidik.jpeg?updatedAt=1716403787629"
            alt="Vaidik"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-mystic"
          />
          <h3 className="text-xl font-bold text-white mb-1">Vaidik</h3>
          <p className="text-mystic text-sm font-semibold">DevOps</p>
        </div>

        {/* Ayat */}
        <div className="group bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src={ayat} 
            alt="Ayat"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-mystic"
          />
          <h3 className="text-xl font-bold text-white mb-1">Ayat</h3>
          <p className="text-mystic text-sm font-semibold">Backend Developer</p>
        </div>

        {/* Aniket */}
        <div className="group bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src={aniket}
            alt="Aniket"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-mystic"
          />
          <h3 className="text-xl font-bold text-white mb-1">Aniket</h3>
          <p className="text-mystic text-sm font-semibold">Frontend Developer</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-black/50 border-1 mt-10 shadow-rose-900/40 border-mystic shadow-lg rounded-lg p-6 w-full lg:w-2/3 mb-10">
        <h2 className="text-2xl font-semibold text-gray-50 mb-4">Get in Touch</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-200">Developer Team</h3>
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:support@luxswipe.in" className="text-mystic hover:underline">
                support@luxswipe.in
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-200">Follow Us</h3>
            <p className="text-gray-400">
              Instagram:{" "}
              <a href="https://instagram.com/lux_swipe" className="text-mystic hover:underline">
                @lux_swipe
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
