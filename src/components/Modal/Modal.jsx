import React, { useState } from 'react';

function Modal() {
  const [teamNameToDelete, setTeamNameToDelete] = useState(''); 
     // Function to open the delete confirmation modal
     const openDeleteModal = (teamName) => {
      setTeamNameToDelete(teamName);
      document.getElementById('removeTeamModal').classList.add('show'); // Use Bootstrap to show the modal
    };
    // Function to handle team deletion
    const handleDeleteTeam = () => {
      // Add your code here to handle the deletion of the team with the name 'teamNameToDelete'
      // After deletion, you can close the modal
      // For testing purposes, you can log the team name to the console
      console.log(`Deleting team: ${teamNameToDelete}`);
  
      // Close the modal
      document.getElementById('removeTeamModal').classList.remove('show');
    };
    return <div className="modal fade"
      id="removeTeamModal" tabIndex="-1"
      aria-labelledby="removeTeamModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"
              id="removeTeamModalLabel">Confirm Deletion</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete: <span id="teamNameToDeleteModal">{teamNameToDelete}</span>?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleDeleteTeam}>Delete</button>
          </div>
        </div>
      </div>
    </div>;
  }
  export default Modal;