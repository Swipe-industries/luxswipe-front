import React from "react";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

const LoadingState = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-[2px] flex flex-col items-center justify-center font-poppins">
      <motion.div
        className="bg-black text-white rounded-lg p-6 w-full max-w-md mx-4 shadow-lg  relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Loading...</h2>

        <div className="flex justify-center mt-8">
          <Spinner color="primary" size="lg" />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingState;
