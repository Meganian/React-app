import React, { Component } from 'react';
import ToDoList from '../../screens/ToDoList';

class Main extends Component {

    render() {
        return (
            <div className='Main'>
                <ToDoList />
            </div>
        )
    }
}

export default Main;