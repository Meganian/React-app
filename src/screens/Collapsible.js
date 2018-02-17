import React, { Component } from 'react'
import injectSheet from 'react-jss'

class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }

    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        });
    }

    render() {
        const {title, classes, children} = this.props;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height: 0;
        return (
            <div className={`panel ${isExpanded ? classes.isExpanded : ''}`} onClick={(e)=> this.handleToggle(e)}>
                <div className={classes.panelHeading}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.panelCollapse} style={{height:currentHeight+'px'}}>
                    <div className={classes.panelBody} ref='inner'>
                        {children}
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    isExpanded: {
        maxHeight: '200px'
    },
    panelCollapse: {
        height: '0px',
        overflow: 'hidden',
        transition: 'height 0.5s cubic-bezier(.525,.66,.495,1.4)'
    },
    panelHeading: {
        cursor: 'pointer'
    },
    panelBody: {
        border: 'none !important'
    }
};

export default injectSheet(styles)(Collapsible);