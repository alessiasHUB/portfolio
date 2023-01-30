import { projects } from "../data/projectsData";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const projectList = projects.map((project, index) => {
    return (
      <div key={index} className="project">
        <img src={project.image} alt="" />
        <h3>{project.title}</h3>
        <p>
          {project.description}
          {project.descLink && <a href={project.descLink}>here</a>}
        </p>
        <br/>
        <a className="netlify-link" href={project.netlify}>Netlify</a>
        <span> </span>
        {project.gitHubBackEnd ? (
          <>
            <a className="github-link" href={project.gitHubFrontEnd}>GitHub front-end</a>
            <a className="github-link" href={project.gitHubBackEnd}>GitHub back-end</a>
            </>
        ) : (
          <a className="github-link" href={project.gitHubFrontEnd}>GitHub</a>
        )}
        <br/><br/>
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
      <br/>
      <br/><br/>
    </div>
  );
};

export default Projects;
