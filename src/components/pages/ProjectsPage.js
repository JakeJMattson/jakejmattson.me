import ProjectCard from "../ProjectCard";
import React from "react";

export default function ProjectPage() {
    return (
        <div>
            <span className="navbar-brand" style={{ fontSize: "xx-large" }}>Personal Projects</span>
            <div className="row">
                <ProjectCard
                    title="TouchControl"
                    description="Control at your fingertips."
                    imageLink=""
                    pageLink=""
                    repoLink="https://github.com/JakeJMattson/TouchControl/"
                    gitHost="GitHub"
                />
                <ProjectCard
                    title="EmbedBot"
                    description="A Discord bot for managing embeds."
                    imageLink=""
                    pageLink=""
                    repoLink="https://github.com/JakeJMattson/EmbedBot/"
                    gitHost="GitHub"
                />
                <ProjectCard
                    title="PixelDetails"
                    description="Mouse location based pixel details."
                    imageLink=""
                    pageLink=""
                    repoLink="https://github.com/JakeJMattson/PixelDetails/"
                    gitHost="GitHub"
                />
                <ProjectCard
                    title="AnyToImage"
                    description="Convert files to images."
                    imageLink=""
                    pageLink=""
                    repoLink="https://github.com/JakeJMattson/AnyToImage/"
                    gitHost="GitHub"
                />
                <ProjectCard
                    title="SpamBot"
                    description="Multiplying automated browsers."
                    imageLink=""
                    pageLink=""
                    repoLink="https://github.com/JakeJMattson/SpamBot/"
                    gitHost="GitHub"
                />
                <ProjectCard
                    title="FacialRecognition"
                    description="Facial detection and recognition."
                    imageLink=""
                    pageLink=""
                    repoLink="https://github.com/JakeJMattson/FacialRecognition/"
                    gitHost="GitHub"
                />
            </div>
            <span className="navbar-brand" style={{ fontSize: "xx-large" }}>Contributed Projects</span>
            <div className="row">
                <ProjectCard
                    title="KUtils"
                    description="A Kotlin Discord API."
                    imageLink=""
                    pageLink=""
                    repoLink=""
                    gitHost="GitLab"
                />
                <ProjectCard
                    title="WarmBot"
                    description="A report management discord bot."
                    imageLink=""
                    pageLink=""
                    repoLink=""
                    gitHost="GitLab"
                />
                <ProjectCard
                    title="HotBot"
                    description="A programming server discord bot."
                    imageLink=""
                    pageLink=""
                    repoLink=""
                    gitHost="GitLab"
                />
            </div>
        </div>
    );
}