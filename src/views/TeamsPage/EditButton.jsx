import Button from 'react-bootstrap/Button';
import { FaPenFancy } from 'react-icons/fa';

function DeleteButton({ onDelete }) {

  return (
    <>
      <Button>
        <FaPenFancy /> {/* Display the trash icon */}
      </Button>
    </>
  );
}

export default DeleteButton;
