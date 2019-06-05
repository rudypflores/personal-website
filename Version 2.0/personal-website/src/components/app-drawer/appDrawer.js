import React from 'react';
import './appDrawer.css';
import DrawerIcon from '../../images/drawer.png';
import Drawer from './drawer';


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

    render() {
        return (
            <div id="app-drawer">
                <img src={DrawerIcon} alt="App drawer icon" onClick={this.handleClick} id="drawer"/>
            </div>
        );
    }
}

export default AppDrawer;