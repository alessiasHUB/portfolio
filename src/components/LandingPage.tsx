import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./landingPage.css";
import interactresText from "../imgs/txts/interactiveresumetxt.png"
import interactresImg from "../imgs/interactiveresumeImg.png"

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="interactive-resume-div">
        <img className="interactive-resume-background" src={interactresImg} alt="" />
        <div className="interactive-resume-txt-div">
          <img className="interactive-resume-title" src={interactresText} alt="txt"/>
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
      </div>
      <Footer />
    </>
  );
}
