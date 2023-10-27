import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPenFancy } from 'react-icons/fa';

function EditButton({ id, onEdit }) {
  const handleNavigate = () => {
    onEdit(id); // Pass the id to the onEdit function
  };

  return (
    <Button onClick={handleNavigate}>
      <FaPenFancy />
    </Button>
  );
}

export default EditButton;
