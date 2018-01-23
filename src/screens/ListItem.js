import React  from 'react';


function ListItem(props)  {
    const {title, responsible,todoPriority, description, click  } = props;

    return (
        <div className='ListItem list-group-item' >
            <h4 className='list-group-item-heading'>{title}</h4>
            <p className='glyphicon glyphicon-user'> {responsible}<small><span className='label label-info'>{todoPriority}</span></small></p>
            <p>{description}</p>
            <button className='btn btn-danger btn-sm' onClick={click}><span className='glyphicon glyphicon-trash'> </span> Delete</button>
        </div>
    );
}

export default ListItem;