import React from 'react';
import {  Button, Input, InputGroup } from 'reactstrap';
import styled from 'styled-components';


const AddForm = styled.div`
        display: flex;
        margin-top: 20px;
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
`

const PostAddForm = ({ onAdd }) => {
    return (
      <AddForm>
       <InputGroup>
             <Input
                type="text"
                placeholder="О чём вы сейчас думаете?"
                className="form-control new-post-label"
         />
         <Button
               outline color="secondary"
               type="submit"
               className="btn"
               onClick={() => onAdd('Hello')}
               >
            Добавить
         </Button>
       </InputGroup>
      </AddForm>
    )
}

export default PostAddForm;