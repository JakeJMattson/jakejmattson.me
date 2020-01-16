import React               from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
    return (
        <nav className="navbar navbar-expand pt-3 pb-4">
            <span className="navbar-brand">Code Portfolio</span>
            <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" color={"#00bfff"}
                           href="https://github.com/JakeJMattson">
                            <FontAwesomeIcon icon={['fab', 'github']}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" color={"#00bfff"}
                           href="https://gitlab.com/JakeJMattson">
                            <FontAwesomeIcon icon={['fab', 'gitlab']}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" color={"#00bfff"}
                           href="https://discordapp.com/users/254786431656919051/">
                            <FontAwesomeIcon icon={['fab', 'discord']}/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}