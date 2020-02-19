import React, { useEffect, useState }             from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Navbar }                            from "react-bootstrap";
import darkmodejs                                 from "@assortment/darkmodejs"

import ProjectPage from "./components/pages/ProjectsPage";
import HomePage    from "./components/pages/HomePage";

const IndexPage = () => {
    const [theme, setTheme] = useState("dark");

    const onChange = (activeTheme) => {
        if (activeTheme === "light") {
            setTheme("light");
            console.log(`Theme: light`);
        } else {
            setTheme("dark");
            console.log(`Theme: dark`);
        }
    };

    useEffect(() => {
        const dmjs = darkmodejs({ onChange });

        return () => {
            dmjs.removeListeners();
        }
    }, []);


    return (
        <Router>
            <Navbar bg="primary">
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
        </Router>
    );
};

export default IndexPage