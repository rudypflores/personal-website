import React from 'react';
import './drawer.css';


class Drawer extends React.Component {

    handleClick(page) {
        //Access drawer-icon for rotating the icon back in place
        const img = document.getElementById('drawer-icon').style;
        this.props.onclick(page);
        this.props.onclickParent(img);
    }

    determineRender() {
        if(this.props.active) {
            return (
                <div id="drawer">
                    <ul id="options">
                        <li onClick={this.handleClick.bind(this, 'home')}>Home</li>
                        <li onClick={this.handleClick.bind(this, 'projects')}>Projects</li>
                        <li onClick={this.handleClick.bind(this, 'research')}>Research</li>
                        <li onClick={this.handleClick.bind(this, 'education')}>Education</li>
                        <li onClick={this.handleClick.bind(this, 'skills')}>Skills</li>
                        <li onClick={this.handleClick.bind(this, 'resume')}>Resume</li>
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <React.Fragment>{this.determineRender()}</React.Fragment>
        );
    }
}

export default Drawer;