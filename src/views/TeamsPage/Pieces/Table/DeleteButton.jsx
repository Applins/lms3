import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaTrash } from 'react-icons/fa';

function DeleteButton({ onDelete }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleConfirm = () => {
    setShow(false);
    onDelete(); // Call the onDelete function when confirmed.
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <FaTrash /> {/* Display the trash icon */}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;
