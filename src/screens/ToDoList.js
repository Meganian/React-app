import React, {Component} from 'react';
import Form from '../screens/Form';
import ListItem from './ListItem';

const todos = [
    {
        todoTitle: 'My first todo',
        todoResponsible: 'Ben',
        todoDescriptions: 'My first todo descriptions',
        todoPriority: 'low'
    },
    {
        todoTitle: 'My second todo',
        todoResponsible: 'John',
        todoDescriptions: 'My second todo descriptions',
        todoPriority: 'medium'
    },
    {
        todoTitle: 'My third todo',
        todoResponsible: 'Mark',
        todoDescriptions: 'My third todo descriptions',
        todoPriority: 'high'
    }
];

class List extends Component{
    constructor() {
        super();
        this.state = {
            todos
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleRemoveToDo(index) {

        this.setState({
            todos: this.state.todos.filter((e, i) => {
                console.log('index', index);
                return i !== index;
            })
        });
    }

    handleAddTodo(todo) {
        this.setState({todos: [...this.state.todos, todo]});
    }

   render(){
        return(
            <div>
                <Form onAddTodo={this.handleAddTodo} />
                <hr/>
                <ul className='list-group-item'>
                    <h4>ToDo Count: <span className={'badge'}>{this.state.todos.length}</span></h4>
                    {this.state.todos.map((todo, index) =>

                        <ListItem key={index}
                                  title={todo.todoTitle}
                                  click={this.handleRemoveToDo.bind(this, index)}
                                  description={todo.todoDescriptions}
                                  responsible={todo.todoResponsible}
                                  priority={todo.todoPriority}
                        />
                    )
                    }

                </ul>
            </div>
        );
    }
}

export default List;