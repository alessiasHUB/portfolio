import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./header.css";
import A from "../imgs/letters/A-white.png";
import L from "../imgs/letters/L-white.png";
import E from "../imgs/letters/E-white.png";
import S from "../imgs/letters/S-white.png";
import i from "../imgs/letters/i-white.png";
import B from "../imgs/letters/B-white.png";
import O from "../imgs/letters/O-white.png";
import R from "../imgs/letters/R-white.png";
import Y from "../imgs/letters/Y-white.png";

function Header(): JSX.Element {
  const letterHeight = 30;

  return (
    <header className="header">
      <div className="title-container">
        <img src={A} alt="A" height={letterHeight} className="header-title" />
        <img src={L} alt="L" height={letterHeight} className="header-title" />
        <img src={E} alt="E" height={letterHeight} className="header-title" />
        <img src={S} alt="S" height={letterHeight} className="header-title" />
        <img src={S} alt="S" height={letterHeight} className="header-title" />
        <img src={i} alt="I" height={letterHeight} className="header-title" />
        <img src={A} alt="A" height={letterHeight} className="header-title" />
        <p className="empty-space"> </p>
        <img src={B} alt="B" height={letterHeight} className="header-title" />
        <img src={O} alt="O" height={letterHeight} className="header-title" />
        <img src={R} alt="R" height={letterHeight} className="header-title" />
        <img src={Y} alt="Y" height={letterHeight} className="header-title" />
        <img src={S} alt="S" height={letterHeight} className="header-title" />
        {/* <p className="header-title">A</p>
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
        <p className="header-title">S</p> */}
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
