import React from 'react';
import './appDrawer.css';
import DrawerIcon from '../../images/drawer.png';


class AppDrawer extends React.Component {

    //initialize state and props
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

    //render the drawer icon
    render() {
        return (
            <div id="app-drawer">
                <img src={DrawerIcon} alt="App drawer icon" onClick={this.handleClick} id="drawer-icon"/>
            </div>
        );
    }
}

export default AppDrawer;