import React, { useRef, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button, Avatar } from "@nextui-org/react";
import LogoutPopup from "./LogoutPopup";
import authService from "../../services/firebase";

const UserProfilePopup = ({
  isOpen,
  onClose,
  isMobile,
  showLogoutBtn,
}) => {
  const navigate = useNavigate();
  const urlRef = useRef(null);
  const popupRef = useRef(null);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);

  const userData  = authService.getAwsUser();
  
  const username = userData.username;
  const avatarSrc = "";
  const storeLink = `luxswipe.in/${username}`;

  const copyToClipboard = useCallback(() => {
    urlRef.current?.select();
    window.navigator.clipboard.writeText(storeLink);
  }, [storeLink]);

  const handleLogout = () => {
    setIsLogoutPopupOpen(true);
    onClose();
  };

  const handleVisit = () => {
    navigate(`/${username}`);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const popupVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <LogoutPopup isOpen={isLogoutPopupOpen} onClose={setIsLogoutPopupOpen} />
    <AnimatePresence>
      {isOpen && (
        <div
          className={`${
            !isMobile && "fixed inset-0 bg-black/25 backdrop-blur-[1px]"
          }`}
        >
          <motion.div
            ref={isMobile ? null : popupRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popupVariants}
            transition={{ duration: 0.2 }}
            className={`absolute font-poppins ${
              isMobile ? "inset-x-0 top-16 mx-4" : "right-4 top-16"
            } bg-black rounded-2xl shadow-lg p-4 z-50 border border-mystic`}
            style={{ width: isMobile ? "auto" : "400px" }}
          >
            <div className="flex items-center mb-4 justify-between pr-2">
              <div className="flex items-center">
                <Avatar src={avatarSrc} alt="" />
                <h2 className="ml-3 text-xl font-medium text-white">
                  {username}
                </h2>
              </div>
              <Button
                onClick={handleVisit}
                color="primary"
                size="sm"
                variant="ghost"
              >
                Visit
              </Button>
            </div>
            <div className="mb-4">
              <p className="text-sm text-white/90 mb-1 pl-1">Store</p>
              <div className="flex items-center py-1">
                <input
                  type="text"
                  value={storeLink}
                  readOnly
                  ref={urlRef}
                  className="flex-grow border-2 border-white rounded-lg py-2 px-2 mr-2 bg-black text-white text-sm overflow-hidden"
                />
                <Button
                  color="primary"
                  size="md"
                  onClick={copyToClipboard}
                  className="text-sm mr-2"
                >
                  Copy
                </Button>
              </div>
            </div>
            <div className="flex justify-between">
              {showLogoutBtn ? (
                <Button
                  color="danger"
                  variant="light"
                  onClick={handleLogout}
                  className="w-full font-medium"
                >
                  Log Out
                </Button>
              ) : null}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
    
  );
};

export default UserProfilePopup;
