import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB7f2nJzlzlCdZzVjMCVk116y8AJj_zlEo';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
ReactDOM.render(<App/>, document.querySelector('.container'));