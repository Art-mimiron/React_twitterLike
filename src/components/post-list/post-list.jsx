import React from 'react';
import PostListItem from '../post-list-item/post-list-item'
import './post-list.css';



const PostList = ({data, deleteTweet, statusTweetChange}) => {


    const element = data.map( (item) => {
        if (typeof data === 'object' && isEmpty(data)) {
            const {id, ...props} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...props} 
                    deleteTweet={() => deleteTweet(id)} 
                    onToggleImportant={() => statusTweetChange(id, 'favorit')}
                    onToggleLiked={() => statusTweetChange(id, 'liked')} />
                </li>
            ) 
        } return false;
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        } return false;
    }



    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default PostList;