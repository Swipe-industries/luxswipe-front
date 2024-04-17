import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

const SuccessPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.error);
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
          <div className="bg-green-100 bg-opacity-10 backdrop-blur-md shadow-lg text-green-500 rounded-lg px-5 py-3 max-w-xl mx-auto">
            <div className="flex items-center justify-between">
              <p className="text-center font-poppins font-semibold">✓ {message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessPopup;