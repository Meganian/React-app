import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

function Footer({classes, ...props}) {
    return (
        <footer className={classes.footer}>
            <p className={classes.footerTitle}>{props.name} {props.year}</p>
            <div className={classes.socialMedia +" glyphicon glyphicon-phone"}> </div>
            <div className={classes.socialMedia +" glyphicon glyphicon-thumbs-up"}> </div>
            <div className={classes.socialMedia +" glyphicon glyphicon-heart"}> </div>

        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#263238',
        height: '175px',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
    },
    footerTitle: {
        fontSize: '2em'
    },
    socialMedia: {
        marginRight: '10px',
        fontSize: '2rem'
    }
};

Footer.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string.isRequired
};

export default injectSheet(styles)(Footer);