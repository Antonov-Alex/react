import React, {Component} from 'react';

//import './itemList.css';
import styled from 'styled-components';
import Spiner from '../spiner';
import ErrorMassage from '../errorMassage';
import PropTypes from 'prop-types';

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

    

    state = {
         itemList: null,
         error: false,
    }

    // static defaultProps = {
    //     onItemSelected: () => {}
    // }
    
    // static PropTypes = {
    //     onItemSelected: PropTypes.func,
        
    // }

    componentDidMount() {

        const {getData} = this.props;
        

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    componentDidCatch  ()  {
        
        this.setState({
            error: true
        })
     }

    renderItems(arr){

        //const id = Math.floor(Math.random()*140 + 41);

        return arr.map((item) => {
            const {id} = item;
            const lable = this.props.renderItem(item);

           return (
               
            <li 
               key={id}
               className="list-group-item"
               onClick={ () => this.props.onItemSelected(id)}
               >
             
               {lable}
               
           </li>
           )
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMassage/>
        }

        const {itemList} = this.state;

        if(!itemList) {
               return <Spiner/>
        }

        const items = this.renderItems(itemList);

        return (
            <AppList>
                {items}
            </AppList>
        );
    }
}

