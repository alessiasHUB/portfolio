import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import contact from "../imgs/txts/contact.png";
import about from "../imgs/txts/about.png";
import profilePic from "../imgs/profilePic.png";

function Footer(): JSX.Element {
  return (
    <div className="footer-container">
      <div className="container__row">
        <div className="about-container">
          <img src={about} alt="" />
          <div className="about-section">
            <img className="portrait-pic" src={profilePic} alt="" />
            <p>Alessia Borys is a junior full-stack software developer.</p>
          </div>
        </div>
        <div className="contact-container">
          <img src={contact} alt="" />
          <p>
            If you have any questions about anything, or just want to say hi,
            feel free to contact me. You can find my social pages and email
            below:
          </p>
          <div className="links">
            <a href="https://github.com/alessiasHUB/">
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </a>
            <a href="https://www.linkedin.com/in/alessiaborys/">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
            </a>
            {/* <a href="https://www.codewars.com/alessiasHUB/">
            <FontAwesomeIcon icon={} className="codewars-icon" />
          </a> */}
            <a href="mailto:borys.alessia@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
