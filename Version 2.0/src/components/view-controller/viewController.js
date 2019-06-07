import React from 'react';

import '../../App.css';

import Title from '../title/title';
import Projects from '../projects/projects';
import Drawer from '../app-drawer/drawer';
import { StackRecette, MaterialPokedex, ProjectPrototype, Transposer } from '../projects/repository';


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

        // print for debug purposes
        console.log(`rendering ${this.state.page}...`);

        switch(this.state.page) {
            case 'home':
                return <Title onclick={this.handleClick}/>;
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
                <Drawer active={this.props.active} onclick={this.handleClick} onclickParent={this.props.onclick}/>
                <div id="App">{this.loadView()}</div>
            </React.Fragment>
        );
    }
}

export default ViewController;