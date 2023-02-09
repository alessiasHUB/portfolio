import React from "react";
import "./interResSkills.css";
import { Waypoint } from "react-waypoint";

//----------------------------------------------image imports
// import whale1 from "../imgs/interactivePage/skillsPage/whale-1.png"
// import whale2 from "../imgs/interactivePage/skillsPage/whale-2.png"
import whales from "../imgs/interactivePage/skillsPage/whales.png";
import dolphins from "../imgs/interactivePage/skillsPage/dolphins.png";
import hammersharks from "../imgs/interactivePage/skillsPage/hammersharks.png";

import S from "../imgs/letters/S-white.png";
import K from "../imgs/letters/K-white.png";
import i from "../imgs/letters/i-white.png";
import L from "../imgs/letters/L-white.png";

function InterResSkills(): JSX.Element {
  const [animationTriggered, setAnimationTriggered] = React.useState(false);

  // todo: change background imgs, less valleys
  // todo: make gifs of the whales swimming
  // todo: right dolphin looks maaank
  // frame- motion, green sock animation library / react-spring
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
      <Waypoint onEnter={() => setAnimationTriggered(true)}>
        <div
          className={`animated-whales ${
            animationTriggered ? "move-in-right" : "waiting-state-right"
          }`}
        >
          <img className="skills-whale" src={whales} alt="" />
        </div>
      </Waypoint>
      <Waypoint
        topOffset={"-800px"}
        onEnter={() => setAnimationTriggered(true)}
      >
        <div
          className={`animated-dolphins ${
            animationTriggered ? "move-in-left" : "waiting-state-left"
          }`}
        >
          <img className="skills-dolphin" src={dolphins} alt="" />
        </div>
      </Waypoint>
      <Waypoint onEnter={() => setAnimationTriggered(true)}>
        <div
          className={`animated-hammersharks ${
            animationTriggered ? "move-in-shark" : "waiting-state-shark"
          }`}
        >
          <img className="skills-hammersharks" src={hammersharks} alt="" />
        </div>
      </Waypoint>
      {/* <Waypoint
        onEnter={() => setAnimationTriggered(true)}
      >
        <div
          className={`animated-summary ${
            animationTriggered ? "move-in-summary" : "waiting-state-summary"
          }`}
        >
          <img className="skills-summary" src={summary} alt="" />
        </div>
      </Waypoint> */}
    </div>
  );
}

export default InterResSkills;
