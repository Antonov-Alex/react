import React, {Component} from 'react';
import './charDetails.css';
import styled from 'styled-components';
import gotService from '../services/gotServices';
import Spiner from '../spiner';
import ErrorMassage from '../errorMassage';

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

    gotService = new gotService();

    state = {
         char: null,
         error: false,
    }
    
    componentDidMount() {
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

                    <AppListItem>
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </AppListItem>
                    <AppListItem>
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </AppListItem>

                    <AppListItem>
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </AppListItem>
                    <AppListItem>
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </AppListItem>
                </ul>
            </AppBlock>
        );
    }
}