import React, { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AlignCenter } from "lucide-react";
import { easeInOut, motion } from "framer-motion";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (showNav && navRef.current) {
      navRef.current.style.height = "max-content";
      navRef.current.style.visibility = "visible";
    } else if (!showNav && navRef.current) {
      navRef.current.style.height = "0px";
      navRef.current.style.visibility = "hidden";
    }
  }, [showNav, navRef]);

  useEffect(() => {
    setShowNav(false); // Close the mobile nav when the route changes
  }, [location]);

  return (
    <nav className="w-full bg-white flex justify-between md:py-3 fixed top-0 right-0 z-30 px-8 md:px-[60px] h-[4rem] md:h-max md:border-transparent items-center">
      <div>
        <img
          src="./assets/logo.svg"
          className="h-[2.5rem] md:h-full relative z-10"
          alt="logo"
        />
      </div>
      <ul
        ref={navRef}
        className={`fixed top-[4rem] md:top-0 w-full py-4 px-8 md:px-0 space-y-4 pb-6 md:pb-0 right-0 bg-white h-0 overflow-clip md:hidden items-center transition ease-in-out delay-150 duration-300`}
      >
        <li>
          <NavLink
            to="/"
            className={`px-0 py-3 md:btn ${
              location.pathname === "/" ? "text-purple font-bold" : ""
            }`}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`px-0 py-3 md:btn ${
              location.pathname === "/about" ? "text-purple font-bold" : ""
            }`}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={`px-0 py-3 md:btn ${
              location.pathname === "/booking" ? "text-purple font-bold" : ""
            }`}
          >
            BOOKING
          </NavLink>
        </li>
        <li>
          <a
            href="mailto:about@havillaconsults.com"
            className="btn text-white bg-gold mt-6"
          >
            CONTACT US
          </a>
        </li>
      </ul>
      <ul
        className={`hidden px-8 md:px-0 space-y-0 bg-white md:flex h-0 space-x-8 items-center`}
      >
        <li>
          <NavLink
            to="/"
            className={`px-0 py-3 md:btn ${
              location.pathname === "/" ? "text-purple font-bold" : ""
            }`}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={`px-0 py-3 md:btn ${
              location.pathname === "/about" ? "text-purple font-bold" : ""
            }`}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={`px-0 py-3 md:btn ${
              location.pathname === "/booking" ? "text-purple font-bold" : ""
            }`}
          >
            BOOKING
          </NavLink>
        </li>
        <li>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, ease: easeInOut, duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "#C3995D",
              border: "2px solid #C3995D",
            }}
            href="mailto:about@havillaconsults.com"
            className="btn text-white bg-gold font-semibold hover:shadow-lg border-2 border-transparent"
          >
            CONTACT US
          </motion.a>
        </li>
      </ul>
      <AlignCenter
        className="h-6 w-6 md:hidden"
        onClick={() => setShowNav((prev) => !prev)}
      />
    </nav>
  );
}

export default Navbar;
