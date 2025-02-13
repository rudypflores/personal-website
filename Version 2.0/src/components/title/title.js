import React from 'react';
import './title.css';


class Title extends React.Component {

    handleClick() {
        this.props.onclick('projects');
    }

    render() {
        return (
            <React.Fragment>
                {/* Title for web app */}
                <p id="prefix" className="title">Hello, my name is</p>
                <p id="name" className="title">Rudy Flores</p>
                <p id="description" className="title">I'm a Software Engineer based in Chicago, IL specializing in Computer Networks and Cybersecurity.<br/> I am currently working at Northwestern Settlement as a web developer and IT intern.</p>

                {/* takes the user to the projects view */}
                <button id="btn-learn" onClick={this.handleClick.bind(this)}>View Projects</button>
            </React.Fragment>
        );
    }
}

export default Title;