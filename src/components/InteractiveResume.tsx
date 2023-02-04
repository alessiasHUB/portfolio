import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./interactiveResume.css"

// link to one page links, scroll
// https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1

export default function InteractiveResume(): JSX.Element {
  const [gameStart, setGameStart] = useState<boolean>();

  //--------------------------------------------------------handles down-key press or mouse scroll
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setGameStart(true);
    }
  };
  const handleScroll = () => {
    setGameStart(true);
  };

  useEffect(() => {
    //--------------------------------------------------------handles down-key press or mouse scroll
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      <Link className="back-to-home-btn" to="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <p>interactive resume of</p> {/* change to image */}
      <p>Alessia Borys</p> {/* change to images */}
      { !gameStart && <p className="instruction-txt">
          Press keyboard's down-arrow or scroll mouse
      </p>}
    </>
  );
}
