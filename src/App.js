import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar"
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
      <body>
        <NavigationBar/>
        <ProjectCard
            title = "Demo Project"
            description = "Description of project"
            imageLink = ""
            pageLink = ""
            repoLink = ""
            gitHost = "GitHub"
        />
      </body>
  );
}

export default App;
