import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
import styled from 'styled-components';

const ListGroupItem = styled.li`
        padding: 20px 35px 10px 35px;
        margin-top: 10px;
`

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

    const elements = posts.map(item => {
        if(typeof item !== 'object'){
            return;

          } else{
        const { id, ...itemProps } = item;
        return (
         <ListGroupItem key={id} >
             <PostListItem 
             {...itemProps} 
             onDelete={() => onDelete(id)}
             onToggleLiked={() => onToggleLiked(id)}
             onToggleImportant={() => onToggleImportant(id)}
             />
         </ListGroupItem>
        )}
    });

    return (
        <ListGroup className="app-list">
              {elements}
        </ListGroup>
    )
}

export default PostList;