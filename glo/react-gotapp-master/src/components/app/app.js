import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage/';
import  './toggleBtn.css';
import ErrorMassage from '../errorMassage';



 export default class App extends Component {

        
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
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {toggleRendomChar}
    
                            <button className="toggle-btn"
                                   onClick={ this.onToggleRandomChar}
                                    active="true"
                            >Toggle RandomChar</button>
                        </Col>
                    </Row>
                   <CharacterPage/>
                </Container>
            </>
        );
    };
    
    }
    
