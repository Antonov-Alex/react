import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import  './toggleBtn.css';



 export default class App extends Component {
    constructor(props){
          super(props);  
          this.state = {
            active: true,
        }

        this.onToggleRandomChar = this.onToggleRandomChar.bind(this);
    }
    
    
    onToggleRandomChar(){
      this.setState (prevState => ({
          active: !prevState.active
      }))

      
    }
  

    render (){
        //const { active } = this.state;
        // const toggleRendomChar = active ? <RandomChar/> : null;
        // const huy = !active ? active: true;
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <div>{this.state.active ? <RandomChar/> : null}</div>
    
                            <button className="toggle-btn"
                                   onClick={ this.onToggleRandomChar}
                                    active="true"
                            >Toggle RandomChar</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    };
    
    }
    
