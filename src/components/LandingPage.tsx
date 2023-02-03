import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="interactive-resume-div">
      <Link className="nav-text" to="/interactive-resume">
        Interactive resume
      </Link>
      </div>
      <Footer />
    </>
  );
}
