import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import injectSheet from 'react-jss'
import Todo from './screens/Todo'
import Footer from './components/Footer'
import Header from './components/Header'
import PropTypes from "prop-types"


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
      const { classes } = this.props;
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
        background: 'linear-gradient(to bottom, rgba(167,65,255,1) 0%,rgba(84,128,253,1) 100%)',
        margin: 'auto'
    }
};

App.propTypes = {
    classes: PropTypes.object
};

export default injectSheet(styles)(App);
