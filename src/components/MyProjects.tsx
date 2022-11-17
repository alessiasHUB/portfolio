import { projects } from "./data/projectsData"
import React from "react"

export default function MyProjects(): JSX.Element {

    const projectList = projects.map((project)=> {
        return (
            <div className="project" key={project.id}>
                <h3>{project.title}</h3>
                <a href={project.netlifyLink}>
                    {project.netlifyTitle}
                </a>
                <span>    </span>
                <a href={project.githubLink}>
                    GitHub link
                </a>
                <p>{project.description}</p>
            </div>
        )
    })

    return (
        <>
            <h2>My projects</h2>
            {projectList}
        </>
    )
}