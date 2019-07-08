import React from 'react';

import '../../App.css';

import Title from '../title/title';
import Projects from '../projects/projects';
import Drawer from '../app-drawer/drawer';
import { StackRecette, MaterialPokedex, ProjectPrototype, Transposer } from '../projects/repository';
import Education from '../education/education';
import Skills from '../skills/skills';
import Resume from '../resume/resume';


class ViewController extends React.Component {

    // State that determines the current view in the web application
    constructor(props) {
        super(props);
        this.state = {
            page:'home',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // Change the state based on user click on event specified
    handleClick(npage) {
        this.setState({
            page:npage,
        });
    }
    
    // when new state is changed the switch statement will swap the view
    // into the current page state
    loadView() {
        switch(this.state.page) {
            
            // Home view
            case 'home':
                return <Title onclick={this.handleClick}/>;
            
            // Projects view
            case 'projects':
                return <Projects onclick={this.handleClick}/>;

                // Nested pages
                case 'project-1':
                    return <StackRecette/>;
                case 'project-2':
                    return <MaterialPokedex/>;
                case 'project-3':
                    return <ProjectPrototype/>;
                case 'project-4':
                    return <Transposer/>;

            // Education view
            case 'education':
                return <Education/>;

            // Skills view
            case 'skills':
                return <Skills onclick={this.handleClick}/>;

            // Resume view
            case 'resume':
                return <Resume/>;

            // If no view is found
            default:
                console.warn("view not found!");
                return null;
        }
    }

    // Render the drawer and current view
    render() {
        return (
            <React.Fragment>
                <Drawer active={this.props.active} onclick={this.handleClick} onclickParent={this.props.onclick} view={this.state.page}/>
                <div id="App">{this.loadView()}</div>
            </React.Fragment>
        );
    }
}

export default ViewController;