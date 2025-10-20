import reactIcon from "../assets/react.svg";

const Project = () => {
  return (
    <div className="project-content " id="project">
      <div>My Recent Work</div>
      <hr
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          padding: "0px",
        }}
      />

      <div className="main scroll-right">
        <div className="project-description">
          <h3 style={{ margin: "0px" }}>Messaging App</h3>
          <p>
            Heyy!! I am Jamal deen and yea I am an 18 year old college student
            at the unilversity of Lagos, Niegria... I love coding and have been
            aspiring to be greater at what I do most which is programming and I
            an currently a PERN stack developer Thank you. Heyy!! I am Jamal
            deen and yea I am an 18 year old college student at the unilversity
            of Lagos, Niegria... I love coding and have been aspiring to
          </p>
          <div className="project-btn">
            <a>Github</a>
            <a>Live</a>
          </div>
        </div>
        <div className="project-image">
          <img src={reactIcon} alt="" />
        </div>
      </div>

      <div className="main scroll-left">
        <div className="project-image">
          <img src={reactIcon} alt="" />
        </div>

        <div className="project-description">
          <h3 style={{ margin: "0px" }}>Messaging App</h3>
          <p>
            Heyy!! I am Jamal deen and yea I am an 18 year old college student
            at the unilversity of Lagos, Niegria... I love coding and have been
            aspiring to be greater at what I do most which is programming and I
            an currently a PERN stack developer Thank you. Heyy!! I am Jamal
            deen and yea I am an 18 year old college student at the unilversity
            of Lagos, Niegria... I love coding and have been aspiring to
          </p>
          <div className="project-btn">
            <a>Github</a>
            <a>Live</a>
          </div>
        </div>
      </div>

      <div className="main scroll-right">
        <div className="project-description">
          <h3 style={{ margin: "0px" }}>Messaging App</h3>
          <p>
            Heyy!! I am Jamal deen and yea I am an 18 year old college student
            at the unilversity of Lagos, Niegria... I love coding and have been
            aspiring to be greater at what I do most which is programming and I
            an currently a PERN stack developer Thank you. Heyy!! I am Jamal
            deen and yea I am an 18 year old college student at the unilversity
            of Lagos, Niegria... I love coding and have been aspiring to
          </p>
          <div className="project-btn">
            <a>Github</a>
            <a>Live</a>
          </div>
        </div>
        <div className="project-image">
          <img src={reactIcon} alt="" />
        </div>
      </div>

      <div className="main scroll-left">
        <div className="project-image">
          <img src={reactIcon} alt="" />
        </div>

        <div className="project-description">
          <h3 style={{ margin: "0px" }}>Messaging App</h3>
          <p>
            Heyy!! I am Jamal deen and yea I am an 18 year old college student
            at the unilversity of Lagos, Niegria... I love coding and have been
            aspiring to be greater at what I do most which is programming and I
            an currently a PERN stack developer Thank you. Heyy!! I am Jamal
            deen and yea I am an 18 year old college student at the unilversity
            of Lagos, Niegria... I love coding and have been aspiring to
          </p>
          <div className="project-btn">
            <a>Github</a>
            <a>Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
