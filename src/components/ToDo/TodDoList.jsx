import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import FormAdd from './FormAdd';
import FormSearch from './FormSearch';

const TodDoList = () => {
  const [todoList, setTodoList] = useState(() => {
    const localTodo = localStorage.getItem('todo');
    return localTodo ? JSON.parse(localTodo) : [];
  });
  const [filter, setFilter] = useState(''); // стан для фільтра
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
    console.log('todoList', todoList);
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
    // фільтрація списку
    const filteredTodoList = todoList.filter(todo =>
        todo.title.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div>
      <h1>My To-Do list</h1>
      <FormAdd onSubmit={addToDo} />
      <FormSearch filter={filter} setFilter={setFilter} />
             {/* Input для фільтра  */}
            <input
        type="text"
        placeholder="Filter todos..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <ul>
        {filteredTodoList.map(todo => (
          <ToDo
            key={todo.id}
            todo={todo}
            handleCheckCompleted={handleCheckCompleted}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodDoList;
