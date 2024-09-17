import React, { useState } from "react";
import { Button, Avatar } from "@nextui-org/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useSelector, useDispatch } from "react-redux";
import UserProfilePopup from "../ui/UserProfilePopup";
import authService from "../../services/firebase";
import { setAuthStatus } from "../../feature/authSlice";

function NavBar() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.authStatus);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const loggedInUser = authService.getAwsUser();
  if (loggedInUser?.uid) {
    dispatch(setAuthStatus(true));
  }

  return (
    <>
      <nav className="sticky top-0 z-40 w-full flex items-center justify-between px-4 py-2 md:px-20 text-white bg-black">
        {/* Left side - Company name */}
        <div className="flex items-center gap-2">
          <MobileMenu />
          <Link
            to="/"
            className="md:text-5xl text-4xl font-kalnia font-normal text-mystic"
          >
            LuxSwipe
          </Link>
        </div>

        {/* Center - Section links */}
        <div className="hidden relative md:flex py-2 px-5">
          {/* <div className="absolute inset-0 bg-black/10 rounded-full border border-white/50 backdrop-blur-sm" /> */}
          <div
            className={`${
              authStatus ? "hidden" : "flex"
            } relative justify-center items-center md:gap-12 gap-10`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-poppins text-base hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-mystic/50"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-poppins text-base hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-mystic/50"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `font-poppins text-base hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-mystic/50"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        {authStatus ? (
          <div className="hidden md:flex">
            <button onClick={() => setIsPopupOpen(true)}>
              <Avatar src={loggedInUser?.avatarUrl} alt="user avatar" />
            </button>
            <UserProfilePopup
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              isMobile={false}
              showLogoutBtn={true}
            />
          </div>
        ) : (
          <div className="hidden md:flex items-center">
            <Button
              color="primary"
              variant="light"
              className="font-semibold mx-2 font-poppins"
              size="sm"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </Button>

            <Button
              color="primary"
              className="font-poppins font-medium text-white"
              size="sm"
              onClick={() => navigate("/auth/signup")}
            >
              Sign Up
            </Button>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
