import React from 'react';
import './appDrawer.css';
import DrawerIcon from '../../images/drawer.svg';
import HomeIcon from '../../images/home.svg';
import GithubIcon from '../../images/github.svg';


class AppDrawer extends React.Component {

    // State for determining if the app drawer has been clicked
    constructor(props) {
        super(props);
        this.state = {
            clicked:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // This function will toggle the clicked state 
    // & play the rotation animation
    handleClick() {
        const drawer = document.getElementById('drawer-icon').style;

        this.setState({
            clicked:!this.state.clicked,
        });

        this.props.onclick(drawer);
    }

    // Render the drawer icon & GitHub logo
    render() {
        return (
            <div id="app-drawer">
                <div id="wrapper">
                    <img src={DrawerIcon} alt="App drawer icon" onClick={this.handleClick} id="drawer-icon"/>
                    <img src={HomeIcon} alt="Return to home icon" id="home-icon"/>
                </div>
                <a href="https://www.github.com/rudypflores" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="Github icon" id="github-icon"/>
                </a>
            </div>
        );
    }
}

export default AppDrawer;