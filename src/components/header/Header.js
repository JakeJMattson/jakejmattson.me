import React, {Component} from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {Link, NavLink} from "react-router-dom";
import {greeting} from "../../portfolio.js";

const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
};

class Header extends Component {
    render() {
        const theme = this.props.theme;
        console.log(theme);
        return (
            <Fade top duration={1000} distance="20px">
                <div>
                    <header className="header">
                        <NavLink to={"home"} tag={Link} className="logo">
                            <span style={{color: theme.text}}> &lt;</span>
                            <span className="logo-name" style={{color: theme.text}}>
                {greeting.logo_name}
              </span>
                            <span style={{color: theme.text}}>/&gt;</span>
                        </NavLink>
                        <input className="menu-btn" type="checkbox" id="menu-btn"/>
                        <label className="menu-icon" htmlFor="menu-btn">
                            <span className="navicon"/>
                        </label>
                        <ul className="menu" style={{backgroundColor: theme.body}}>
                            <li>
                                <NavLink
                                    to="/home"
                                    tag={Link}
                                    activeStyle={{fontWeight: "bold"}}
                                    style={{color: theme.text}}
                                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                    onMouseOut={(event) => onMouseOut(event)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    tag={Link}
                                    activeStyle={{fontWeight: "bold"}}
                                    style={{color: theme.text}}
                                    onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                    onMouseOut={(event) => onMouseOut(event)}
                                >
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </header>
                </div>
            </Fade>
        );
    }
}

export default Header;
