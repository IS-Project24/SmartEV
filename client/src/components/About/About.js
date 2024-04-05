import React,{useEffect} from 'react';
import "./About.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../../Media/about3.jpeg";

function About() {

    useEffect(() => {
      AOS.init({
      });
    }, []);
    return (
      <div className="about-page">
        <h1 className="about-heading">
          Transforming the distributed EVs industries with IoT and AI
        </h1>
        <p className="about-content ">
          Revolutionize your Electric Vehicle monitoring service with IoT and
          AI, delivering real-time insights for optimized performance and
          enhanced user experience. Leverage advanced technology to bridge
          communication gaps, empower your workforce, and ensure transparency in
          your EV operations.
        </p>
        <img className="image-about" src={aboutImage} alt="About" />
      </div>
    );
}

export default About;

