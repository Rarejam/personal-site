import reactIcon from "../assets/vite.svg";
// import twitterIcon from "../assets/twitter.svg";
import instaIcon from "../assets/instagram.svg";
import LinkedInIcon from "../assets/LinkedInIcon.svg";
import discordIcon from "../assets/discord.svg";
import googleIcon from "../assets/google.svg";
import githubIcon from "../assets/github.svg";
import profilePic from "../assets/profilePic.jpg";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-icon scroll-animate">
        {" "}
        <img src={profilePic} alt={reactIcon} height="60" />
      </div>
      <div className="footer-motive ">
        <div>Living, learning, & leveling up </div>
        <div>one day at a time.</div>
      </div>
      <div className="footer-links">
        <div>
          <a href="https://www.linkedin.com/in/jamaldeen-agara-ba003233b/">
            <img src={LinkedInIcon} alt="React" height="60" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Rarejam/personal-site">
            <img src={githubIcon} alt="React" height="60" />
          </a>
        </div>
        <div>
          {/* the mailto:example@gmail.com is going to open a main automatically with yr gmail for the user */}
          <a href="mailto:agarajamaldeen@gmail.com">
            <img src={googleIcon} alt="React" height="60" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/rare.jam/">
            <img src={instaIcon} alt="React" height="60" />
          </a>
        </div>
        <div>
          <a href="https://discord.com/users/1258889183481565235">
            {" "}
            <img src={discordIcon} alt="React" height="60" />
          </a>
        </div>
      </div>
      <div className="copyrights">Handcrafted by me © 2025</div>
      <div>
        Made with
        <img src={reactIcon} alt="React" height="60" />
        react
      </div>
    </div>
  );
};

export default Footer;
