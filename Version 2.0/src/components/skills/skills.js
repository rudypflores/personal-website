import React from 'react';
import './skills.css';


class Skills extends React.Component {

    handleClick() {
        this.props.onclick('resume');
    }

    render() {
        return (
            <React.Fragment>
                <p className="s-title">Skills</p>
                <ul className="s-list">
                    <li>Java - 4 years</li>
                    <li>HTML5, CSS3 and JavaScript - 1 year</li>
                    <li>React - 9 months</li>
                    <li>Express - 5 months</li>
                    <li>Adobe Creative Cloud - 4 years</li>
                    <li>Git/Bash/Zsh - 1 year</li>
                    <li>Android Studio - 8 months</li>
                </ul>
                <p onClick={this.handleClick.bind(this)} className="s-ref">find out more on the resume page</p>
            </React.Fragment>
        );
    }
}

export default Skills;