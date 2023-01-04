import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <nav>
      <Link className="nav-text" to="/">
        Home
      </Link>
      <Link className="nav-text" to="/about">
        About
      </Link>
      <Link className="nav-text" to="/projects">
        Projects
      </Link>
      <Link className="nav-text" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
