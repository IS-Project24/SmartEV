import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();
  const userType = localStorage.getItem("userType");
  // const location="";

  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // console.log(sidebarOpen);
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
      {/* <div className={`navbar1 ${scrolling ? "solid" : "transparent"}`}> */}
      {/* <div className="left-section">
        <img src="./Media/kgp_logo.png" alt="Logo" className="logo" />
        <h1 className="navbar-content-heading" onClick={scrollToTop}>
          AI4ICPS
        </h1>
      </div>
      {isMobile && (
        <div className="menu-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      {isMobile ? (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="home" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="initiatives" spy={true} smooth={true} duration={500}>
                Initiatives
              </Link>
            </li>
            <li>
              <Link to="team" spy={true} smooth={true} duration={500}>
                Team
              </Link>
            </li>
            {!props.loginstatus && (
              <li>
                <button
                  onClick={() => {
                    props.setOpenModal(true);
                  }}
                >
                  Login
                </button>
              </li>
            )}
            {props.loginstatus && (
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <div className="right-section">
          <ul>
            {(!props.isLoggedIn || location.pathname === "/") && (
              <>
                <li>
                  <Link to="home" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} duration={700}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="initiatives"
                    spy={true}
                    smooth={true}
                    duration={700}
                  >
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link to="advantages" spy={true} smooth={true} duration={500}>
                    Advantages
                  </Link>
                </li>
                <li>
                  <Link to="track" spy={true} smooth={true} duration={500}>
                    Track
                  </Link>
                </li>
              </>
            )}

            {!props.isLoggedIn && (
              <li>
                <button
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
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
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
                  <button onClick={handleProfileClick}>My Profile</button>
                </li>
              </>
            )}
          </ul>
        </div>
      )} */}

      <div
        class="navbar1 ${scrolling ? 'solid' : 'transparent'}"
        style={{ scrollBehavior: "smooth" }}
      >
        <div class="">
          <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0"
            style={{ scrollBehavior: "smooth" }}
          >
            <Link
              to=""
              class="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img
              class="h-8"
              src="./Media/kgp_logo.png"
              alt="Logo"
              className="logo"
            /> */}
              {/* <h1 className="navbar-content-heading" onClick={scrollToTop}>
              AI4ICPS
            </h1> */}
              <span className="footer-main-heading material-symbols-outlined">
                satellite_alt
              </span>
              <p className="navbar-content-heading" onClick={scrollToTop}>
                SmartEV
              </p>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              class="hidden w-full md:block md:w-auto"
              id="navbar-default"
              style={{ scrollBehavior: "smooth" }}
            >
              <ul
                class="cursor-pointer font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  "
                style={{ scrollBehavior: "smooth" }}
              >
                {(!props.isLoggedIn || location.pathname === "/") && (
                  <>
                    <li>
                      <Link
                        to="home"
                        class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        aria-current="page"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="initiatives"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        style={{ scrollBehavior: "smooth" }}
                      >
                        Initiatives
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="advantages"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Advantages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="track"
                        class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Track
                      </Link>
                    </li>
                  </>
                )}
                {!props.isLoggedIn && (
                  <li>
                    <button
                      class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                          class="block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Home
                        </button>
                      </li>
                      <li>
                        <button
                          class="block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                        class="block py-2 px-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
