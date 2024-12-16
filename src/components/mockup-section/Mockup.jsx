import React from "react";
import { motion } from "framer-motion";
import mockup from "../../assets/mockup.png";

const Mockup = () => {
  return (
    <div className="bg-gradient-to-b from-rose-300 to-rose-200 py-20 rounded-xl m-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Text and Description */}
        <div className="text-center md:text-left md:mr-16 px-4">
          <h2 className="text-3xl md:text-4xl font-kalnia text-rose-950 mb-6 leading-snug">
            Streamlined & Professional Profile
          </h2>
          <p className="text-base-1 text-lg md:text-xl leading-relaxed max-w-lg mb-12">
            Effortlessly manage all your links, curate posts, and showcase your favorite collections in one clean, professional space.
          </p>
        </div>

        {/* Mockup Image with Concentric Circles */}
        <div className="relative w-full md:w-[400px] h-auto md:h-[400px] mx-auto">
          {/* Concentric Circles */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-full h-full rounded-full border-[30px] border-rose-400 absolute opacity-50 scale-90"></div>
            <div className="w-3/4 h-3/4 rounded-full border-[30px] border-rose-300 absolute opacity-50 scale-95"></div>
            <div className="w-1/2 h-1/2 rounded-full border-[30px] border-rose-200 absolute opacity-50"></div>
          </div>

          {/* Mockup Image with Framer Motion */}
          <motion.img
            src={mockup}
            alt="Mockup"
            className="relative z-10 drop-shadow-lg mx-auto w-full h-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Mockup;
