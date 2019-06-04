import React from 'react';
import './App.css';
import Title from './components/title/title';
import AppDrawer from './components/app-drawer/appDrawer';


function App() {
  return (
    <React.Fragment>
      <AppDrawer />
      <div className="App"><Title/></div>
    </React.Fragment>
  );
}

export default App;
