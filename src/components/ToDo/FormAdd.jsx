import React, { useState } from 'react'
import { Form, Input, Button } from './FormAdd.styled.js';

const FormAdd = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => setQuery(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onSubmit(query);    
        setQuery('');
      };


  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Додати ..."
        value={query}
        onChange={handleChange}
      />
      <Button type="submit">Додати</Button>
    </Form>
  )
}

export default FormAdd
