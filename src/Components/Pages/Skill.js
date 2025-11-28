import React, { useRef } from "react";
import "./Skill.css";
import pythonImg from "../../Images/python.jpg";
import djangoImg from "../../Images/django.jpg";
import flaskImg from "../../Images/flask.jpg";
import figmaImg from "../../Images/figma.jpg";
import mediapipeImg from "../../Images/mediapipe.png";
import opencvImg from "../../Images/opencv.png";
import htmlImg from "../../Images/html.png";
import cssImg from "../../Images/css.png";
import jsImg from "../../Images/js.png";
import reactImg from "../../Images/react.png";
import bootImg from "../../Images/boot.png";
import sqliteImg from "../../Images/sqlite.png";

const skills = [
  { name: "Python", img: pythonImg },
  { name: "Django", img: djangoImg },
  { name: "Flask", img: flaskImg },
  { name: "Figma", img: figmaImg },
  { name: "MediaPipe", img: mediapipeImg },
  { name: "OpenCV", img: opencvImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "React", img: reactImg },
  { name: "Bootstrap", img: bootImg },
  { name: "SQLite", img: sqliteImg },
];

const Skill = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="skill-section">
      <h2 className="skill-title">Skills</h2>

      <button className="nav-btn left" onClick={() => scroll("left")}>❮</button>
      <button className="nav-btn right" onClick={() => scroll("right")}>❯</button>

      <div className="skill-strip" ref={scrollRef}>
        {skills.map((skill, i) => (
          <div key={i} className="skill-mini">
            <div className="icon-3d">
              <img src={skill.img} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;




