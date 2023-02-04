import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// link to one page links, scroll
// https://medium.com/geekculture/scrollable-single-page-site-navigation-with-react-custom-hooks-4e7af716f6b1

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
