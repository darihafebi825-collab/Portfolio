import React from "react";
import "./Education.css";

import vicImg from "../../Images/vic.png";
import aruImg from "../../Images/aru.png";
import alagappaImg from "../../Images/alagappa.png";
import noorulImg from "../../Images/noorul.png";

const education = [
  {
    level: "High School",
    year: "2010 - 2019",
    institute: "Victory Matric Higher Sec School, Mylode",
    img: vicImg,
    url: "https://r.search.yahoo.com/_ylt=Awrx_RATdSBpMQIAF1K7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1764944404/RO=10/RU=https%3a%2f%2fwww.victorymatricschool.edu.in%2f/RK=2/RS=rssQfvDgcD9MgWhk35h0dj4rZl0-", // 🔗 official link
  },
  {
    level: "Higher Secondary",
    year: "2020 - 2021",
    institute: "Victory Matric Higher Sec School, Mylode",
    img: vicImg,
    url: "https://r.search.yahoo.com/_ylt=Awrx_RATdSBpMQIAF1K7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1764944404/RO=10/RU=https%3a%2f%2fwww.victorymatricschool.edu.in%2f/RK=2/RS=rssQfvDgcD9MgWhk35h0dj4rZl0-",
  },
  {
    level: "UG (B.E - CSE)",
    year: "2021 - 2025",
    institute: "Arunachala College of Engineering for Women [Anna University]",
    img: aruImg,
    url: "https://r.search.yahoo.com/_ylt=AwrKCUxidSBpAQIAh2m7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1764944482/RO=10/RU=https%3a%2f%2fwww.arunachalacollege.com%2f/RK=2/RS=x0Iciqjm3DhpYqzmo7Y_JtgRqJA-",
  },
  {
    level: "UG (B.A - English)",
    year: "2022 - 2025",
    institute: "Alagappa University",
    img: alagappaImg,
    url: "https://r.search.yahoo.com/_ylt=AwrKFa2CdSBpGgIAn.K7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1764944515/RO=10/RU=https%3a%2f%2falagappauniversity.ac.in%2f/RK=2/RS=DsXW1Jt7NsHCOcD6Ikr8KtHo3Ac-",
  },
  {
    level: "PG (M.E - CSE)",
    year: "2025 - 2027",
    institute: "Noorul Islam College of Higher Education",
    img: noorulImg,
    url: "https://r.search.yahoo.com/_ylt=AwrKGGuvdSBpQAIAj7u7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1764944560/RO=10/RU=https%3a%2f%2fwww.niuniv.com%2f/RK=2/RS=5.Qyo8k3lU3dNaaQQ5nuobmmtHE-", 
  },
];

const Education = () => {
  return (
    <div className="roadmap-wrapper">
      <h1>My Education</h1>
      <div className="roadmap">
        {education.map((edu, idx) => (
          <div className="roadmap-item" key={idx}>
            <div className="roadmap-circle">{idx + 1}</div>

            {/* 🔗 full clickable card */}
            <a
              href={edu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="roadmap-card"
            >
              <img src={edu.img} alt={edu.level} className="edu-img" />
              <h2>{edu.level}</h2>
              <span className="roadmap-year">{edu.year}</span>
              <h3>{edu.institute}</h3>
            </a>

            {idx !== education.length - 1 && <div className="roadmap-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
