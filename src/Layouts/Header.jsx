import { useState, useEffect } from "react";
import reactIcon from "../assets/react.svg";

const Header = () => {
  const [lightMode, setLightMode] = useState(false);

  // Load saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      setLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle("light-mode");

    if (!lightMode) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="header">
      <div>
        <div>
          <img src={reactIcon} alt="" />
        </div>
      </div>
      <div>
        <div className="dark-mode-div" onClick={toggleTheme}>
          {lightMode ? "🌙" : "☀️"}
        </div>
        <a href="#about">About Me</a>
        <a href="#exp"> Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contacts</a>
      </div>
    </div>
  );
};

export default Header;
