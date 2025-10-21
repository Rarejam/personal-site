import reactIcon from "../assets/react.svg";

const About = () => {
  return (
    <div className="about scroll-animate" id="about">
      <div>
        <h3 style={{ margin: "0px" }}>About Me</h3>
        <p>
          Hey! I'm Jamal Deen, an 18-year-old full-stack developer based in
          Lagos. I'm currently a student at the University of Lagos, and I
          specialize in building dynamic, responsive, and user-focused web
          applications using the PERN stack (PostgreSQL, Express, React,
          Node.js).
          <br />
          <br />
          What started as curiosity has evolved into a deep passion for solving
          real-world problems using code. I’ve built social media apps, chat
          platforms, e-commerce experiences, games, and interactive tools — each
          one pushing me to improve my skills in backend architecture, frontend
          performance, and user experience.
          <br />
          <br />I love challenges, I love learning, and I’m constantly leveling
          up — one project at a time.
        </p>
        <div className="project-btn">
          <a href="https://github.com/Rarejam">Github</a>
          <a>Resume</a>
        </div>
      </div>
      <div>
        <img src={reactIcon} alt="React Icon" />
      </div>
    </div>
  );
};

export default About;
