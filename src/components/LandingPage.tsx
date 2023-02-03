import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./landingPage.css";
import interactresText from "../imgs/interactiveresumetxt.png"

export default function LandingPage(): JSX.Element {
  const intertxtHeight= 40
  return (
    <>
      <Header />
      <div className="interactive-resume-div">
    <img src={interactresText} alt="txt" height={intertxtHeight}/>
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
