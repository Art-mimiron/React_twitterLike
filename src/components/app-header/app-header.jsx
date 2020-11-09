import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allTweets}) => {
    return (
        <div className="app-header d-flex">
            <h1>Your thoughts</h1>
            <h2>{allTweets} records \ {liked} likes</h2>
        </div>
    )
}

export default AppHeader;