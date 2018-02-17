import React  from 'react';

function Footer(props) {
    return (
        <footer className="">
            <p className="App-header">{props.name} {props.year}</p>
        </footer>
    );
}

export default Footer;