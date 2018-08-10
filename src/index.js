import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB7f2nJzlzlCdZzVjMCVk116y8AJj_zlEo';


YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) {
    this.setState({ videos });
});

class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };
    }
    render() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
}
ReactDOM.render(<App/>, document.querySelector('.container'));