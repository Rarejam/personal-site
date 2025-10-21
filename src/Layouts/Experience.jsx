// Import your actual icons instead of using the same one
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import viteIcon from "../assets/vite.svg";
import nodeIcon from "../assets/nodejs.svg";
import webpackIcon from "../assets/webpack.svg";
import gitIcon from "../assets/git.svg";
import mysqlIcon from "../assets/mysql.svg";
import prismaIcon from "../assets/prisma.svg";
import renderIcon from "../assets/render.svg";
import expressIcon from "../assets/express.svg";
// import multerIcon from "../assets/multer.svg";
import cloudinaryIcon from "../assets/cloudinary.svg";
import vitestIcon from "../assets/vitest.svg";
import reduxIcon from "../assets/redux.svg";
import vercelIcon from "../assets/vercel.svg";

const techStack = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Vite", icon: viteIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express + JWT", icon: expressIcon },
  // { name: "EJS", icon: ejsIcon },
  { name: "Webpack", icon: webpackIcon },
  { name: "Git", icon: gitIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Prisma", icon: prismaIcon },
  { name: "Vercel", icon: vercelIcon },
  { name: "Render", icon: renderIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Cloudinary + Multer", icon: cloudinaryIcon },
  { name: "Vitest", icon: vitestIcon },
];

const Experience = () => {
  return (
    <div className="experience" id="exp">
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
      <div className="grid-container">
        {techStack.map((tech) => (
          <div className="scroll-off" key={tech.name}>
            <img src={tech.icon} alt={tech.name} height="60" />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
