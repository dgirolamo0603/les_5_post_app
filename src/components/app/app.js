import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatus from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const data=[
        {label: 'Going to learn React', important: true, id:"eguu"},
        {label: 'That is so good', important: false, id:"ivjei"},
        {label: 'I need s break', important: false, id:"dvjhei"}
];
const App=()=>{
    return ( 
    <div className="app"> 
    < AppHeader/>
            <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatus/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
    </div>
        )

}
export default App;