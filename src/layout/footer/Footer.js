import React  from 'react';
import injectSheet from 'react-jss';

function Footer({classes, ...props}) {
    return (
        <footer className={classes.footer}>
            <p className={classes.footerTitle}>{props.name} {props.year}</p>
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
    }
};

export default injectSheet(styles)(Footer);