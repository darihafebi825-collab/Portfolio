import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <h3 className="about-subheading">
          Who is <span>Dariha?</span>
        </h3>

    <p className="about-description">
  I’m a passionate AI Product Developer focused on crafting web applications 
  with clean design and efficient code. Skilled in front-end, back-end, and 
  Machine Learning (OpenCV, Mediapipe). I blend technical precision with 
  creativity to build intelligent and visually engaging solutions.
</p>



        <div className="about-stats">
          
          <span className="highlight">Full Stack (Python)</span>
          <span className="highlight">Machine Learning(opencv,media pipe)</span>
        </div>
<a href="/resume/daruz.pdf" target="_blank" rel="noopener noreferrer">
  <button className="cv-btn">Preview CV</button>
</a>



      </div>
    </section>
  );
};

export default About;

