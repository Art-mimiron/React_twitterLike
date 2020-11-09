import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: ''
        }
    }

    takeFilter = (e) => {
        const filter = e.target.value;
        this.setState({filter});
        this.props.filteredTweets(filter.toLowerCase())
    }

    filterText = (e) => {
        
    }

    render() {
        return (
            <input 
            className="form-control search-input"
            type="text"
            placeholder="Search among thoughts"
            value={this.state.filter}
            onChange={this.takeFilter}
            />
        )
    }
}
