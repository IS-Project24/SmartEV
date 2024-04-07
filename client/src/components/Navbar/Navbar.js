import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

import IITLogo from "../../Media/image.png";
// import AicpsLogo from "../../Media/image.png";

function Navbar(props) {
  const location = useLocation();
  const userType = localStorage.getItem("userType");
  // const location="";

  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  

  const handleProfileClick = () => {
    if (userType === "Owner") {
      navigate("/Owner"); // Route to UserProfile2 for owner
    } else {
      navigate("/Manufacturer"); // Route to UserProfile1 for others
    }
  };

  return (
    <>
      <div className={`navbar1 ${scrolling ? "solid" : "transparent"}`}>
        <div className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
            <Link
              to=""
              className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={IITLogo} alt="Logo" className="logo" />
              {/* <h1 className="navbar-content-heading" onClick={scrollToTop}>
              AI4ICPS
            </h1> */}
              {/* <span className="footer-main-heading material-symbols-outlined">
                satellite_alt
              </span> */}
              <p className="navbar-content-heading" onClick={scrollToTop}>
                SmartEV
              </p>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="cursor-pointer font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                {(!props.isLoggedIn || location.pathname === "/") && (
                  <>
                    <li>
                      <Link
                        to="home"
                        className="block py-2 px-3 text-white rounded md:hover:text-blue-700 md:bg-transparent md:p-0 dark:text-white"
                        aria-current="page"
                        smooth={true}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        smooth={true}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="initiatives"
                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        smooth={true}
                      >
                        Initiatives
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="advantages"
                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        smooth={true}
                      >
                        Advantages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="track"
                        smooth={true}
                        className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Track
                      </Link>
                    </li>
                  </>
                )}
                {!props.isLoggedIn && (
                  <li>
                    <button
                      className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      onClick={() => {
                        props.setOpenModal(true);
                      }}
                    >
                      Login
                    </button>
                  </li>
                )}
                {props.isLoggedIn &&
                  (location.pathname === "/Owner" ||
                    location.pathname === "/Manufacturer") && (
                    <>
                      <li>
                        <button
                          onClick={() => {
                            navigate("/");
                          }}
                          className="block py-2 px-5 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Home
                        </button>
                      </li>
                      <li>
                        <button
                          className="block py-2 px-5 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          onClick={() => {
                            navigate("/");
                            localStorage.removeItem("authToken");
                            localStorage.removeItem("isLoggedIn");
                            props.setLogstat();
                            props.notifysuccess("Successfully Logged out");
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                {props.isLoggedIn && location.pathname === "/" && (
                  <>
                    <li>
                      <button
                        className="block py-2 px-5 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        onClick={handleProfileClick}
                      >
                        My Profile
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;
