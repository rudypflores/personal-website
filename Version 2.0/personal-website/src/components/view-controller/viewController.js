import React from 'react';
import Drawer from '../app-drawer/drawer';
import '../../App.css';
import Title from '../title/title';


class ViewController extends React.Component {

    //initialize state and bind handler
    constructor(props) {
        super(props);
        this.state = {
            page:'home',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //Change the state based on user click
    handleClick(npage) {
        this.setState({
            page:npage,
        });
    }
    
    //when new state is changed the switch statement will swap the view
    loadView() {
        switch(this.state.page) {
            case 'home':
                return <Title onclick={this.handleClick}/>;
            default:
                return null;
        }
    }

    //Render the drawer and current view
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