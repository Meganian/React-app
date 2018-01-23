import React  from 'react';
import {  Link } from 'react-router-dom';

function Header(props)  {

    return (
        <div className="Header">
            <h1 className="Header-title">{props.title}</h1>
            <Link to="/todo"><button className='btn btn-success btn-lg' ><span className='glyphicon glyphicon-pencil'>  Check To Do List </span></button> </Link>
            <Link to="/next"><button className='btn btn-success btn-lg' ><span className='glyphicon glyphicon-pawn'>  Coming soon... </span></button> </Link>
            <Link to="/nextone"><button className='btn btn-success btn-lg' ><span className='glyphicon glyphicon-king'>  Coming soon... </span></button> </Link>
        </div>
    );
}

export default Header;