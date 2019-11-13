import React, {Component} from 'react';
//import './randomChar.css';
import styled from 'styled-components';

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

    render() {

        return (
            <AppBlock>
                <h4>Random Character: John</h4>
                <AppList>
                    <li>
                        <span>Gender </span>
                        <span>male</span>
                    </li>
                    <li>
                        <span>Born </span>
                        <span>11.03.1039</span>
                    </li>
                    <li>
                        <span>Died </span>
                        <span>13.09.1089</span>
                    </li>
                    <li>
                        <span>Culture </span>
                        <span>Anarchy</span>
                    </li>
                </AppList>
            </AppBlock>
        );
    }
}
