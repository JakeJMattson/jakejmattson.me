import React                                    from "react";
import { GitHubProjectCard, GitLabProjectCard } from "../ProjectCard";

import KUtils  from "./../../assets/KUtils.png"
import ModMail from "./../../assets/ModMail.png"
import HotBot from "./../../assets/HotBot.png"

export default function ProjectPage() {
    return (
        <div>
            <span className="navbar-brand" style={{ fontSize: "xx-large" }}>Personal Projects</span>
            <div className="row">
                <GitHubProjectCard
                    title="TouchControl"
                    description="Control at your fingertips."
                    imageLink=""
                    pageLink=""
                />
                <GitHubProjectCard
                    title="EmbedBot"
                    description="A Discord bot for managing embeds."
                    imageLink=""
                    pageLink=""
                />
                <GitHubProjectCard
                    title="PixelDetails"
                    description="Mouse location based pixel details."
                    imageLink=""
                    pageLink=""
                />
                <GitHubProjectCard
                    title="AnyToImage"
                    description="Convert files to images."
                    imageLink=""
                    pageLink=""
                />
                <GitHubProjectCard
                    title="SpamBot"
                    description="Multiplying automated browsers."
                    imageLink=""
                    pageLink=""
                />
                <GitHubProjectCard
                    title="FacialRecognition"
                    description="Facial detection and recognition."
                    imageLink=""
                    pageLink=""
                />
            </div>
            <span className="navbar-brand" style={{ fontSize: "xx-large" }}>Contributed Projects</span>
            <div className="row">
                <GitLabProjectCard
                    title="KUtils"
                    description="A Kotlin Discord API."
                    imageLink={KUtils}
                    pageLink=""
                    repoLink="https://gitlab.com/Aberrantfox/KUtils"
                />
                <GitLabProjectCard
                    title="ModMail"
                    description="A report management discord bot."
                    imageLink={ModMail}
                    pageLink=""
                    repoLink="https://gitlab.com/Aberrantfox/WarmBot"
                />
                <GitLabProjectCard
                    title="HotBot"
                    description="A programming server discord bot."
                    imageLink={HotBot}
                    pageLink=""
                    repoLink="https://gitlab.com/Aberrantfox/hotbot"
                />
            </div>
        </div>
    );
}