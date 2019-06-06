import React from 'react';
import './projects.css'


class Projects extends React.Component {

    // Update view when a project is clicked
    handleClick(npage) {
        this.props.onclick(npage);
    }

    render() {
        return (
            <React.Fragment>
                <p className="projects-title">Projects</p>
                <p className="projects-description">
                    The following projects have been made during my
                    freetime. The purpose of developing the following projects
                    was for fun and learning new technologies,<br/> as well
                    as experiment and learn about how powerful or useful such
                    technologies can be.
                </p>
                <div className="projects-options">
                    <button className="btn-projects" onClick={this.handleClick.bind(this,'project-1')}>StackRecette</button>
                    <button className="btn-projects" onClick={this.handleClick.bind(this,'project-2')}>Material-Pokédex</button>
                    <button className="btn-projects" onClick={this.handleClick.bind(this,'project-3')}>Project-Prototype</button>
                    <button className="btn-projects" onClick={this.handleClick.bind(this,'project-4')}>Transposer</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Projects;