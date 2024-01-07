import React from "react";
import { PiSignatureLight } from "react-icons/pi";

function Nav() {
  return (
    <div className="content">
      <div className="Navbar">
        <div className="logo">
          <img src="src/images/yashgupta (2).png" alt="" className="img1" />
        </div>
        <div className="list">
          <ul>
            <a href="#" className="anch">
              <li>Home</li>
            </a>
            <a href="#" className="anch">
              <li>About Me</li>
            </a>
            <a href="skills" className="anch">
              <li>Skills</li>
            </a>
            <a href="#" className="anch">
              <li>Projects</li>
            </a>
          </ul>
        </div>

        <div className="btn">
          <button type="button" className="btn btn-outline-primary">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
