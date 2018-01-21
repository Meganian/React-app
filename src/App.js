import React, { Component } from 'react';
import './App.css';
import Header from './layout/header/Header';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header title={'To Do List'} />
          <Main />
          <Footer name={'Company name'} year={'2018'} />
      </div>
    );
  }
}

export default App;
