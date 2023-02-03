import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Header />
      <p>landing page</p>
      <Link className="nav-text" to="/interactive-resume">
        Interactive resume
      </Link>
      <Footer />
    </>
  );
}
