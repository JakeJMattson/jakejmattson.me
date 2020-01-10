import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar"
import ProjectCard from "./components/ProjectCard";
import FooterBar from "./components/FooterBar";
import BannerBar from "./components/BannerBar";

function App() {
  return (
      <div>
        <NavigationBar/>
        <BannerBar/>
        <ProjectCard
            title = "Demo Project"
            description = "Description of project"
            imageLink = ""
            pageLink = ""
            repoLink = ""
            gitHost = "GitHub"
        />
        <FooterBar/>
      </div>
  );
}

export default App;
