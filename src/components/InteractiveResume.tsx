import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./interactiveResume.css";

/*  link to gifMaker: https://ezgif.com/maker/   */
/* todo: add BUBBLES to the gifs and BLINKING EYES */
//--------------------------------------------------------img imports
import boat from "../imgs/interactivePage/boat.png";
import above from "../imgs/interactivePage/player/playerDefaultAbove.png";
import underWater1 from "../imgs/interactivePage/player/playerUnder1.png";
import swim1 from "../imgs/interactivePage/player/playerDefaultSwim.png";
import swimGif from "../imgs/interactivePage/player/playerSwimResizeGifWithFade.gif";
import useInterval from "./useInterval";
import S from "../imgs/letters/S-white.png";
import A from "../imgs/letters/A-white.png";
import i from "../imgs/letters/i-white.png";
import N from "../imgs/letters/N-white.png";
import T from "../imgs/letters/T-white.png";
import E from "../imgs/letters/E-white.png";
import R from "../imgs/letters/R-white.png";
import C from "../imgs/letters/C-white.png";
import V from "../imgs/letters/V-white.png";
import M from "../imgs/letters/M-white.png";
import U from "../imgs/letters/U-white.png";
import L from "../imgs/letters/L-white.png";
import B from "../imgs/letters/B-white.png";
import O from "../imgs/letters/O-white.png";
import Y from "../imgs/letters/Y-white.png";
import F from "../imgs/letters/F-white.png";


//--------------------------------------------------------section page imports
import InterResSkills from "./InterResSkills";

// todo? link to one page links, scroll
// https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1

export default function InteractiveResume(): JSX.Element {
  const [gameStart, setGameStart] = useState<boolean>();
  const [playerImg, setPlayerImg] = useState(above);
  const [Ypos, setYpos] = useState<number>();
  const [delay, setDelay] = useState<number | null>(null);

  //--------------------------------------------------------handles down-key press or mouse scroll
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setGameStart(true);
    }
  };
  const handleScroll = () => {
    setGameStart(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //--------------------------------------------------------tracks where the viewer is on the page
  //----------------------if scroll stops the img will change
  useInterval(() => {
    if (Ypos === window.scrollY) {
      setPlayerImg(swim1);
    }
  }, delay);

  // todo: add transition imgs when player starts swimming
  // todo: move swimmer higher up on page
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1000) {
      setPlayerImg(swimGif);
      setYpos(window.scrollY);
      setDelay(55 * 18); // 55 is the gif-switch-time
    } else if (window.scrollY >= 350) {
      setPlayerImg(underWater1);
    } else if (window.scrollY <= 1000) {
      setPlayerImg(above);
    }
  });

  return (
    <div className="interactive-resume-page">
      <img className="player" src={playerImg} alt="" />
      <img className="boat" src={boat} alt="" />
      <div className="start-container">
        <div className="center-img"></div>
        <div className="inter-title-container">
          <div className="title-1-container">
            <img src={i} alt="i" className="inter-title" />
            <img src={N} alt="N" className="inter-title" />
            <img src={T} alt="T" className="inter-title" />
            <img src={E} alt="E" className="inter-title" />
            <img src={R} alt="R" className="inter-title" />
            <img src={A} alt="A" className="inter-title" />
            <img src={C} alt="C" className="inter-title" />
            <img src={T} alt="T" className="inter-title" />
            <img src={i} alt="i" className="inter-title" />
            <img src={V} alt="V" className="inter-title" />
            <img src={E} alt="E" className="inter-title" />
            <p className="empty"> </p>
            <img src={R} alt="R" className="inter-title" />
            <img src={E} alt="E" className="inter-title" />
            <img src={S} alt="S" className="inter-title" />
            <img src={U} alt="U" className="inter-title" />
            <img src={M} alt="M" className="inter-title" />
            <img src={E} alt="E" className="inter-title" />
            <p className="empty"> </p>
            <img src={O} alt="O" className="inter-title" />
            <img src={F} alt="F" className="inter-title" />
          </div>
          <div className="title-2-container">
            <img src={A} alt="A" className="inter-title" />
            <img src={L} alt="L" className="inter-title" />
            <img src={E} alt="E" className="inter-title" />
            <img src={S} alt="S" className="inter-title" />
            <img src={S} alt="S" className="inter-title" />
            <img src={i} alt="I" className="inter-title" />
            <img src={A} alt="A" className="inter-title" />
            <p className="empty"> </p>
            <img src={B} alt="B" className="inter-title" />
            <img src={O} alt="O" className="inter-title" />
            <img src={R} alt="R" className="inter-title" />
            <img src={Y} alt="Y" className="inter-title" />
            <img src={S} alt="S" className="inter-title" />
          </div>
        </div>
        {!gameStart && (
          <p className="instruction-txt">
            Press keyboard's down-arrow or scroll mouse
          </p>
        )}
        {/*👇 todo: figure out the resizing on that */}
        <Link className="back-to-home-btn" to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div className="inter-res-skills">
        <InterResSkills />
      </div>
      <div className="inter-res-hobbies"></div>
      <div className="inter-res-projects"></div>
      <div className="inter-res-education"></div>
      <div className="inter-res-experience"></div>
      <div className="inter-res-contact"></div>
      {/* <div>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
        <h1>-</h1>
      </div> */}
    </div>
  );
}
