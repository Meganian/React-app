import React, { Component }  from 'react'
import injectSheet from 'react-jss'
import PropTypes from "prop-types"

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoTitle: '',
            todoResponsible: '',
            todoDescriptions: '',
            todoPriority: 'Lowest'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            todoTitle: '',
            todoResponsible: '',
            todoDescription: '',
            todoPriority: 'Lowest'
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.form}>
                <h3 className={classes.h3}>Add New ToDo</h3>
                <form className='form-horizontal' onSubmit={this.handleSubmit}>

                    <div className='form-group'>
                        <label htmlFor="inputTodoTitle" className='col-sm-2 control-label'>Todo</label>
                        <div className='col-sm-10'>
                            <input
                                name='todoTitle'
                                type="text"
                                className='form-control'
                                id='inputTodoTitle'
                                value={this.state.todoTitle}
                                onChange={this.handleInputChange}
                                placeholder='Title'
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="inputTodoResponsible" className='col-sm-2 control-label'>Responsible</label>
                        <div className='col-sm-10'>
                            <input
                                name='todoResponsible'
                                type="text"
                                className='form-control'
                                id='inputTodoResponsible'
                                value={this.state.todoResponsible}
                                onChange={this.handleInputChange}
                                placeholder='Responsible'
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                        <textarea   name="todoDescription"
                                    className="form-control"
                                    rows="3"
                                    id="inputTodoDesc"
                                    value={this.state.todoDescription}
                                    onChange={this.handleInputChange}>
                        </textarea>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="inputTodoPriority" className='col-sm-2 control-label'>Priority</label>
                        <div className='col-sm-10'>
                            <select
                                name='todoPrority'
                                className='form-control'
                                id='inputTodoPriority'
                                value={this.state.todoPriority}
                                onChange={this.handleInputChange}
                            >
                                <option>Lowest</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>Heigh</option>
                                <option>Highest</option>
                            </select>
                        </div>
                    </div>

                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <button type='submit' className='btn btn-success'>Add Todo</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const styles = {
    form: {
        margin: '50px auto 40px',
        width: '60%'
    },
    h3: {
        textAlign: 'center'
    }
};

Form.propTypes = {
    classes: PropTypes.object
};

export default injectSheet(styles)(Form);