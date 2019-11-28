import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/';
import  './toggleBtn.css';
import ErrorMassage from '../errorMassage';
import ItemList from '../itemList';
import ItemDetails from '../charDetails';
import gotService from '../services/gotServices';
import {BooksPage, HousesPage, BooksItem }from '../pages';

import {BrowserRouter as Router, Route} from 'react-router-dom';



 export default class App extends Component {

    gotService = new gotService(); 

          state = {
            active: true,
            error: false,
        

        //onToggleRandomChar = this.onToggleRandomChar.bind(this);
    };

    componentDidCatch  ()  {
       
       this.setState({
           error: true
       })
    }
    
  
    
    onToggleRandomChar = () =>{
      this.setState ((state) => {
          return {
             active: !state.active
          }
      })

      
    }
  

    render (){
        const { active } = this.state;
        const toggleRendomChar = active ? <RandomChar/> : null;
        
        if (this.state.error) {
            return <ErrorMassage/>
        }
        
        return (
           <Router>

        <div className="app">
                <Container>
                    <Header />
                </Container>

                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {toggleRendomChar}
    
                            <button className="toggle-btn"
                                   onClick={ this.onToggleRandomChar}
                                    
                            >Toggle RandomChar</button>
                        </Col>
                    </Row>
                    <Route path="/characters" component={CharacterPage} />
                    
                    <Route path="/houses" component={HousesPage} />
                    <Route path="/books" exact component={BooksPage} />
                    <Route path="/books/:id" render={
                        ({ match }) => {
                            const {id} = match.params;

                            return <BooksItem bookId={id} />
                        }
                    } />

                   
                  
                   
                </Container>
        </div>

           </Router>
        );
    };
    
    }
    
