import reactIcon from "../assets/react.svg";

const Experience = () => {
  return (
    <div className="experience " id="exp">
      <div>Tech Stack</div>
      <hr
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          padding: "0px",
        }}
      />
      <div className="grid-container ">
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
        <div className="scroll-off">
          <img src={reactIcon} alt="React" height="60" />
          react
        </div>
      </div>
    </div>
  );
};

export default Experience;
