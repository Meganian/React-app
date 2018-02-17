import React, { Component } from 'react'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'

import ToDoContent from './layout/ToDoContent'
import CollapsibleContent from './layout/CollapsibleContent'
import ConverterContent from './layout/ConverterContent'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
        <Header title={'React apps'} />
        <Router>
          <div className="App">
              <Link to="/">ToDo </Link>
              <Link to="/collapsible">Collapsible </Link>
              <Link to="/converter">Converter </Link>


            <Route exact path="/" component={ToDoContent} />
            <Route path="/collapsible" component={CollapsibleContent} />
            <Route path="/converter" component={ConverterContent} />
          </div>

        </Router>
            <Footer name={'Company name'} year={'2018'} />
        </div>
    );
  }
}

export default App;
