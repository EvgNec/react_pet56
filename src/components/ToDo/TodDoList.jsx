import React, { useEffect, useState } from 'react'
import ToDo from './ToDo'
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import FormAdd from './FormAdd';

const TodDoList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const localTodo = localStorage.getItem('todo');
        if (localTodo) setTodoList(JSON.parse(localTodo));
      }, []);

      useEffect(() => {
        todoList && localStorage.setItem('todo', JSON.stringify(todoList));
      }, [todoList]);   

      const addToDo = value => {
        setTodoList(prevTodoList => {
          return [
            ...prevTodoList,
            {
              id: nanoid(),
              title: value,
              completed: false,
            },
          ];
        });
    console.log('todoList',todoList);
        toast.success('Create successfully');
      };
      const handleCheckCompleted = id => {
        setTodoList(prevTodoList => {
          return prevTodoList.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
        });
      };
      const handleDelete = id => {
        setTodoList(prevTodoList => {
          return prevTodoList.filter(todo => todo.id !== id);
        });
    
        toast.error('Delete successfully');
      };
  return (
    <div>
     <h1>My To-Do list</h1>
<FormAdd onSubmit={addToDo}/>
     <ul>
     {todoList.map(todo => (
        <ToDo          
        key={todo.id}
          todo={todo}
          handleCheckCompleted={handleCheckCompleted}
          handleDelete={handleDelete}
          />
     ))}
     </ul>
    </div>
  )
}

export default TodDoList
