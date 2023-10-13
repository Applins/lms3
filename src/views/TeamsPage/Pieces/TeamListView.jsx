// TeamListView.jsx
import React, { useState, useEffect } from 'react';
import TeamsTable from '../Pieces/Table/TeamTable';
import AlertList from '../Pieces/Alerts/AlertList'; // Import the updated AlertList component
import Button from 'react-bootstrap/Button';

function TeamListView({ viewModel, model }) {
  // Retrieve team data from localStorage or any other source using the model
  // State variable for team data
  const [teamData, setTeamData] = useState(model.list());

  // State variable for alert list
  const [alertList, setAlertList] = useState([]);

  // Handler function to delete an item
  function handleDelete(itemId) {
    // Call model to delete the item
    model.delete(itemId);
    // Update 'teamData' with the new list
    const updatedTeamData = teamData.filter((item) => item.id !== itemId);
    setTeamData(updatedTeamData);
    addAlert('Item deleted successfully', 'success');
  }
  
  const handleReset = () => {
    // Call model.reset() to reset data in localStorage
    model.reset();
    // Update 'teamData' with a new list or initial data
    setTeamData([]);
  }
  function handleSort(colName) {
    // Check if the clicked column is the same as the current sortCol in the model
    if (colName === model.sortCol) {
      // If so, reverse the sort direction (toggle between 'asc' and 'desc')
      model.sortDir = model.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      // If the clicked column is different, set the sortCol to the clicked column and default the sortDir to 'asc'
      model.sortCol = colName;
      model.sortDir = 'asc';
    }
    setTeamData(model.list());
  }

  // Handler function to close an alert
  function handleCloseAlert(index) {
    const updatedAlerts = [...alertList];
    updatedAlerts.splice(index, 1);
    setAlertList(updatedAlerts);
  }

  // Handler function to add an alert
  function addAlert(title, type) {
    const newAlert = { title, type };
    setAlertList([...alertList, newAlert]);
  }

  return (
    <div>
      <AlertList alerts={alertList} onAlertClose={handleCloseAlert} />
      <div className="d-flex justify-content-between align-items-center m-1">
        <h2>Teams</h2>
        <button className="btn btn-primary float-end">
          Add New Team
        </button>
      </div>
      <TeamsTable
        teams={teamData}
        sortCol={model.sortCol}
        sortDir={model.sortDir}
        viewModel={viewModel}
        onHandleDelete={handleDelete}
        onHandleSort={handleSort}
      />

      <Button
        variant="primary"
        onClick={(e) => {
          handleReset();
        }}
      >
        Clear
      </Button>
    </div>
  );
}

export default TeamListView;
