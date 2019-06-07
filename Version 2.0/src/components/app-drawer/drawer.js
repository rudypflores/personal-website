import React from 'react';

import './drawer.css';
import './appDrawer.css';

import DrawerIcon from '../../images/drawer.svg';
import HomeIcon from '../../images/home.svg';
import GithubIcon from '../../images/github.svg';
import ReturnIcon from '../../images/return.svg';


class Drawer extends React.Component {

    // State for determining if the app drawer has been clicked
    constructor(props) {
        super(props);
        this.state = {
            clicked:false,
        };
        this.handleClickDrawer = this.handleClickDrawer.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
    }

    // This function will toggle the clicked state 
    // & play the rotation animation
    handleClickDrawer() {
        const drawer = document.getElementById('drawer-icon').style;

        this.setState({
            clicked:!this.state.clicked,
        });

        this.props.onclickParent(drawer);
    }

    // Return user to home view when clicked
    handleClickHome() {
        // Variable for future home button click animation
        // const home = document.getElementById('home-icon').style;
        this.props.onclick('home');
    }

    // Change view when an option has been selected in the menu
    handleClickPage(npage) {
        this.props.onclick(npage);
        this.handleClickDrawer();
    }

    // Render the app drawer when the drawer icon has been clicked
    determineRender() {
        if(this.props.active) {
            return (
                <div id="drawer">
                    <ul id="options">
                        <li onClick={this.handleClickPage.bind(this, 'home')} className="odd">Home</li>
                        <li onClick={this.handleClickPage.bind(this, 'projects')}>Projects</li>
                        <li onClick={this.handleClickPage.bind(this, 'research')}>Research</li>
                        <li onClick={this.handleClickPage.bind(this, 'education')}>Education</li>
                        <li onClick={this.handleClickPage.bind(this, 'skills')}>Skills</li>
                        <li onClick={this.handleClickPage.bind(this, 'resume')}>Resume</li>
                    </ul>
                </div>
            );
        }
    }

    // Determine whether current view should have a return button or not
    determineReturn() {

        // Add a return button to the project home screen
        if(this.props.view === 'projects') {
            return <img src={ReturnIcon} alt="Return to previous view icon" id="return-icon" onClick={this.handleClickHome}/>;
        } 

        // Checks for all projects and adds the return button
        for(let i = 1; i <= 4; i++) {
            const currView = `project-${i}`;
            if(this.props.view === currView) {
                return <img src={ReturnIcon} alt="Return to previous view icon" id="return-icon" onClick={this.handleClickHome}/>;
            }
        }

        // prevent returning a return button if not within project scope
        return null;
    }

    // Render the app drawer icon, home icon, and GitHub icon
    render() {
        return (
            <React.Fragment>
                <div id="app-drawer">
                    <div id="wrapper">
                        {this.determineReturn()}
                        <img src={HomeIcon} alt="Return to home icon" id="home-icon" onClick={this.handleClickHome}/>
                        <img src={DrawerIcon} alt="App drawer icon" onClick={this.handleClickDrawer} id="drawer-icon"/>
                    </div>
                    <a href="https://www.github.com/rudypflores" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="Github icon" id="github-icon"/>
                    </a>
                </div>
                {this.determineRender()}
            </React.Fragment>
        );
    }
}

export default Drawer;