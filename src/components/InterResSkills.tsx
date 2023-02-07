import React from "react";
import "./interResSkills.css";
import { Waypoint } from "react-waypoint";

//----------------------------------------------image imports
// import whale1 from "../imgs/interactivePage/skillsPage/whale-1.png"
// import whale2 from "../imgs/interactivePage/skillsPage/whale-2.png"
import whales from "../imgs/interactivePage/skillsPage/whales.png"

//   "Node.js",
//   "Express",
//   "JEST",
//   "PostgreSQL",
//   "Git",
//   "Adobe",
// 
//   "Microsoft Office",
//   "Microsoft Teams",
//   "COSMOS",
//   "Zoom",
//   "Slack",
//   "Discord",
//   "Amazon Work Space",
//   "Visual Studio Code",
//   "Postman",
//   "Beekeeper Studio",


function InterResSkills(): JSX.Element {
  const [animationTriggered, setAnimationTriggered] = React.useState(false);

  // todo: change ratio of background imgs
  // todo: make multiple divs + have them come in from different sides
  // todo: make gifs of the whales swimming

  return (
    <div className="background-img-skills">
      <Waypoint onEnter={() => setAnimationTriggered(true)}>
        <div className={`animated-div ${animationTriggered ? "move-in" : ""}`}>
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
          <img
            className="skills-whale"
            src={whales}
            alt=""
          />
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
