import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.scss";

function Footer(): JSX.Element {
  return (
    <div className="footer-container">
      <ul className="list-inline">
        <li>
          <a href="https://github.com/alessiasHUB/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alessiaborys/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:borys.alessia@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
      <p>Copyright &copy; Alessia Borys 2023</p>
    </div>
  );
}

export default Footer;
