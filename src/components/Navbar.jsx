import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const { active, scrollToSection } = props;

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={active === "hero" ? "nav-item active" : "nav-item"}
                onClick={() => scrollToSection("hero")}
              >
                Home
              </li>
              <li
                className={active === "projects" ? "nav-item active" : "nav-item"}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </li>
              <li
                className={active === "skills" ? "nav-item active" : "nav-item"}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </li>
              <li
                className={active === "contact" ? "nav-item active" : "nav-item"}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
