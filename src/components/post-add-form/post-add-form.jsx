import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweet: ''
        }
    }

    takeTweet = (e) => {
        this.setState({tweet: e.target.value});
    }

    submitTweet = (e) => {
        e.preventDefault();
        if (this.state.tweet) {
            this.props.addTweet(this.state.tweet);
            this.setState({tweet: ''})
        }
    }

    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.submitTweet}>
                <input
                type="text"
                placeholder="type ur thought"
                className="form-control new-post-label"
                value={this.state.tweet}
                onChange={this.takeTweet}/>
                <button type="submit" className="btn btn-outline-secondary">
                Add
                </button>
            </form>
        )
    }
}