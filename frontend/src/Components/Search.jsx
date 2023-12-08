// Search.jsx
import React from 'react';

const Search = ({ onChange }) => {
  return (
    <input
      type='search'
      placeholder='Search...'
      onChange={onChange}
    />
  );
};

export default Search;
