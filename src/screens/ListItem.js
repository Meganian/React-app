import React  from 'react';
import injectSheet from 'react-jss'

function ListItem(props)  {
    const {classes, title, responsible,todoPriority, description, click  } = props;

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

export default injectSheet(styles)(ListItem);