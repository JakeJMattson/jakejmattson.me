import React, {Component} from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
    render() {
        console.log(this.props.theme);
        return (
            <div>
                <Header theme={this.props.theme}/>
                <Greeting theme={this.props.theme}/>
                <TopButton theme={this.props.theme}/>
            </div>
        );
    }
}

export default Home;