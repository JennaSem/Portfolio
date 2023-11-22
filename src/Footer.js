import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="fb">
            <a
              href="https://www.linkedin.com/in/evgeniiasemenova/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={25} color="#fe71c8" />
            </a>
            <a
              href="https://www.instagram.com/jennasem87/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={25} color="#fe71c8" />
            </a>
            <a
              href="https://github.com/JennaSem"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} color="#fe71c8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
