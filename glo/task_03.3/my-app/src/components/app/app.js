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
                
                
                {lable: "Soon I'll get a job on junior frontend dev position", important: true, id: nextId()},
                {lable: "I am learning JS", important: false, id: nextId()},
                {lable: "React is my favourite frameWork", important: false, id: nextId()},
             ]
             
           };

           this.deleteItem = this.deleteItem.bind(this);
           this.addItem = this.addItem.bind(this);
           this.maxId = 4;
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
                console.log(data)
                return {
                    
                    data: newArr
                    
                }
            })
       }
   
      render(){
           return (
                  
                  <AppBlock>
 
                  <AppHeader/>
                      <div className="serch-panel d-flex">
                        <SearchPanel/>
                        <PostStatusFilter/>
                      </div>
                           <PostList posts={this.state.data}
                                     onDelete={ this.deleteItem }
                          />
                       <PostAddForm 
                          onAdd={this.addItem}
                       />
           
                   </AppBlock>
     )
   }
}
