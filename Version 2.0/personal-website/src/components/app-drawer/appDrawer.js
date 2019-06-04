import React from 'react';
import './appDrawer.css';
import Drawer from '../../images/drawer.png';


class AppDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //This function will toggle the active state 
    //& play the rotation animation
    handleClick() {
        this.setState({
            active:!this.state.active,
        });

        const drawer = document.getElementById('drawer').style;

        if(this.state.active) {
            drawer.animation = 'rotateRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; 
            drawer.animationFillMode = 'forwards';
        } else {
            drawer.animation = 'rotateLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            drawer.animationFillMode = 'forwards';
        }
    }

    displayDrawer() {
        if(this.state.active) {
            //some component for the app drawer
            console.log("drawing the app drawer...");
        }
    }

    render() {
        return (
            <div id="app-drawer">
                {this.displayDrawer()}
                <img src={Drawer} alt="App drawer icon" onClick={this.handleClick} id="drawer"/>
            </div>
        );
    }
}

export default AppDrawer;