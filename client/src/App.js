import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Home from "./components/LandingPage/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginSignup/Login";
import UserProfile2 from "./components/UserProfile/UserProfile2";
import MfPage from "./components/MfPage/MfPage";
import Readytrack from "./components/Readytrack/Readytrack";
import Adaptiveplatform from "./components/Adaptiveplatform/Adaptiveplatform";
import Platformadvantage from "./components/Platformadvantage/Platformadvantage";
import Contact from "./components/Contact/Contact";
import PrivateRoutes from "./utils/PrivateRoutes";
import Career from "./components/Careers/Career";
import Faqs from "./components/Faqs/Faqs";
import Notfound from "./components/NotFound/Notfound";

function App() {
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const toggleModal = () => {
    setModal((prev) => {
      return !prev;
    });
  };

  const toggleLogstat = () => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  };

  // toast
  const notifysuccess = (c) => {
    toast.success(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };
  const notifyerror = (c) => {
    toast.error(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };

  return (
    <Router>
      <>
        <Navbar
          setOpenModal={toggleModal}
          setLogstat={toggleLogstat}
          isLoggedIn={isLoggedIn}
          notifyerror={notifyerror}
          notifysuccess={notifysuccess}
        />
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="initiatives">
                  <Adaptiveplatform />
                </div>
                <div id="advantages">
                  <Platformadvantage />
                </div>
                <div id="track">
                  <Readytrack />
                </div>
                {/* <div id="career">
                  <Career />
                </div>
                <div id="faqs">
                  <Faqs />
                </div> */}
                <Footer />
              </>
            }
          />
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
             <Route element={<UserProfile2 />} path="/Owner" exact />
              <Route element={<MfPage />} path="/Manufacturer" exact />
          </Route>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {modal && (
          <Login
            setOpenModal={toggleModal}
            setLogstat={toggleLogstat}
            notifysuccess={notifysuccess}
            notifyerror={notifyerror}
          />
        )}
      </>
    </Router>
  );
}

export default App;
