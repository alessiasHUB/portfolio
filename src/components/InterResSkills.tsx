import React from "react";
import "./interResSkills.css";
import { Waypoint } from "react-waypoint";

//----------------------------------------------image imports
// import whale1 from "../imgs/interactivePage/skillsPage/whale-1.png"
// import whale2 from "../imgs/interactivePage/skillsPage/whale-2.png"
import whales from "../imgs/interactivePage/skillsPage/whales.png";
import dolphins from "../imgs/interactivePage/skillsPage/dolphins.png";

import S from "../imgs/letters/S-white.png";
import K from "../imgs/letters/K-white.png";
import i from "../imgs/letters/i-white.png";
import L from "../imgs/letters/L-white.png";

function InterResSkills(): JSX.Element {
  const [animationTriggered, setAnimationTriggered] = React.useState(false);

  // todo: change background imgs, less valleys
  // todo: make gifs of the whales swimming
  // todo: right dolphin looks maaank

  return (
    <div className="background-img-skills">
      <div className="skills-title-container">
        <img src={S} alt="S" className="skills-title" />
        {/* todo: fix the size of K */}
        <img src={K} alt="K" className="skills-title" />
        <img src={i} alt="i" className="skills-title" />
        <img src={L} alt="L" className="skills-title" />
        <img src={L} alt="L" className="skills-title" />
        <img src={S} alt="S" className="skills-title" />
      </div>
      <Waypoint
        topOffset={"-1000px"}
        onEnter={() => setAnimationTriggered(true)}
      >
        <div
          className={`animated-whales ${
            animationTriggered ? "move-in-right" : ""
          }`}
        >
          {/* <img
            className="skills-whale"
            src={whale1}
            alt=""
          />
          <img
            className="skills-whale"
            src={whale2}
            alt=""
          /> */}
          <img className="skills-whale" src={whales} alt="" />
        </div>
      </Waypoint>
      <Waypoint
        topOffset={"-600px"}
        onEnter={() => setAnimationTriggered(true)}
      >
        <div
          className={`animated-dolphins ${
            animationTriggered ? "move-in-left" : ""
          }`}
        >
          <img className="skills-dolphin" src={dolphins} alt="" />
        </div>
      </Waypoint>
      {/* <div className="about-desc">
        {skills.map((el, index) => {
          return (
            <>
              <span>{el}</span>
              {index !== skills.length - 1 && <span>, </span>}
            </>
          );
        })}
      </div>
      <div className="about-desc">
        {softwares.map((el, index) => {
          return (
            <>
              <span>{el}</span>
              {index !== softwares.length - 1 && <span>, </span>}
            </>
          );
        })}
      </div> */}
    </div>
  );
}

export default InterResSkills;
