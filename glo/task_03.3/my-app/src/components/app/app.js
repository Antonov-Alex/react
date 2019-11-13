import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component  {
       
       constructor(props){
           super(props);
           this.state = {
             data : [
                
                
                {lable: "Soon I'll get a job on junior frontend dev position", important: true, like: false, id: nextId()},
                {lable: "I am learning JS", important: false, like: false, id: nextId()},
                {lable: "React is my favourite frameWork", important: false, like:false, id: nextId()},
             ],

             term: '',
             filter: 'all',

             
           };

           this.deleteItem = this.deleteItem.bind(this);
           this.addItem = this.addItem.bind(this);
           this.onToggleLiked = this.onToggleLiked.bind(this);
           this.onToggleImportant = this.onToggleImportant.bind(this);
           this.onUpdateSearch = this.onUpdateSearch.bind(this);
           //this.onToggleMethod = this.onToggleMethod.bind(this);
           this.onFilterSelect = this.onFilterSelect.bind(this);
           
       }
       
       deleteItem(id) {
           this.setState(({data}) => {
               const index = data.findIndex(elem => elem.id === id);
               
               const before = data.slice(0, index);
               const after = data.slice(index + 1);
               const newArr = [...before, ...after];
               
               return {
                   data: newArr
               }
           })

       }
       addItem(body) {
            const newItem = {
                lable: body,
                important: false,
                id: nextId()
            } 
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                
                return {
                    
                    data: newArr
                    
                }
            })
       }

       onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)]

            return{
                data: newArr
            }
        })
       }

       onToggleLiked(id){
           this.setState(({data}) => {
               const index = data.findIndex(el => el.id === id);

               const old = data[index];
               const newItem = {...old, like: !old.like};

               const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)]

               return{
                   data: newArr
               }
           })
       }

    //    onToggleMethod(id, method){
    //     this.setState(({data}) => {
    //         const index = data.findIndex(el => el.id === id);
    //         const old = data[index];
    //         const newItem = {...old};
    //         newItem.method = method;
    //         console.log(newItem)
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)]

    //         return{
    //             data: newArr
    //         }
    //     })
    // }
     

       searchPost(items, term) {
               if(term.length === 0){
                   return items;
               }
               return items.filter((item) => {
                   return item.lable.indexOf(term) > -1;
               })
       }

       filterPost(items, filter){
           if(filter === 'like') {
               return items.filter(item => item.like);
           } else{
               return items;
           }
       }

       onUpdateSearch(term){
           this.setState({ term })
       }

       onFilterSelect(filter) {
           this.setState({ filter })
       }
   
      render(){
           const { data, term, filter } = this.state;
           const liked = data.filter(item => item.like).length;
           const allPosts = data.length;
           
           const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
           return (
                  
                  <AppBlock>
 
                  <AppHeader
                         liked={liked}
                         allPosts={allPosts}
                  />
                      <div className="serch-panel d-flex">
                        <SearchPanel
                               onUpdateSearch={this.onUpdateSearch}
                        />
                        <PostStatusFilter
                             filter={filter}
                             onFilterSelect={this.onFilterSelect}
                        />
                      </div>
                           <PostList posts={visiblePosts}
                                     onDelete={ this.deleteItem }
                                     onToggleImportant={this.onToggleImportant}
                                     onToggleLiked={this.onToggleLiked}
                                    //onToggleMethod={this.onToggleMethod}
                          />
                       <PostAddForm 
                          onAdd={this.addItem}
                       />
           
                   </AppBlock>
     )
   }
}
