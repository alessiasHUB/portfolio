import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./interactiveResume.css";

/* todo: the imgs need to be sized properly in illustrator */
import above from "../imgs/interactivePage/above1.png";
import underWater1 from "../imgs/interactivePage/underWater1.png";
import underWater2 from "../imgs/interactivePage/underWater2.png";
import swim1 from "../imgs/interactivePage/swim1.png";
import swim2 from "../imgs/interactivePage/swim2.png";
import swim3 from "../imgs/interactivePage/swim3.png";
import useInterval from "./useInterval";

// link to one page links, scroll
// https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1

export default function InteractiveResume(): JSX.Element {
  const [gameStart, setGameStart] = useState<boolean>();
  const [playerImg, setPlayerImg] = useState(above);
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
  
  // useInterval(() => {
  //   setPlayerImg(prevImg => prevImg === swim2 ? swim3 : swim2);
  // }, delay);
  
  // const swimming = () => {
  //   const interval: NodeJS.Timeout = setInterval(() => {
  //     setPlayerImg(prevImg =>
  //       prevImg === swim2 ? swim3 : swim2
  //     );
  //   }, 800);
  //   return () => clearInterval(interval);
  // };
  
  // let cleanup: () => void;
  
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1000) {
      setPlayerImg(swim1)
      // setDelay(800)
      // cleanup = swimming();
    } else if (window.scrollY >= 350) {
      setPlayerImg(underWater1);
      // setDelay(null)
      // if (cleanup) {
      //   cleanup();
      // }
    } else if (window.scrollY <= 1000) {
      setPlayerImg(above);
      // setDelay(null)
      // if (cleanup) {
      //   cleanup();
      // }
    }
  });
  

  return (
    <div className="interactive-resume-page">
      <img className="player" src={playerImg} alt="" />
      <div className="start-container">
        <div className="center-img"></div>
        {!gameStart && (
          <p className="instruction-txt">
            Press keyboard's down-arrow or scroll mouse
          </p>
        )}
        <p className="interact-title-1">interactive resume of</p>{" "}
        {/* change to image */}
        <p className="interact-title-2">Alessia Borys</p>{" "}
        {/* change to images */}
        <Link className="back-to-home-btn" to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
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
