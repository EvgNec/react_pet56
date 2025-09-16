import React from 'react'
import { Input, Form } from './FormSearch.styled.js';

const FormSearch = ({ filter, setFilter }) => {
  return (
    <Form>
      <Input
        type="text"
        placeholder="Filter todos..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </Form>
  );
};

export default FormSearch;
