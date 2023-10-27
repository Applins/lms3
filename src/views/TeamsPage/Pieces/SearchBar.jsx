// components/SearchBar/SearchBar.jsx
import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

function SearchBar({ onSearchHandler }) {
  const inputRef = useRef(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      onSearchHandler('');
    }
  };

  const handleSearch = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      onSearchHandler(value);
    }
  };

  return (
    <Form className="d-flex mb-3">
      <Form.Control
        type="text"
        placeholder="Search..."
        className="me-2"
        ref={inputRef}
        onChange={handleSearch}
      />
      <Button variant="outline-secondary" onClick={handleClear}>
        Clear
      </Button>
    </Form>
  );
}

export default SearchBar;
