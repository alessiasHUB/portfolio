import React from "react";
import "./interResSkills.css";
import { Waypoint } from "react-waypoint";

// const skills: string[] = [
//   "Javascript",
//   "Typescript",
//   "React",
//   "HTML",
//   "Markdown",
//   "CSS",
//   "Node.js",
//   "Express",
//   "JEST",
//   "PostgreSQL",
//   "Git",
//   "Adobe",
// ];
// const softwares: string[] = [
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
// ];

function InterResSkills(): JSX.Element {
  const [animationTriggered, setAnimationTriggered] = React.useState(false);

  // todo: change ratio of background imgs
  // todo: make multiple divs + have them come in from different sides
  return (
    <div className="background-img-skills">
      <Waypoint onEnter={() => setAnimationTriggered(true)}>
        <div className={`animated-div ${animationTriggered ? "move-in" : ""}`}>
          <img
            className="skills-whale-1"
            src="https://www.freepnglogos.com/uploads/whale-png/blue-whale-noaa-fisheries-24.png"
            alt=""
          />
          <img
            className="skills-whale-1"
            src="https://www.freepnglogos.com/uploads/whale-png/blue-whale-noaa-fisheries-24.png"
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
