import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

function ListItem(props)  {

    const { classes, title, responsible, todoPriority, description, click } = props;

    return (
        <div className={classes.listItem +' list-group-item'} >
            <h4 className='list-group-item-heading'>{title}</h4>
            <p className='glyphicon glyphicon-user'> {responsible}<small><span className='label label-info'>{todoPriority}</span></small></p>
            <p>{description}</p>
            <button className='btn btn-danger btn-sm' onClick={click}><span className='glyphicon glyphicon-trash'> </span> Delete</button>
        </div>
    );
}

const styles = {
    listItem: {
        margin: '30px auto'
    }
};

ListItem.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    responsible: PropTypes.string,
    todoPriority: PropTypes.string,
    description: PropTypes.string,
    click: PropTypes.func.isRequired
};

export default injectSheet(styles)(ListItem);