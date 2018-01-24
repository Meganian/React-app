import React  from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

function Header({classes, ...props})  {
    return (
        <div className={classes.Header}>
            <h1 className={classes.HeaderTitle}>{props.title}</h1>
            <Link to="/todo"><button className='btn btn-success btn-lg' ><span className='glyphicon glyphicon-pencil'>  Check To Do List </span></button> </Link>
            <Link to="/next"><button className='btn btn-success btn-lg' ><span className='glyphicon glyphicon-pawn'>  Coming soon... </span></button> </Link>
            <Link to="/nextone"><button className='btn btn-success btn-lg' ><span className='glyphicon glyphicon-king'>  Coming soon... </span></button> </Link>
        </div>
    );
}

const styles = {
    Header: {
        backgroundColor: '#263238',
        textTransform: 'uppercase',
        height: '175px',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
    },
    HeaderTitle: {
        fontWeight: 'bold',
        fontSize: '2.5em',
        marginBottom: '20px'
    }
};

Header.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string.isRequired
};

export default injectSheet(styles)(Header);