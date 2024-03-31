import React, { useState, useEffect} from "react";
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
    console.log(sidebarOpen);
  };

  const handleProfileClick = () => {
    if (userType === "Owner") {
      navigate("/Owner"); // Route to UserProfile2 for owner
    } else {
      navigate("/Manufacturer"); // Route to UserProfile1 for others
    }
  };

  return (
    <div className={`navbar1 ${scrolling ? "solid" : "transparent"}`}>
      <div className="left-section">
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
                        console.log(location.pathname);
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
      )}
    </div>
  );
}

export default Navbar;
