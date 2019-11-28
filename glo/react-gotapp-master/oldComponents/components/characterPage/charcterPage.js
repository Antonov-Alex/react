import React, {Component} from 'react';

import ItemList from '../itemList';
import ItemDetails, {Field} from '../charDetails';
import ErrorMassage from '../errorMassage';
import gotService from '../services/gotServices';
import RowBlock from '../rowBlock';




export default class CharacterPage  extends Component{
    
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

        if (this.state.error) {
            return <ErrorMassage/>
        }
        
        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharecters}
            renderItem={({name, gender}) => `${name} (${gender})`}
            />
        )

        const itemDetails = (
            <ItemDetails 
                    charId={this.state.selectedChar}>
                 <Field field="gender" lable="Gender" />
                 <Field field="born" lable="Born" />

           </ItemDetails>
        )

        return(
           <RowBlock left={itemList} right={itemDetails} />
        )
    }
}