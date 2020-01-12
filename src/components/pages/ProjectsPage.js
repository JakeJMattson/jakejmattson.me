import ProjectCard from "../ProjectCard";
import React from "react";

export default function ProjectPage() {
    return (
        <div>
            <span className="navbar-brand" style={{ fontSize: "xx-large" }}>Personal Projects</span>
            <div className="row">
                <ProjectCard
                    title="Demo Project"
                    description="Description of project"
                    imageLink=""
                    pageLink=""
                    repoLink=""
                    gitHost="GitHub"
                />
            </div>
            <span className="navbar-brand" style={{ fontSize: "xx-large" }}>Contributed Projects</span>
            <ProjectCard
                title="Demo Project"
                description="Description of project"
                imageLink=""
                pageLink=""
                repoLink=""
                gitHost="GitLab"
            />
        </div>
    );
}