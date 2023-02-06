const skills: string[] = [
  "Javascript",
  "Typescript",
  "React",
  "HTML",
  "Markdown",
  "CSS",
  "Node.js",
  "Express",
  "JEST",
  "PostgreSQL",
  "Git",
  "Adobe",
];
const softwares: string[] = [
  "Microsoft Office",
  "Microsoft Teams",
  "COSMOS",
  "Zoom",
  "Slack",
  "Discord",
  "Amazon Work Space",
  "Visual Studio Code",
  "Postman",
  "Beekeeper Studio",
];

function InterResSkills(): JSX.Element {
  return (
    <div className="content">
      <div className="about-desc">
        {skills.map((el, index) => {
          return (
            <>
              <span>{el}</span>
              {index !== skills.length - 1 && <span>, </span>}
            </>
          );
        })}
      </div>
      <hr />
      <div className="about-desc">
        {softwares.map((el, index) => {
          return (
            <>
              <span>{el}</span>
              {index !== softwares.length - 1 && <span>, </span>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default InterResSkills;
