import React, {Component} from 'react';
import gotService from '../services/gotServices';
//import './itemList.css';
import styled from 'styled-components';
import Spiner from '../spiner';
import ErrorMassage from '../errorMassage';

const AppList = styled.ul`
     cursor: pointer;

     li{
        cursor: pointer;
        font-size: 16px;
        color: red;
        font-weight: bold;
     }
`;;
 




export default class ItemList extends Component {

    gotService = new gotService();

    state = {
         charList: null,
         error: false,
    }

    componentDidMount() {
        this.gotService.getAllCharecters()
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    }

    componentDidCatch  ()  {
        
        this.setState({
            error: true
        })
     }

    renderItems(arr){

        const id = Math.floor(Math.random()*140 + 41);

        return arr.map((item, i) => {
           return (
               
            <li 
               key={i}
               className="list-group-item"
               onClick={ () => this.props.onCharSelected(id)}
               >
             
               {item.name}
               
           </li>
           )
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMassage/>
        }

        const {charList} = this.state;

        if(!charList) {
               return <Spiner/>
        }

        const items = this.renderItems(charList);

        return (
            <AppList>
                {items}
            </AppList>
        );
    }
}