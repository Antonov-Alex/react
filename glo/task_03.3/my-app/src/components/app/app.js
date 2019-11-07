import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';



const App = () => {
    const data = [
        'ggkhfjghf',
        7,
        {lable: "Soon I'll get a job on junior frontend dev position", important: true, id: "scsdc"},
        {lable: "I am learning JS", important: false, id: "sdlfk"},
        {lable: "React is my favourite frameWork", important: false, id: "efkel"},
        {lable: "React is my favourite frameWork", important: false, id: "efel"},
    ];
    return (
       <div className="app">

           <AppHeader/>
           <div className="serch-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
           </div>
           <PostList posts={data}/>
           <PostAddForm/>
       </div>
    )
}

export default App;