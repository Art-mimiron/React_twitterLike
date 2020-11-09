import React from 'react';
import './post-list-item.css';

 const PostListItem= ({label, liked, favorit, deleteTweet, onToggleImportant, onToggleLiked}) => {

    let classList = "app-list-item d-flex justify-content-between";

    if (favorit) {
        classList += " favorit"
    }
    if (liked) {
        classList += " like"
    }

    return(
    <div className={classList}>
        <span className="app-list-item-label" onClick={onToggleLiked} >
            {label}
        </span>

        <div className="d-flex justify-content-center align-items-center">
            <button className="btn-star btn-sm" onClick={onToggleImportant} >
                <i className="fa fa-star"></i>
            </button>
            <button className="btn-trash btn-sm" onClick={deleteTweet} >
                <i className="fa fa-trash-o"></i>
            </button>
                <i className="fa fa-heart"></i>
        </div>
    </div>
    )
}

export default PostListItem;