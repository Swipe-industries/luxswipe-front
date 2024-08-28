import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';

const ErrorPopup = ({ isOpen, onClose }) => {
  const message = useSelector((state) => state.auth.error);
  const autoCloseDelay = 2000;

  useEffect(() => {
    let timer;

    if (isOpen && autoCloseDelay) {
      timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, autoCloseDelay, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 p-4"
        >
          <div className="bg-mystic bg-opacity-10 backdrop-blur-md shadow-lg text-red-500 rounded-lg px-5 py-3 max-w-xl mx-auto">
            <div className="flex items-center justify-between">
              <p className="text-center font-poppins font-semibold">ⓘ {message}</p>
              {/* <button
                type="button"
                onClick={onClose}
                className="text-white hover:text-red-200 focus:outline-none ml-4"
              >
                <svg
                  className="h-6 w-6 fill-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorPopup;