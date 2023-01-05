import React, { useRef } from "react";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAboutProps {}

// doesn't work!! CRYYYYYY
const DownloadPDF: React.FC = () => {
  const link = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    if (link.current) {
      link.current.click();
    }
  };
  return (
    <>
      <button onClick={handleClick}>here</button>
      <a
        ref={link}
        href="../data/AlessiaBorys.pdf"
        download
        style={{ display: "none" }}
      >
        here
      </a>
    </>
  );
};

const introduction = `
Chemical engineering graduate with experience as a junior full stack software 
developer, excited to pursue a career in the tech industry. I am a hardworking 
and creative individual who is always eager to learn new things. My previous 
work experience includes internships in green-hydrogen energy and marketing, 
as well as roles in sales, private chef and as the owner and manager of my own 
online bakery. I am confident in my ability to excel in a technical role and am 
excited to bring my diverse skill set to a new challenge.
`;
const education = [
  {
    date: "2018 – 2021",
    school: "Royal Institute of Technology (KTH)",
    location: "Stockholm, Sweden",
    degree: "BS ChemE",
    description: `First 2 years completed at KTH Stockholm.`,
    grades: "Grades: 4.47, Unweighted: 4,43  (2:1 equivalent)",
  },
  {
    date: "2020 - 2021",
    school: "Imperial College London (ICL)",
    location: "London, United Kingdom",
    degree: "Exchange year",
    description: `Final year of my BS ChemE degree was completed as an 
    exchange student at Imperial College London, where I also did my thesis: 
    Crystallisation Behaviour and the Effects of Cooling Rate & Sample Volume 
    of Sodium Dodecyl Sulfate in Aqueous Solution. Published: `,
    grades: "Grades: 4.47, Unweighted: 4,43  (2:1 equivalent)",
    thesisLink: "https://spiral.imperial.ac.uk/handle/10044/1/86881",
  },
];
const experience = [
  {
    company: "Academy Tech",
    date: "2022 - 2023",
    role: "Junior Full Stack Software Developer",
    location: "London, United Kingdom",
    description: `As a full stack software developer in the academy 
    scholar program, I have gained skills in industry-relevant technologies 
    and practices, including test-driven development and agile work styles. 
    In addition to technical abilities, the program have also had a focus 
    on developing leadership skills and emotional intelligence, learning to 
    navigate team dynamics and build team cohesion with a diverse group of 
    individuals. My responsibilities have included self-driven learning, 
    leading technical discussions and reviews, and receiving and giving 
    meaningful feedback to improve as a team member and leader.`,
  },
  {
    company: "Protium",
    date: "2021 - 2022",
    role: "Internship",
    location: "London, United Kingdom",
    description: `After completing my final year of study in London, I did a 
    6-month internship with the green-hydrogen energy company Protium. 
    My time there was spent jumping between different projects and completing 
    various tasks such as technical support, grant applications, research and 
    documentation.`,
  },
  {
    company: "Royal Institute of Technology (KTH)",
    date: "2019 - 2020",
    role: "Organiser exchange office",
    location: "Stockholm, Sweden",
    description: `Whilst studying I worked at the international exchange office 
    at my university. I helped with organising events to better the relationships 
    between incoming exchange- and Swedish students, improve the exchange website, 
    proof reading and content creation.`,
  },
  {
    company: "B-O-L-D Ltd",
    date: "2017 - 2018",
    role: "Sales & Marketing consultant",
    location: "London, United Kingdom",
    description: `Working closely with the company's CEOs to ensure all services 
    were to their satisfaction and company standard.Tasks included but were not 
    limited to; copy-writing sales e-mails, creating a relationship with clients, 
    attending corporate meetings, creating social media profiles & managing them, 
    making and researching ad campaigns over social media channels, creating 
    newsletters and researching leads.`,
  },
  {
    company: "3xH",
    date: "2016 - 2017",
    role: "Owner & Manager",
    location: "London, United Kingdom",
    description: `Founding and acting as CEO, marketing manager, financial manager, 
    baker and customer service for an online bakery. Working towards the company 
    making a profit, successfully collaborating with other online marketplaces and 
    making sure we had a unique selling point with our allergy free products we, I 
    was constantly renewing and developing.`,
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
const languages = [
  {
    lingo: "English",
    level: "Fluent",
  },
  {
    lingo: "Swedish",
    level: "Mother tongue",
  },
  {
    lingo: "Spanish",
    level: "Intermediate",
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
    <div className="content">
      <div className="about">
        <h1 className="about-top-title">
          Please take a look at my resume below
        </h1>
        <h3 className="about-txt-download">
          Or download it <DownloadPDF />
        </h3>
        <h4 className="about-title">Introduction</h4>
        <p className="about-intro">{introduction}</p>
        <hr />
        <hr />
        <h4 className="about-title">Education</h4>
        {education.map((obj, index) => {
          return (
            <>
              <div className="about-ed">
                <p className="about-date">
                  ({obj.date}) {obj.school} - {obj.location}
                </p>
                <p className="about-school"></p>
                <p className="about-degree">
                  <span>{obj.degree}</span> | <span>{obj.grades}</span>
                </p>
              </div>
              <p className="about-desc">
                {obj.description}
                {obj.thesisLink && <a href={obj.thesisLink}>link</a>}
              </p>
            </>
          );
        })}
        <hr />
        <hr />
        <h4 className="about-title">Experience</h4>
        {experience.map((obj) => {
          return (
            <>
              <p className="about-ex-title">
                ({obj.date}) {obj.company} | {obj.location}
              </p>
              <p></p>
              <p className="about-desc">{obj.description}</p>
              <hr />
            </>
          );
        })}
        <hr />
        <hr />
        <h4 className="about-title">Skills</h4>
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
        <h4 className="about-title">Softwares</h4>
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
        <hr />
        <h4 className="about-title">Languages</h4>
        {languages.map((el, index) => {
          return (
            <>
              <span>
                {el.lingo} | level: {el.level}
              </span>
              {index !== languages.length - 1 && <br />}
            </>
          );
        })}
        <hr />
        <h4 className="about-title">Hobbies</h4>
        {hobbies.map((el, index) => {
          return (
            <>
              <span>{el}</span>
              {index !== hobbies.length - 1 && <br />}
            </>
          );
        })}
        <hr />
        <hr />
        <hr />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
