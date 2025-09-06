import React from 'react'
import {DeleteButton, ListItem, LeftBlock, TitleLink } from './ToDo.styled.js'

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
<ListItem $completed={todo.completed}>
      <LeftBlock>
        {handleCheckCompleted && (
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          />
        )}
        <TitleLink
          href={`/todos/${todo.id}`}
          rel="noopener noreferrer"
          $completed={todo.completed}
        >
          {todo.title}
        </TitleLink>
      </LeftBlock>

      {handleDelete && (
        <DeleteButton
          disabled={!todo.completed}
          type='button'
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </DeleteButton>
      )}
    </ListItem>
  );
};


export default ToDo
