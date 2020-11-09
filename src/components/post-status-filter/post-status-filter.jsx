import React, { Component } from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            {type: 'all', label: 'All'},
            {type: 'liked', label: 'Liked'}
        ]
    }
    

    render() {
        

        const buttons = this.buttons.map(({type, label}) => {

            const {buttons, statusFilterTweets} = this.props;
            const activeButton = buttons === type;
            
            const classActiveButton = activeButton ? 'btn-info' : 'btn-outline-secondary'

            return(
                <button type='button' 
                className={`btn ${classActiveButton}`}
                key={label}
                onClick={ () => statusFilterTweets(type)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}