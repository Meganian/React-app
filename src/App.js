import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Todo from './screens/Todo';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';


function Next() {
    return (
        <div>Coming soon...</div>
    )
}

function NexOne() {
    return (
        <div>Coming soon...</div>
    )
}

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Header title={'React apps'}/>


              <Switch>
                  <Route path="/todo" component={Todo}/>
                  <Route path="/next" component={Next}/>
                  <Route path="/nextone" component={NexOne}/>
              </Switch>

              <Footer name={'Company name'} year={'2018'} />
          </div>
        </Router>
    );
  }
}

export default App;
