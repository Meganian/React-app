import React, { Component } from 'react';
import ToDoList from '../screens/ToDoList';


class ToDoContent extends Component {

    render() {
        return (
            <div className='Main'>
                <ToDoList />
            </div>
        )
    }
}

export default ToDoContent;