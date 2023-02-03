import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer(): JSX.Element {
  return (
    <div className="footer-container">
      <div className="container__row">
        <div className="about-container">
          <h1>About</h1>
          <div className="about-section">
          <FontAwesomeIcon icon={faFaceSmile} className="portrait-pic" />
          {/* <img src="#" alt="" /> */}
          <p>Alessia Borys is a junior full-stack software developer.</p>
          </div>
        </div>
        <div className="contact-container">
          <h1>Contact</h1>
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
