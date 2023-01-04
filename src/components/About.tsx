// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAboutProps {}

const introduction = `
Chemical engineering graduate with experience as a junior full stack software 
developer, excited to pursue a career in the tech industry. I am a hardworking 
and creative individual who is always eager to learn new things. My previous 
work experience includes internships in green-hydrogen energy and marketing, 
as well as roles in sales, private chef and as the owner and manager of my own 
online bakery. I am confident in my ability to excel in a technical role and am 
excited to bring my diverse skill set to a new challenge.
`
const education = [
  {
    date: "2018 – 2021",
    school: "Royal Institute of Technology | KTH",
    location: "Stockholm, Sweden",
    degree: "BS ChemE",
    description: ``,
  },
  {
    date: "2020 - 2021",
    school: "Imperial College London | ICL",
    location: "London, United Kingdom",
    degree: "Exchange year",
    description: ``,
  },
];
const experience = [
  {
    company: "",
    date: "",
    location: "",
    description: ``,
  },
];
const skills: string[] = [
  "Javascript", 
  "Typescript",
  "React",
  "HTML",
  "Markdown",
  "CSS",
  "Node.js",
  "Express",
  "SQL",
  "GitHub"
];
const softwares: string[] = [
  "Microsoft Office",
  "COSMOS",
  "Zoom",
  "Slack",
  "Discord",
  "Visual Studio Code",
  "Postman",
  "Beekeeper Studio",
]
const languages = [
  {
    lingo: "English",
    level: "Mother tongue"
  },
  {
    lingo: "Swedish",
    level: "Mother tongue"
  },
  {
    lingo: "Spanish",
    level: "Intermediate"
  },
];
const hobbies: string[] = [
  "Bouldering",
  "Dancing salsa & bachata",
  "Painting",
  "Playing piano",
];

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <>
      <h1>Please take a look at my resume below</h1>
      <h3>Or download it <a href="./data/cv.pdf" download>here</a></h3>
      <h4>Introduction</h4>
      <p className="introduction">{introduction}</p>
      <hr />
      <hr />
      <h4>Education</h4>
      {education.map(obj => {
        return (
          <>
            <p>{obj.date}</p>
            <p>{obj.degree} | {obj.school} - {obj.location}</p>
            <p>{obj.description}</p>
          </>
        )
      })}
      <hr />
      <hr />
      <h4>Experience</h4>
      {experience.map(obj => {
        return (
          <>
            <p>{obj.date}</p>
            <p>{obj.company} | {obj.location}</p>
            <p>{obj.description}</p>
            <hr />
          </>
        )
      })}
      <hr />
      <hr />
      <h4>Skills</h4>
      {skills.map((el,index) => {
        return (
          <>
            <span>{el}</span>
            {index !== skills.length-1 && <span>, </span>}
          </>
        )
      })}
      <hr />
      <h4>Softwares</h4>
      {softwares.map((el,index) => {
        return (
          <>
            <span>{el}</span>
            {index !== softwares.length-1 && <span>, </span>}
          </>
        )
      })}
      <hr />
      <h4>Languages</h4>
      {languages.map((el,index) => {
        return (
          <>
            <span>{el.lingo} | level: {el.level}</span>
            {index !== languages.length-1 && <br />}
          </>
        )
      })}
      <hr /><hr />
      <h4>Hobbies</h4>
      {hobbies.map((el,index) => {
        return (
          <>
            <span>{el}</span>
            {index !== hobbies.length-1 && <br />}
          </>
        )
      })}
      <hr /><hr /><hr />
    </>
  );
};

export default About;
