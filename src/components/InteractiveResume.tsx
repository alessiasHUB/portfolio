import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./interactiveResume.css";

/*  todo: the imgs need to be sized properly in illustrator,
    - and the gif needs to match to the still imgs, 
    - make the swim one shorter
    link to gifMaker: https://ezgif.com/maker/ 
*/
import above from "../imgs/interactivePage/player/playerDefaultAbove.png";
import underWater1 from "../imgs/interactivePage/player/playerUnder1.png";
import swim1 from "../imgs/interactivePage/player/playerDefaultSwim.png";
import swimGif from "../imgs/interactivePage/player/playerSwimGifWithFade.gif";
import useInterval from "./useInterval";

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

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1000) {
      setPlayerImg(swimGif);
      setYpos(window.scrollY);
      setDelay(55*18); // 55 is the gif-switch-time
    } else if (window.scrollY >= 350) {
      setPlayerImg(underWater1);
    } else if (window.scrollY <= 1000) {
      setPlayerImg(above);
    }
  });

  return (
    <div className="interactive-resume-page">
      <img className="player" src={playerImg} alt="" />
      <div className="start-container">
        <div className="center-img"></div>
        <p className="interact-title-1">interactive resume of</p>{" "}
        {/* todo: change to image */}
        <p className="interact-title-2">Alessia Borys</p>{" "}
        {/* todo: change to images */}
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
      {/*👇 todo: make these into separate pages */}
      <div className="inter-res-skills"></div>
      <div className="inter-res-hobbies"></div>
      <div className="inter-res-projects"></div>
      <div className="inter-res-education"></div>
      <div className="inter-res-experience"></div>
      <div className="inter-res-contact"></div>
      <div>
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
      </div>
    </div>
  );
}
