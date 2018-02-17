import React, { Component } from 'react'
import Collapsible from "../screens/Collapsible"
import injectSheet from "react-jss"
import cloud from './img/cloud.svg'

class CollapsibleContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contacts: []
        }
    }
    componentWillMount(){
        localStorage.getItem('contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts')),
            isLoading: false
        })
    }
    componentDidMount() {
        const date = localStorage.getItem('contactsDate');
        const contactsDate =  date && new Date(parseInt(date, 10));
        const now = new Date();
        const dataAge = Math.round((now-contactsDate)/(1000 * 60 ));
        const tooOld = dataAge >= 15;

        tooOld ? this.fetchData(): console.log(`using data from Localstorage that are ${dataAge} minutes age`)

    }

    fetchData() {
        fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
            .then(response => response.json())
            .then(parsedJSON => parsedJSON.results.map(user => ({
                name:`${user.name.first} ${user.name.last}`,
                username: `${user.login.username}`,
                email: `${user.email}`,
                location: `${user.location.street}, ${user.location.city}`

            })))
            .then(contacts => this.setState({
                contacts,
                isLoading: false
            }))
            .catch(error => console.log('parsing failed', error))
    }

    componentWillUpdate(nexrProps, nextState){
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
        localStorage.setItem('contactsDate', Date.now());

    }

    render() {
        const {classes} = this.props;
        const {isLoading, contacts } = this.state;

        return (
            <div>
                <header>
                    <img src={cloud} className={classes.cloud} alt='cloud'/>
                    <h1>Fetching Data <button className="btn btn-sm btn-info" onClick={(e)=> this.fetchData()}>Feth now</button></h1>
                </header>
                <div className={`content ${isLoading ? classes.isLoading : "" }`}>
                    <div className="panel-group">
                        {!isLoading && contacts.length > 0 ? contacts.map(contact => {
                            const {username, name, email, location} = contact;
                            return <Collapsible key={username} title={name}><p>{email}<br/>{location}</p></Collapsible>
                            }) : null
                        }
                    </div>
                </div>
                <div className={classes.loader}>
                    <div className={classes.icon}> lll</div>
                </div>
            </div>

        )
    }
}

const styles = {
    cloud: {
        width: '50px'
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        height: '100px',
        transform: 'translate(-50%,-50%)',
        opacity: '0',
        visibility: 'hidden',
        transitionDelay: '.2s',

    },
    icon: {
        position: 'absolute',
        top: '-150px',
        left: '0',
        width: '100px',
        height: '100px',
        background: 'url(src/layout/img/cloud.svg) no-repeat 0 0',
        backgroundSize: '248px 248px'
    },
    isLoading: {
        loader: {
            opacity: '1',
            visibility: 'visible',
            transition: 'opacity .3s linear, visibility .3s linear',
            zIndex: '3'
        },
        icon: {
            animation: 'spin 500ms infinite linear',
            '@keyframes spin': {
                from: {transform: 'rotate(0)', transformOrigin: 'center center'},
                to: {transform: 'rotate(360)', transformOrigin: 'center center'}
            }
        }
    }
};

export default injectSheet(styles)(CollapsibleContent);