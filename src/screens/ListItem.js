import React  from 'react';


function ListItem(props)  {

    return (
        <div className='ListItem list-group-item' >
            <h4 className='list-group-item-heading'>{props.title}</h4>
            <p className='glyphicon glyphicon-user'> {props.responsible}<small><span className='label label-info'>{props.todoPriority}</span></small></p>
            <p>{props.description}</p>
            <button className='btn btn-danger btn-sm' onClick={props.click}><span className='glyphicon glyphicon-trash'></span> Delete</button>
        </div>
    );
}

export default ListItem;