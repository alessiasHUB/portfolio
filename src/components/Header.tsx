import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./header.css";

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="title-container">
        <p className="header-title">A</p>
        <p className="header-title">L</p>
        <p className="header-title">E</p>
        <p className="header-title">S</p>
        <p className="header-title">S</p>
        <p className="header-title">I</p>
        <p className="header-title">A</p>
        <p className="empty-space"> </p>
        <p className="header-title">B</p>
        <p className="header-title">O</p>
        <p className="header-title">R</p>
        <p className="header-title">Y</p>
        <p className="header-title">S</p>
      </div>
      <div className="links-header">
        <a href="https://github.com/alessiasHUB/">
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon-header" />
        </a>
        <a href="https://www.linkedin.com/in/alessiaborys/">
          <FontAwesomeIcon icon={faGithub} className="github-icon-header" />
        </a>
        {/* <a href="https://www.codewars.com/alessiasHUB/">
            <FontAwesomeIcon icon={} className="codewars-icon-header" />
          </a> */}
        <a href="mailto:borys.alessia@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="envelope-icon-header" />
        </a>
      </div>
    </header>
  );
}

export default Header;
