import React, {Component} from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import {Fade} from "react-reveal";
import {projectsHeader} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <div className="projects-main">
                <Header theme={theme}/>
                <div className="basic-projects">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="projects-heading-div">
                            <div className="projects-heading-img-div">
                                <ProjectsImg theme={theme}/>
                            </div>
                            <div className="projects-heading-text-div">
                                <h1
                                    className="projects-heading-text"
                                    style={{color: theme.text}}
                                >
                                    {projectsHeader.title}
                                </h1>
                                <p
                                    className="projects-header-detail-text subTitle"
                                    style={{color: theme.secondaryText}}
                                >
                                    {projectsHeader["description"]}
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=JakeJMattson&hide=issues&count_private=true&show_icons=true&theme=react"
                        alt="Github Stats"
                    />
                </div>
                <div className="repo-cards-div-main">
                    <a href="https://github.com/JakeJMattson/DiscordKt">
                        <img
                            alt="DiscordKt"
                            src="https://gh-card.dev/repos/JakeJMattson/DiscordKt.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/TouchControl">
                        <img
                            alt="TouchControl"
                            src="https://gh-card.dev/repos/JakeJMattson/TouchControl.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/EmbedBot">
                        <img
                            alt="EmbedBot"
                            src="https://gh-card.dev/repos/JakeJMattson/EmbedBot.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/ModMail">
                        <img
                            alt="ModMail"
                            src="https://gh-card.dev/repos/JakeJMattson/ModMail.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/AnyToImage">
                        <img
                            alt="AnyToImage"
                            src="https://gh-card.dev/repos/JakeJMattson/AnyToImage.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/FacialRecognition">
                        <img
                            alt="FacialRecognition"
                            src="https://gh-card.dev/repos/JakeJMattson/FacialRecognition.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/PixelDetails">
                        <img
                            alt="PixelDetails"
                            src="https://gh-card.dev/repos/JakeJMattson/PixelDetails.svg"
                        />
                    </a>
                    <a href="https://github.com/JakeJMattson/TelloKt">
                        <img
                            alt="TelloKt"
                            src="https://gh-card.dev/repos/JakeJMattson/TelloKt.svg"
                        />
                    </a>
                </div>
                <TopButton theme={this.props.theme}/>
            </div>
        );
    }
}

export default Projects;
