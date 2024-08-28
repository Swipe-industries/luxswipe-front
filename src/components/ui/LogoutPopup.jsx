import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../feature/authSlice.js";
import authService from "../../services/firebase.js";
import { Button } from "@nextui-org/react";

const LogoutPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    dispatch(clearUser());
    navigate("/");
    onClose(false);
  };

  const swingAnimation = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [10, -10, 5, -5, 0],
      transition: { duration: 2, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" },
    },
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-[1px] flex items-center justify-center font-poppins"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-black text-white rounded-lg p-6 w-full max-w-md h-72 mx-4 shadow-lg border border-mystic relative"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center">Log out</h2>
        <p className="text-center mb-16">Are you sure you want to log out?</p>

        <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-16">
          {/* <div className="w-1 h-8 bg-gray-400 rounded-full"></div> */}
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={swingAnimation}
            style={{ transformOrigin: "top center" }}
          >
            <div className="w-0.5 h-12 bg-mystic mx-auto"></div>
            <div className="bg-mystic/20 px-6 py-3 rounded border border-pink-500 text-center shadow-lg">
              <span className="text-sm block">WE'RE</span>
              <span className="text-xl font-medium">CLOSE</span>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between mt-8 translate-y-16">
          <Button
            color="primary"
            variant="flat"
            onClick={() => onClose(false)}
            className="font-semibold"
          >
            Cancel
          </Button>
          <Button color="danger" onClick={handleLogout}>
            OK
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoutPopup;