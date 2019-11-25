import React, {Component} from 'react';
import gotService from '../services/gotServices';
import ItemDetails, {Field} from '../charDetails';

export default class BooksItem extends Component{

    gotService = new gotService(); 


  

    render() {
        return (
            <ItemDetails 
            itemId={this.props.bookId}
            getData={this.gotService.getBook}
            >
         <Field field="numberOfPages" lable="Number of pages" />
         <Field field="publisher" lable="Publisher" />
         <Field field="released" lable="Released" />
         

   </ItemDetails>
        )
    }
}