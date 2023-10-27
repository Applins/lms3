import React from 'react';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AddButton() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('add-team');
  };

  return (
    <Button onClick={handleNavigate}>
      <FaPlus /> Add Team
    </Button>
  );
}

export default AddButton;
