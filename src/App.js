import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar"
import ProjectCard from "./components/ProjectCard";
import FooterBar from "./components/FooterBar";
import BannerBar from "./components/BannerBar";
import PageManager from "./components/PageManager";

function App() {
    return (
        <div>
            <NavigationBar/>
            <PageManager/>
            <BannerBar/>
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
            <FooterBar/>
        </div>
    );
}

export default App;
