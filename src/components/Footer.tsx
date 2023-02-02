import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

function Footer(): JSX.Element {
  return (
    <div className="footer-container">
      <div className="footer-about">
        <h1>About</h1>
        <img src="" alt="" />
        <p>Alessia Borys is a junior full-stack software developer.</p>
      </div>
      <div className="footer-contact-container">
        <h1>Contact</h1>
        <p>
          If you have any questions about anything, or just want to say hi, feel
          free to contact me. You can find my social pages and email below:
        </p>
        <div className="footer-links">
          <a href="https://github.com/alessiasHUB/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="footer-linkedin-icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/alessiaborys/">
            <FontAwesomeIcon icon={faGithub} className="footer-github-icon" />
          </a>
          {/* <a href="https://www.codewars.com/alessiasHUB/">
            <FontAwesomeIcon icon={} className="footer-codewars-icon" />
          </a> */}
          <a href="mailto:borys.alessia@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="footer-envelope-icon"
            />
          </a>
        </div>
      </div>
      <p>Copyright &copy; Alessia Borys 2023</p>
    </div>
  );
}

export default Footer;
