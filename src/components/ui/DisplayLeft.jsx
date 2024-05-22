import React from "react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

function DisplayRight({ headline, content, imgUrl, color }) {
  return (
    <>
      <div
        className={`h-auto relative border border-mystic rounded-2xl p-10 md:mx-36 mx-5 mt-20 mb-5 bg-${
          color ? color : null
        }/5 backdrop-blur-[1px]`}
      >
        <div className="flex flex-col md:flex-row justify-center md:gap-52 gap-8 md:mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: -0, transition: { duration: 1 } }}
            className="flex items-center justify-center"
          >
            <Image
              isZoomed
              alt="Team plannig work"
              className="object-cover"
              src={imgUrl}
              width={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            className=" font-kalnia text-3xl text-white font-light md:flex items-center justify-center gap-2 md:w-1/2"
          >
            <div className="text-center">
              <h1 className="mb-2 md:text-5xl text-4xl">{headline}</h1>
              <p className="md:text-lg text-base font-poppins">{content}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default DisplayRight;
