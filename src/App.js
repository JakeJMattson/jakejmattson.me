import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectPage from "./components/pages/ProjectsPage";
import HomePage from "./components/pages/HomePage";
import { Navbar, Nav } from "react-bootstrap";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/projects">
                        <ProjectPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
