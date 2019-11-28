import React, {Component} from 'react';
import './charDetails.css';
import styled from 'styled-components';
import gotService from '../services/gotServices';
import Spiner from '../spiner';
import ErrorMassage from '../errorMassage';

const Field = ({item, field, lable}) => {
   return(
    <AppListItem>
           <span className="term">{lable}</span>
           <span>{[field]}</span>
   </AppListItem>
   )
}

export {
    Field
}

const AppBlock = styled.div`
        background-color: #fff;
        padding: 25px 25px 15px 25px;
        margin-bottom: 40px;
        h4 {
            margin-bottom: 20px;
            text-align: center;
        }
    `
const AppListItem = styled.li`
      display: flex;
      justify-content: space-between;
      align-items: center;
`

export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
         char: null,
         book: null,
         error: false,
    }
    
    

    componentDidMount() {
        // const {getData} = this.props

        // getData();
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    componentDidCatch  ()  {
        
        this.setState({
            error: true
        })
     }

    updateChar(){
        const { charId } = this.props;
        if(!charId) {
            return;
        }

        this.gotService.getCharecter(charId)
            .then((char) => {
                this.setState({char})
            })

        //this.foo.bar = 0;
    }

    updateBook() {
         const { bookId} = this.props;
         if(!bookId) {
             return
         }
         this.gotService.getBook(bookId)
            .then((book) => {
              this.state({book})
            })
    }

    render() {

        if(!this.state.char) {
            return <Spiner/>
     }
        
       if (this.state.error) {
        return <ErrorMassage/>
     } 

        const {name, gender, born, died, culture} = this.state.char;

        return (

            <AppBlock>
                 <h4>{name}</h4>
        
                <ul className="list-group list-group-flush">

                   {this.props.children}
                </ul>
            </AppBlock>
        );
    }
}