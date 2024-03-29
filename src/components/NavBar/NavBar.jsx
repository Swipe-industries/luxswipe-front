import { Button } from "@nextui-org/react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 z-50 w-full flex items-center justify-between px-4 py-2 lg:px-40 text-white">
        {/* Left side - Company name */}
        <div className="flex items-center">
          <Link
            to="/"
            className="lg:text-5xl text-3xl font-kalnia font-normal text-mystic"
          >
            LuxSwipe
          </Link>
        </div>

        {/* Center - Section links */}
        <div className="hidden relative lg:flex py-2 px-5">
          <div className="absolute inset-0 bg-black/10 rounded-full border border-white/50 backdrop-blur-sm" />
          <div className="relative flex justify-center items-center gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-poppins text-sm hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-poppins text-sm hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `font-poppins text-sm hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-white"
                }`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `font-poppins text-sm hover:text-mystic duration-200 ${
                  isActive ? "text-mystic" : "text-white"
                }`
              }
            >
              FAQs
            </NavLink>
          </div>
        </div>

        {/* Right side - Login and Signup buttons */}
        <div className="flex items-center">
          <Button
            color="primary"
            variant="light"
            className="font-semibold mx-2 font-poppins"
            size="sm"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            variant="flat"
            className="font-poppins font-medium bg-mystic text-white"
            size="sm"
            onClick={() => navigate("signup")}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;