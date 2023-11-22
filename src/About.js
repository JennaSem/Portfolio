import TypingAnimation from "./TypingAnimation";
import Footer from "./Footer";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="assistant">
          <video
            src={process.env.PUBLIC_URL + "/image/video.MP4"}
            controls
            type="video/mp4"
          />
        </div>
        <div className="Typing">
          <TypingAnimation />
        </div>
        <div className="about-image">
          <img src="/image/aboutMe.jpg" alt="about me" />
        </div>
      </div>
      <div className="footerBox">
        <Footer />
      </div>
    </div>
  );
}

export default About;
