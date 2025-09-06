import React from 'react'
import { Link } from 'react-router-dom'

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
<li className='list-group-item'>
			<div>
				<div>
					{handleCheckCompleted && (
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => handleCheckCompleted(todo.id)}
						/>
					)}
                    <a href={`/todos/${todo.id}`} rel="noopener noreferrer">{todo.title}</a>
				</div>
				<div className='col'>
					{handleDelete && (
						<button
							disabled={!todo.completed}
							type='button'
							aria-label='Close'
							onClick={() => handleDelete(todo.id)}
						>Delete</button>
					)}
				</div>
			</div>
		</li>
  )
}

export default ToDo
