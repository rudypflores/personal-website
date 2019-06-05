import React from 'react';
import './App.css';
import Title from './components/title/title';
import AppDrawer from './components/app-drawer/appDrawer';
import Drawer from './components/app-drawer/drawer';


function App() {
  return (
    <React.Fragment>
      <AppDrawer />
      <Drawer />
      <div className="App"><Title /></div>
    </React.Fragment>
  );
}

export default App;
