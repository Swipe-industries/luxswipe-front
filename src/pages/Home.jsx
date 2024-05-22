import React from "react";
import { ImagesSlider } from "../components/hero-section/ImagesSlider";
import SwipeIndicator from "../components/hero-section/SwipeIndicator";
import { motion } from "framer-motion";
import Features from "../components/features-section/Features";
import Maqsad from "../components/how-it-works/Maqsad";
import Marquee from "../components/marquee/Marquee";


function Home() {
  const images = [
    "https://ik.imagekit.io/luxswipe/version-2.0/denim-jacket?updatedAt=1711687394315",
    "https://ik.imagekit.io/luxswipe/version-2.0/girl-with-hands-on-face?updatedAt=1711687565766",
    "https://ik.imagekit.io/luxswipe/version-2.0/girl-with-culry-hairs?updatedAt=1711687653267",
  ];

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
            Empowering Fashion Influencers To <br /> Showcase Their Style
          </motion.p>
          <div className="absolute bottom-0 mb-16">
            <SwipeIndicator />
          </div>
        </motion.div>
      </ImagesSlider>

      {/* Feature Section */}
      <div>
        <Features />
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
