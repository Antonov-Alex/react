import React, {Component} from 'react';
//import './charDetails.css';
import styled from 'styled-components';

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

export default class CharDetails extends Component {

    

    render() {
        return (
            <AppBlock>
                <h4>John Snow</h4>
                <ul className="list-group list-group-flush">

                    <AppListItem>
                        <span className="term">Gender</span>
                        <span>male</span>
                    </AppListItem>
                    <AppListItem>
                        <span className="term">Born</span>
                        <span>1783</span>
                    </AppListItem>

                    <AppListItem>
                        <span className="term">Died</span>
                        <span>1820</span>
                    </AppListItem>
                    <AppListItem>
                        <span className="term">Culture</span>
                        <span>First</span>
                    </AppListItem>
                </ul>
            </AppBlock>
        );
    }
}