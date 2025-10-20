import About from "./Layouts/About";
import Experience from "./Layouts/Experience";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Project from "./Layouts/Project";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
