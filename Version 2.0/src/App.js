import React from 'react';
import './App.css';
import ViewController from './components/view-controller/viewController';


// Animations for drawer icon
const right = 'rotateRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const left = 'rotateLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

class App extends React.Component {

  // State for defining when the drawer is active
  constructor(props) {
    super(props);
    this.state = {
      active:false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Rotate app drawer
  handleClick(img) {
    this.setState({
      active:!this.state.active,
    });
    img.animation = this.state.active ? right : left;
    img.animationFillMode = 'forwards';
  }

  // Render the app drawer & the current view
  render() {
    return (
      <React.Fragment>
        <ViewController active={this.state.active} onclick={this.handleClick}/>
      </React.Fragment>
    );
  }
}

export default App;