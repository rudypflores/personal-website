import React from 'react';
import './drawer.css';


class Drawer extends React.Component {
    render() {
        return (
            <div id="drawer">
                <ul id="options">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Research</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Resume</li>
                </ul>
            </div>
        );
    }
}

export default Drawer;