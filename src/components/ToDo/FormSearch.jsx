import React from 'react'
import { Input } from './FormSearch.styled.js';

const FormSearch = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Filter todos..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FormSearch;
