import React from "react";
import { ImagesSlider } from "../components/hero-section/ImagesSlider";
import SwipeIndicator from "../components/hero-section/SwipeIndicator";
import { motion } from "framer-motion";
import Features from "../components/features-section/Features";
import Mockup from "../components/mockup-section/Mockup";
import Maqsad from "../components/how-it-works/Maqsad";
import Marquee from "../components/marquee/Marquee";
import { useNavigate } from "react-router-dom";

function Home() {
  const images = [
    "https://ik.imagekit.io/luxswipe/version-2.0/creator.jpeg?updatedAt=1725657945130",
    "https://ik.imagekit.io/luxswipe/version-2.0/man-in-black.jpeg?updatedAt=1725657945981",
    "https://ik.imagekit.io/luxswipe/version-2.0/she-creator.jpeg?updatedAt=1725658368289",
  ];
  const navigate = useNavigate();

  return (
    <>
      {/* Image Slider Slide Show */}
      <ImagesSlider className="min-h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-kalnia font-normal text-2xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            "Link In Bio" <br />Microsite For Insta Creators
          </motion.p>
          <button onClick={() => navigate("/auth/signup")} className="px-4 py-2 backdrop-blur-sm border bg-mystic/10 border-pink-400/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Get Started →</span>
            <div className="absolute inset-x-0 font-poppins h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-pink-500 to-transparent" />
          </button>
          <div className="absolute bottom-0 mb-14">
            <SwipeIndicator />
          </div>
          
        </motion.div>
      </ImagesSlider>

      {/* Feature Section */}
      <div>
        <Features />
      </div>

      {/* Mockup Section */}
      <div>
        <Mockup />
      </div>

      {/* How it works section */}
      <div>
        <Maqsad />
      </div>

      {/* Marquee section     */}
      <div>
        <Marquee>
          <span>dennis</span>
          <span>emily</span>
          <span>vaidik</span>
          <span>leo</span>
          <span>aisha</span>
          <span>jin</span>
          <span>sohail</span>
          <span>vihaan</span>
          <span>zhang</span>
          <span>jisoo</span>
          <span>clark</span>
          <span>michael</span>
          <span>dennis</span>
          <span>emily</span>
          <span>vaidik</span>
          <span>leo</span>
          <span>aisha</span>
          <span>jin</span>
          <span>sohail</span>
          <span>vihaan</span>
          <span>zhang</span>
          <span>jisoo</span>
          <span>clark</span>
          <span>michael</span>
        </Marquee>
      </div>
    </>
  );
}

export default Home;
