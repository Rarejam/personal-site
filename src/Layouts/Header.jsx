import { useState, useEffect } from "react";
import reactIcon from "../assets/react.svg";
import profilePic from "../assets/profilePic.jpg";

const Header = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      setLightMode(true);
    } else {
      document.body.classList.add("dark-mode");
      setLightMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle("light-mode");

    if (!lightMode) {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <div className="header">
      <div>
        <div>
          <img src={profilePic} alt={reactIcon} />
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
