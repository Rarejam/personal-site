// import reactIcon from "../assets/react.svg";
import flitter from "../assets/flitter.png";
import messaingApp from "../assets/messagingApp.png";
import blogare from "../assets/blogare.png";
import shoppingCart from "../assets/shoppingCart.png";
import memoryGame from "../assets/memoryGame.png";
import membersOnly from "../assets/membersOnly.png";
import ticTacToe from "../assets/ticTacToe.png";
import etchaSketch from "../assets/etchaSketch.png";

const Project = () => {
  const projects = [
    {
      id: "1",
      name: "Flitter socia-media app",
      description: `A full-stack social media platform inspired by Twitter. Users can create posts, follow others, like content, and interact in real-time. Built with authentication, scalable backend, and responsive UI for a modern social experience.`,
      image: flitter,
      github: "https://github.com/Rarejam/odin-book_flitter_app",
      live: "https://github.com/Rarejam/odin-book_flitter_app",
      reverse: false,
    },
    {
      id: "2",
      name: "Messaging app ",
      description: `   A real-time chat application featuring live messaging, online status indicators, and user authentication. Powered by WebSockets for smooth communication and a clean, intuitive UI to enhance user engagement.
   
          `,
      image: messaingApp,
      github: "https://github.com/Rarejam/messaging-app",
      live: "https://messaging-app-mocha.vercel.app/",
      reverse: true,
    },
    {
      id: "3",
      name: "blog app",
      description: `
              A dynamic blogging platform where users can create, edit, and interact with blog posts. Includes full CRUD functionality, user authentication, and a clean UI focused on reading experience.
`,
      image: blogare,
      github: "https://github.com/Rarejam/blog_frontend_1",
      live: "https://blog-frontend-1-ochre.vercel.app/",
      reverse: false,
    },
    {
      id: "4",
      name: "Shopping Cart site",
      description: `     An e-commerce application with cart management, product filtering, and checkout simulation. Built using React with state management to handle cart items and update UI in real-time.
 `,
      image: shoppingCart,
      github: "https://github.com/Rarejam/react-shopping-cart",
      live: "https://react-shopping-cart-auvd.vercel.app/",
      reverse: true,
    },
    {
      id: "5",
      name: "Memory Game",
      description: `
      A fun and interactive memory card game designed to test users’ concentration and recall speed. Built using React hooks for managing game state and user interactions.
    `,
      image: memoryGame,
      github: "https://github.com/Rarejam/memory-game",
      live: "https://memory-game-three-sepia.vercel.app/",
      reverse: false,
    },
    {
      id: "6",
      name: "Members only!",
      description: `
      An exclusive club-style platform where only authenticated users can post and view secret messages. Features role-based access and backend authentication to protect content.
    `,
      image: membersOnly,
      github: "https://github.com/Rarejam/members-only",
      live: "https://members-only-on26.onrender.com/",
      reverse: true,
    },
    {
      id: "7",
      name: "tic-tac-toe",
      description: `
      A classic tic-tac-toe game built with React, featuring game state logic, win detection, and restart functionality. Designed with clean UI for smooth gameplay.
    `,
      image: ticTacToe,
      github: "https://github.com/Rarejam/tic-tac-toe",
      live: "https://rarejam.github.io/tic-tac-toe/",
      reverse: false,
    },
    {
      id: "8",
      name: "Etch-A-Sketch",
      description: `
      A browser-based drawing tool inspired by the classic Etch-A-Sketch toy. Users can draw with mouse movement, adjust grid size, and reset the canvas for a new sketch.
    `,
      image: etchaSketch,
      github: "https://github.com/Rarejam/Etch-a-sketch",
      live: "https://rarejam.github.io/Etch-a-sketch/",
      reverse: true,
    },
  ];

  return (
    <div className="project-content" id="project">
      <div>My Recent Work</div>
      <hr
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      />

      {projects.map((project) => (
        <div
          key={project.id}
          className={`main ${project.reverse ? "scroll-left" : "scroll-right"}`}
        >
          {/* If reverse == true, show image first */}
          {project.reverse && (
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
          )}

          <div className="project-description">
            <h3 style={{ margin: "0px" }}>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-btn">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
            </div>
          </div>

          {/* If reverse == false, show image after */}
          {!project.reverse && (
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
