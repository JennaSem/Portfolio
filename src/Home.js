import { useEffect, useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Projects from "./Projects";
import ImageSlider from "./ImageSlider";
import Footer from "./Footer";

function Home() {
  const [projects, setProjects] = useState(data);

  const chosenProject = (searchTerm) => {
    const newProject = data.filter(
      (element) => element.searchTerm === searchTerm
    );
    setProjects(newProject);
  };

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <div className="page-container">
      <div className="content-container">
        <Buttons filterProject={chosenProject} />
        <Projects showProject={projects} />
        <div className="slider-container">
          <ImageSlider />
        </div>
      </div>
      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
