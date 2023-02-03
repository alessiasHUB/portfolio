import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./landingPage.css";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="interactive-resume-div">
        <h1>INTERACTIVE RESUME</h1>
        <p>
          Let's go over my resume, but make it a little more fun with this
          interactive game style website
        </p>
        <button className="interactive-resume-btn">
          <Link className="interactive-resume-link" to="/interactive-resume">
            LAUNCH
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}
