import React from 'react';
import './App.css';
import AppDrawer from './components/app-drawer/appDrawer';
import ViewController from './components/view-controller/viewController';


const right = 'rotateRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const left = 'rotateLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active:false, 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(img) {
    this.setState({
      active:!this.state.active,
    });
    img.animation = this.state.active ? right : left;
    img.animationFillMode = 'forwards';
  }

  render() {
    return (
      <React.Fragment>
        {/* App Drawer */}
        <AppDrawer onclick={this.handleClick}/>
        {/* render the current view */}
        <ViewController active={this.state.active} onclick={this.handleClick}/>
      </React.Fragment>
    );
  }
}

export default App;
