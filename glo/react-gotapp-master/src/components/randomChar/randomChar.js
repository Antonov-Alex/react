import React, {Component} from 'react';
import './randomChar.css';
import styled from 'styled-components';
import gotService from '../services/gotServices'
import Spiner from '../spiner';
import ErrorMassage from '../errorMassage/'

const AppBlock = styled.div`
       background-color: #fff;
       padding: 25px 25px 15px 25px;
       margin-bottom: 40px;
        h4{
            margin-bottom: 20px;
            
        }
`;

const AppList = styled.ul`
       
       li{
          display: flex;
          justify-content: space-between;
          span{
            font-weight: bold;
            color: blue;
          }
       }
`;



export default class RandomChar extends Component {
   
    gotService = new gotService();
      
       state = {
           char:{},
           loading: true,
           error: false,
           
       }

       componentDidMount(){
          this.updateChar()
          this.timerId = setInterval(this.updateChar, 10500);
       }

       componentWillUnmount() {
          clearInterval(this.timerId);
       }
       
       onCharLoaded = (char) => {
        this.setState({ char, loading: false })
       }

       onError = (err) => {
           this.setState({
               error: true,
               loading: false
           })
       }

       updateChar = () => {
           
           const id = Math.floor(Math.random()*140 + 25);
           this.gotService.getCharecter(id)
                .then(this.onCharLoaded)
                .catch(this.onError);
       }

       
  
   render() {
       console.log('render')
    const { char, loading, error }  = this.state;
      const errorMassage = error ? <ErrorMassage/> : null;
      const spiner = loading ? <Spiner/> : null;
      const content = !(loading || error) ? <View char={char}/> : null ;
      

    return (
        <AppBlock>
           {errorMassage}
           {spiner}
           {content}
        </AppBlock>
    );
  }
}

const View = ({char}) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
  <h4>Random Character:{name} </h4>
            <AppList>
                <li>
                    <span>Gender </span>
                    <span>{gender}</span>
                </li>
                <li>
                    <span>Born </span>
                    <span>{born}</span>
                </li>
                <li>
                    <span>Died </span>
                     <span>{ died }</span>
                </li>
                <li>
                    <span>Culture </span>
                    <span>{culture}</span>
                </li>
            </AppList>
        </>
    )
}