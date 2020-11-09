import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'

import './app.css';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            data : [
                {label: "Im learning React", favorit: false, liked: false, id: 1},
                {label: "yo sup", favorit: false, liked: false, id: 2},
                {label: "123", favorit: false, liked: false, id: 3}
            ],
            filter: '',
            button: 'all'
        }
        this.maxId = 4;
    };


    deleteTweet = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index+1)]

            return {data: newArr}
        }) 
    }

    addTweet = (tweet) => {
        const newTweet = {
            label: tweet,
            favorit: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newTweet]
            return {data: newArr}
        })

    }
    
    statusTweetChange = (id, item) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];

            const newItem = {...old, [item]: !old[item]};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {data: newArr}
        });
    }
    
    filteredTweets = (filter) => {
        this.setState({filter})
    }

    statusFilterTweets = (button) => {
        this.setState({button})
    }

    searchResults = (posts, filter) => {
        if (filter.length === 0) {
            return posts;
        }

        return posts.filter((posts) => {
            return posts.label.toLowerCase().indexOf(filter) > -1;
        })
    }

    likedTweets = (posts, button) => {
        if (button === 'liked') {
            return posts = posts.filter((item) => item.liked)
        } else {return posts}
    }




    render() {
        const {data, filter, button} = this.state
        const liked = data.filter((item) => item.liked).length,
              allTweets = data.length;

        const visiblePosts = this.likedTweets(this.searchResults(data, filter), button)

        return(
            <div className="app">
             <AppHeader
             liked = {liked}
             allTweets = {allTweets}/>
             <div className="search-panel d-flex">
                 <SearchPanel filteredTweets={this.filteredTweets}/>
                 <PostStatusFilter
                 buttons = {button}
                 statusFilterTweets = {this.statusFilterTweets}/>
             </div>
             <PostList 
             data={visiblePosts} 
             deleteTweet={this.deleteTweet} 
             statusTweetChange={this.statusTweetChange}/>
             <PostAddForm addTweet={this.addTweet}/>
            </div>
         )
    }
}
