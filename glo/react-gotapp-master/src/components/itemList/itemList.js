import React, {Component} from 'react';
//import './itemList.css';
import styled from 'styled-components';

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

    render() {
        return (
            <AppList>
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </AppList>
        );
    }
}