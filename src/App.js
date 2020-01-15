import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import darkmodejs from "@assortment/darkmodejs"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"
import globalStyles from "./globalStyles"
import themes from "./themes"

import ProjectPage from "./components/pages/ProjectsPage";
import HomePage from "./components/pages/HomePage";

const IndexPage = () => {
    const [theme, setTheme] = useState("dark");

    const onChange = (activeTheme, themes) => {
        if (activeTheme === themes.light) {
            setTheme(themes.light);
            console.log(`Theme: ${themes.light}`);
        } else {
            setTheme(themes.dark);
            console.log(`Theme: ${themes.dark}`);
        }
    };

    useEffect(() => {
        const dmjs = darkmodejs({ onChange });

        return () => {
            dmjs.removeListeners();
        }
    }, []);

    return (
        <ThemeProvider theme={themes[theme]}>
            <Global styles={globalStyles}/>
            <Router>
                <div>
                    <Navbar bg="secondary" variant="dark">
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
        </ThemeProvider>
    );
};

export default IndexPage