import React from 'react';
import './title.css';


class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = {page:null};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            page:'projects',
        });
        this.props.onclick(this.state.page);
    }

    render() {
        return (
            <React.Fragment>
                {/* Title for web app */}
                <p id="prefix" className="title">Hello, my name is</p>
                <p id="name" className="title">Rudy Flores</p>
                <p id="description" className="title">I'm a Software Engineer based in Chicago, IL specializing in Computer Networks and Cybersecurity.<br/> I am currently working at Northwestern Settlement as a web developer and IT intern.</p>

                {/* takes the user to the projects view */}
                <button id="btn-learn" onClick={this.handleClick}>View Projects</button>
            </React.Fragment>
        );
    }
}

export default Title;