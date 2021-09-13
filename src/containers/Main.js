import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Projects from "../pages/projects/Projects";

export default class Main extends Component {
    render() {
        const theme = this.props.theme;
        console.log(theme);
        return (
            <div>
                <HashRouter basename="/">
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => <Home {...props} theme={this.props.theme}/>}
                        />
                        <Route
                            path="/home"
                            render={(props) => <Home {...props} theme={this.props.theme}/>}
                        />
                        <Route
                            path="/projects"
                            render={(props) => (
                                <Projects {...props} theme={this.props.theme}/>
                            )}
                        />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
