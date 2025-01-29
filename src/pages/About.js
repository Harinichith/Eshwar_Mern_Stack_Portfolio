import React from "react";
import "./../styles/About.css"; // Ensure the CSS file path is correct
import aboutimg from "../assets/about.jpg"; // Corrected the import path for the image

const About = () => (
  <div className="about grid-container" data-aos="fade-up">
    {/* Left Section - Profile Picture */}
    <div className="about-profile">
      <div className="profile-image-container">
        <img
          src={aboutimg} // Use the imported image here
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>

    {/* Right Section - Interactive Content */}
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        I am a passionate full-stack developer and machine learning engineer with a strong focus on 
        creating innovative, scalable, and user-friendly solutions. I thrive on solving complex problems 
        and leveraging technology to make a meaningful impact. My expertise spans both front-end and 
        back-end development, alongside a deep understanding of machine learning principles to build 
        intelligent systems.
      </p>
      <button
        className="btn btn-outline-primary"
        onClick={() => window.open("/resume.pdf", "_blank")} // Adjust the path if needed
      >
        Download Resume
      </button>
    </div>
  </div>
);

export default About;
