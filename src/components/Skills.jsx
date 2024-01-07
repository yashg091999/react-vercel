import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h1 className="skills-h1">Skills</h1>
      <div className="skills-content">
        <div className="skills-card">
          <FaReact size={80} />
          <h3>REACT</h3>
          <p>
            React is a JavaScript library for building user interfaces,
            emphasizing component-based development and efficient rendering for
            interactive web applications.
          </p>
        </div>
        <div className="skills-card">
          <FaCss3Alt size={80} />
          <h3>CSS</h3>
          <p>
            CSS (Cascading Style Sheets) styles HTML elements, controlling
            layout and presentation, enabling beautiful and responsive web
            design for enhanced user experience.
          </p>
        </div>
        <div className="skills-card">
          <IoLogoJavascript size={80} />
          <h3>JavaScript</h3>
          <p>
            JavaScript is a versatile scripting language, essential for web
            development, providing interactivity, dynamic content, and enhancing
            user experiences across browsers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
