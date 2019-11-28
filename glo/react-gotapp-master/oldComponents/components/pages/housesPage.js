import React, {Component} from 'react';

import ItemList from '../itemList';
import ItemDetails, {Field} from '../charDetails';
import ErrorMassage from '../errorMassage';
import gotService from '../services/gotServices';
import RowBlock from '../rowBlock';


export default class HousesPage extends Component {

    gotService = new gotService(); 

    state = {
        selectedChar: 130,
        error: false,

    }
    
    componentDidCatch  ()  {
        
        this.setState({
            error: true
        })
     }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMassage/>
        }
      
        
        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={({name}) => name}
            />
        )

        const ItemDetails = (
            <ItemDetails 
                    charId={this.state.selectedChar}>
                 <Field field="Region" lable="Region" />
                 <Field field="words" lable="Words" />
                 <Field field="titles" lable="Titles" />
                 

           </ItemDetails>
        )

        return(
           <RowBlock left={itemList} right={ItemDetails} />
        )
    }
}