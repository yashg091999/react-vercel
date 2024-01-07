import React from "react";

function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-content">
        <div className="aboutMe-img-container">
          <img src="src/images/about-me.png" alt="" className="aboutMe-img" />
        </div>
        <div className="aboutMe-info">
          <h1 className="aboutMe-h1">About Me</h1>
          <p className="aboutMe-info">
            I am Yash Gupta, currently pursuing my Master's in Computer
            Applications (MCA). Proficient in C++ and React, my journey revolves
            around a fervent love for coding. Bridging the realms of backend and
            frontend development, I am driven by a relentless passion for
            technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
