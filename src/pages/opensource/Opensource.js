import React, {Component} from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

class Opensource extends Component {
    render() {
        return (
            <div className="opensource-main">
                <Header theme={this.props.theme}/>
                <img
                    src="https://github-readme-stats.vercel.app/api?username=JakeJMattson&hide=issues&count_private=true&show_icons=true&theme=react"
                    alt="Github Stats"/>
                <img src="http://ghchart.rshah.org/00bfff/jakejmattson" alt="Github Chart"/>
                <TopButton theme={this.props.theme}/>
            </div>
        );
    }
}

export default Opensource;
