import React from "react";
import "./Home.css";
import Img from "../../Images/dari.png";  //img import line
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span>Dariha.A</span>
        </h1>
        <p className="home-tagline">A Passionate AI Product Developer</p>
        <Link to="/projects" className="home-btn">
  View My Work
</Link>
      </div>
{/* img */}
      <div className="home-image">
        <img src={Img} alt="Dariha" className="home-img" />
      </div>
    </section>
    
  );
};

export default Home;
