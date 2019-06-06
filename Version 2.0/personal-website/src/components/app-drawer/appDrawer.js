import React from 'react';
import './appDrawer.css';
import DrawerIcon from '../../images/drawer.png';
import GithubIcon from '../../images/github.jpg';


class AppDrawer extends React.Component {

    // State for determining if the app drawer has been clicked
    constructor(props) {
        super(props);
        this.state = {
            clicked:false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //This function will toggle the clicked state 
    //& play the rotation animation
    handleClick() {
        const drawer = document.getElementById('drawer-icon').style;

        this.setState({
            clicked:!this.state.clicked,
        });

        this.props.onclick(drawer);
    }

    //render the drawer icon & GitHub logo
    render() {
        return (
            <div id="app-drawer">
                <img src={DrawerIcon} alt="App drawer icon" onClick={this.handleClick} id="drawer-icon"/>
                <a href="https://www.github.com/rudypflores" target="_blank">
                    <img src={GithubIcon} alt="Github icon" id="github-icon"/>
                </a>
            </div>
        );
    }
}

export default AppDrawer;