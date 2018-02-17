import React  from 'react';

function Header(props)  {

    return (
        <div className="App-header">
            <h1 className="">{props.title}</h1>
        </div>
    );
}

export default Header;