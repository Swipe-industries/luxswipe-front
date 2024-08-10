import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  const lineVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const menuItemVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const MenuItem = ({ to, textColor, children }) => (
    <motion.div variants={menuItemVariants} whileHover="hover">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-poppins text-xl ${isActive ? "text-mystic" : textColor}`
        }
        onClick={toggleMenu}
      >
        {children}
      </NavLink>
    </motion.div>
  );

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="z-50 relative">
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-0.5 bg-mystic mb-2" // Increased gap between lines
          variants={lineVariants}
        />
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-0.5 bg-mystic"
          variants={{
            closed: { rotate: 0 },
            open: { rotate: -45, y: -10 }, // Adjusted y value for the increased gap
          }}
        />
      </button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
      >
        <div className="flex flex-col items-start justify-center h-full pl-8 gap-y-4">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/contact-us">Contact Us</MenuItem>
          <MenuItem to="/auth/login" textColor="text-blue-500">Login</MenuItem>
          <MenuItem to="/auth/signup" textColor="text-blue-500">Sign Up</MenuItem>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
