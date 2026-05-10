import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const { active, scrollToSection } = props;
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav className="navbar" aria-label="Primary navigation">
          <div className="nav-background">
            <button
              type="button"
              className="nav-logo"
              aria-label="Go to home"
              onClick={() => scrollToSection("hero")}
            >
              AK
            </button>

            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={
                      active === item.id ? "nav-item active" : "nav-item"
                    }
                    aria-current={active === item.id ? "page" : undefined}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
