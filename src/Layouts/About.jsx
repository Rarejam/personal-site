import reactIcon from "../assets/react.svg";

const About = () => {
  return (
    <div className="about scroll-animate" id="about">
      <div>
        <h3 style={{ margin: "0px" }}>About me</h3>
        <p>
          Hi, I’m Jamaldeen Agara👋 a computer science student with a passion
          for web development, game development, 3D animation, and fitness.
          Currently serving in the U.S Army Reserves as a CBRN specialist, I use
          disciplined and detail-oriented methods in my work. In my free time, I
          like exploring new technologies. With an OSHA 10-Hour General Industry
          certification, I prioritize safety and maintain professionalism in all
          environments.
        </p>
        <div className="project-btn">
          <a>Github</a>
          <a>resume</a>
        </div>
      </div>
      <div>
        <img src={reactIcon} alt="" />
      </div>
    </div>
  );
};

export default About;
