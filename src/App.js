import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import injectSheet from 'react-jss';

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
      const {classes} = this.props;
    return (
        <Router>
          <div className={classes.app}>
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

const styles = {
    app: {
        backgroundColor: '#4380b5',
        margin: 'auto'
    }
};

export default injectSheet(styles)(App);
