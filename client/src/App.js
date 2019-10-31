import React, { Component } from 'react';
import Home from './components/HomePage';
import Main from './components/MainPage';
import './App.css';

class App extends Component {
  render() {
    // console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className='App'>
        {/* NEW HOME COMPONENT */}
        {/* <Home /> OLD HOME PAGE */}
        <Main />
      </div>
    );
  }
}

export default App;
