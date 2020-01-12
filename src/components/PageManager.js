import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function PageManager() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function Projects() {
    return <h2>Projects</h2>;
}