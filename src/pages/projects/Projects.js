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
                <div className="repo-cards-div-main">
                    <a href="https://github.com/JakeJMattson/DiscordKt">
                        <img src="https://gh-card.dev/repos/JakeJMattson/DiscordKt.svg?fullname=" alt="DiscordKt"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/TouchControl">
                        <img src="https://gh-card.dev/repos/JakeJMattson/TouchControl.svg?fullname="
                             alt="TouchControl"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/EmbedBot">
                        <img src="https://gh-card.dev/repos/JakeJMattson/EmbedBot.svg?fullname=" alt="EmbedBot"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/ModMail">
                        <img src="https://gh-card.dev/repos/JakeJMattson/ModMail.svg?fullname=" alt="ModMail"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/AnyToImage">
                        <img src="https://gh-card.dev/repos/JakeJMattson/AnyToImage.svg?fullname=" alt="AnyToImage"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/FacialRecognition">
                        <img src="https://gh-card.dev/repos/JakeJMattson/FacialRecognition.svg?fullname="
                             alt="FacialRecognition"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/PixelDetails">
                        <img src="https://gh-card.dev/repos/JakeJMattson/PixelDetails.svg?fullname="
                             alt="PixelDetails"/>
                    </a>
                    <a href="https://github.com/JakeJMattson/TelloKt">
                        <img src="https://gh-card.dev/repos/JakeJMattson/TelloKt.svg?fullname=" alt="TelloKt"/>
                    </a>
                </div>
                <TopButton theme={this.props.theme}/>
            </div>
        );
    }
}

export default Projects;
