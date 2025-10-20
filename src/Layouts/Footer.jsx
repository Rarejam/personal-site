import reactIcon from "../assets/react.svg";
import twitterIcon from "../assets/twitter.svg";
import instaIcon from "../assets/instagram.svg";
// import whatsappIcon from "../assets/whatsapp.svg";
import discordIcon from "../assets/discord.svg";
import googleIcon from "../assets/google.svg";
import githubIcon from "../assets/github.svg";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-icon scroll-animate">
        {" "}
        <img src={reactIcon} alt="React" height="60" />
      </div>
      <div className="footer-motive ">
        <div>Living, learning, & leveling up </div>
        <div>one day at a time.</div>
      </div>
      <div className="footer-links">
        <div>
          <a href="">
            <img src={twitterIcon} alt="React" height="60" />
          </a>
        </div>
        <div>
          <a href="">
            <img src={githubIcon} alt="React" height="60" />
          </a>
        </div>
        <div>
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
      <div className="copyrights">Handcrafted by me @twentytwentyfive</div>
      <div>
        Made with
        <img src={reactIcon} alt="React" height="60" />
        react
      </div>
    </div>
  );
};

export default Footer;
