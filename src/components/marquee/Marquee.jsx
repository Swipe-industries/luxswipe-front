import React from "react";
import { motion } from "framer-motion";
import "./VerticalMarquee.css";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Marquee({ children }) {
  const navigate = useNavigate();

  // Define the number of repetitions
  const repetitionCount = 1; // Adjust as needed

  // Duplicate the children to create a continuous loop
  const repeatedChildren = React.Children.toArray(children).reduce(
    (acc, child) => {
      for (let i = 0; i < repetitionCount; i++) {
        acc.push(React.cloneElement(child, { key: `${i}-${child.key}` }));
      }
      return acc;
    },
    []
  );
  return (
    <>
      <div className="h-auto relative rounded-2xl p-10 mx-5  mb-5">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="text-center md:text-4xl text-2xl font-kalnia font-light text-white mb-10"
          >
            Get Your Storefront
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="mx-auto mb-10 text-contrast-3 flex items-center justify-center font-poppins rounded-2xl w-64 h-44 md:w-[500px] md:h-64 bg-contrast-3 bg-opacity-10 backdrop-blur-lg shadow-lg border border-contrast-1/50 hover:border-contrast-1"
          >
            <h6 className="mr-1 text-lg md:text-2xl">luxswipe.in/</h6>
            <div className="vertical-marquee w-24 h-28 md:h-40 scroll-smooth font-poppins tracking-tighter text-lg md:text-2xl">
              <div className="animate-marquee">
                {React.Children.toArray(children).map((child, index) => (
                  <div
                    key={index}
                    className="marquee-item"
                    style={{ top: `${index * 100}%` }}
                  >
                    {child}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center">
          <Button
            color="primary"
            variant="shadow"
            className="font-poppins text-white"
            size="lg"
            onClick={() => navigate("/auth/signup")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}

export default Marquee;
