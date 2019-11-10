import React,{Component} from 'react';
//import {  Button, Input, InputGroup } from 'reactstrap';
//import styled from 'styled-components';


// const AddForm = styled.div`
//         display: flex;
//         margin-top: 20px;
//         width: auto;
//         flex-grow: 1;
//         margin-right: 3px;
//`

export default class PostAddForm extends Component {
     constructor(props) {
        super(props);
        this.state = {
              text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
     }
     onValueChange(evt){
       this.setState({
         text: evt.target.value
       })
     }

     onSubmit(evt) {
       evt.preventDefault();
       if(this.state.text === ''){
         return;
       }
       else{
        this.props.onAdd(this.state.text);
       }
        
        this.setState({
          text: ''
        })
     }

    render() {
      return (
        
         <form  className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
         >
               <input
                  type="text"
                  placeholder="О чём вы сейчас думаете?"
                  className="form-control new-post-label"
                  onChange={this.onValueChange}
                  value={this.state.text}
           />
           <button
                 
                 type="submit"
                 className="btn btn-outline-secondary"
                 
                 >
              Добавить
           </button>
         </form>
        
      )
    }
}
