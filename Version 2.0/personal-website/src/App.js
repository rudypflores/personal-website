import React from 'react';
import './App.css';
import AppDrawer from './components/app-drawer/appDrawer';
import ViewController from './components/view-controller/viewController';


const right = 'rotateRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const left = 'rotateLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
let swipe = false;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active:false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle swiping to the right
  componentDidMount() {
    let touchstartX = 0;
    let touchendX = 0;

    const gestureZone = document.getElementById('App');

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        if(touchendX > touchstartX) {
          alert("This is an upcoming feature and its a work in progress!");
          //implement state change when swiped to the right
        }
    }, false); 
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