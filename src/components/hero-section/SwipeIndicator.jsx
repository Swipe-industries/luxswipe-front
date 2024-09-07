import React from "react";
import { motion } from "framer-motion";

const SwipeIndicator = () => {
  return (
    <motion.section
      className="demo relative w-full h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.span
        className="absolute bottom-20 left-1/2 z-10 -translate-x-4 inline-block hover:opacity-50"
        animate={{
          opacity: [1, 0.5, 1],
          transition: { duration: 1.5, repeat: Infinity, delay: 0.1 },
        }}
      >
        {/* <p className="font-poppins text-xs text-mystic font-semibold">Explore</p> */}
        <motion.span
          className="z-0 block w-6 h-6 border-t-2 translate-x-2 border-l-2 border-mystic -rotate-[135deg]"
          whileHover={{ opacity: 0.5 }}
          animate={{
            opacity: [1, 0.5],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        ></motion.span>
        <motion.span
          className="z-10 -my-4 block w-6 h-6 border-t-2 translate-x-2 border-l-2 border-mystic -rotate-[135deg]"
          whileHover={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        ></motion.span>
        <motion.span
          className="z-20 block w-6 h-6 border-t-2 translate-x-2 border-l-2 border-mystic -rotate-[135deg]"
          whileHover={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        ></motion.span>
      </motion.span>
    </motion.section>
  );
};

export default SwipeIndicator;
