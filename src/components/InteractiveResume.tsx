import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function InteractiveResume(): JSX.Element {
  return (
    <>
      <Link className="back-to-home-btn" to="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <p>interactive resume</p>
    </>
  );
}
