import { projects } from "../data/projectsData";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const projectList = projects.map((project, index) => {
    return (
      <div className="content" key={index}>
        <img src={project.image} alt="" />
        <h3>{project.title}</h3>
        <p>
          {project.description}
          {project.descLink && <a href={project.descLink}>here</a>}
        </p>
        <a href={project.netlify}>Netlify link</a>
        <span> </span>
        {project.gitHubBackEnd ? (
          <div>
            <a href={project.gitHubFrontEnd}>GitHub front-end link</a>
            <br />
            <a href={project.gitHubBackEnd}>GitHub back-end link</a>
          </div>
        ) : (
          <a href={project.gitHubFrontEnd}>GitHub link</a>
        )}
        <p>
          {project.skills.map((skill, index) => {
            return (
              <button className="skill-btn" key={index}>
                {skill}
              </button>
            );
          })}
        </p>
      </div>
    );
  });

  return (
    <div className="content">
      <h2 className="sub-title">My projects</h2>
      {projectList}
    </div>
  );
};

export default Projects;
