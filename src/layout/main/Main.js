import React, { Component } from 'react';
import injectSheet from 'react-jss';

import ToDoList from '../../screens/ToDoList';


class Main extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.Main}>
                <ToDoList />
            </div>
        )
    }
}

const styles = {
    Main: {
        margin: 'auto auto 30px',
        width: '60%'
    }
};

export default injectSheet(styles)(Main);