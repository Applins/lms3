// TeamListView.jsx
import React, { useState, useEffect } from 'react';
import TeamsTable from '../Pieces/Table/TeamTable';
import AlertList from '../Pieces/Alerts/AlertList'; // Import the updated AlertList component
import Button from 'react-bootstrap/Button';
import AddTeamButton from '../Pieces/AddTeamButton'
import SearchBar from '../Pieces/SearchBar';

function TeamListView({ viewModel, api }) {
  const navigate = useNavigate();
  const [teamData, setTeamData] = useState([]);  
  const [sortCol, setSortCol] = useState(api.sortCol)
  const [sortDir, setSortDir] = useState(api.sortDir) 
  const [isReset, setIsReset]=useState(false);
  const [alertList, setAlertList] = useState([]);
  const [filterStr, setFilterStr] = useState(api.filterStr)
 
  useEffect(() => {
    api.sortCol = sortCol;
    api.sortDir = sortDir;
    api.filterStr = filterStr;
    api.list().then((teams) => {
        setTeamData(teams);
    });
}, [isReset, sortCol, sortDir, filterStr, alertList, api]);


  // Handler function to delete an item
  function handleDelete(itemId) {
    // Call model to delete the item
    api.read(itemId).then((team) =>{
      api.delete(itemId).then(()=>{
        addAlert('Item deleted successfully', 'success');
      });
    });
  }
  const onSearchHandler = (value) => {
    if (value.length > 2) {
      setFilterStr(value); // Set the filter string to the input value
      setSortCol('name'); // Set the column to sort by name
    } else {
      setFilterStr(''); // Reset the filter string if the input is less than 2 characters
      setSortCol(api.sortCol); // Reset the column to its original state
    }
  };
  
  const handleReset = () => {
    // Call model.reset() to reset data in localStorage
    api.reset();
    // Update 'teamData' with a new list or initial data
    setIsReset(true)
  }
  function handleSort(newSortCol) {
    let curDirection = sortDir;
    if (sortCol === newSortCol) {
      setSortDir(curDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortDir('asc');
    }
    setSortCol(newSortCol);
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
  function handleEdit(itemId) {
    navigate(`/teams/edit-team/${itemId}`);
  }

  return (
    teamData && (<div>
      
      <AlertList alerts={alertList} onAlertClose={handleCloseAlert} />
      <SearchBar onSearchHandler={onSearchHandler} />
      <div className="d-flex justify-content-between align-items-center m-1">
        <h2>Teams</h2>
        <AddTeamButton></AddTeamButton>
      </div>
      <TeamsTable
        teams={teamData}
        sortCol={api.sortCol}
        sortDir={api.sortDir}
        viewModel={viewModel}
        onHandleDelete={handleDelete}
        onHandleSort={handleSort}
        onHandleEdit={handleEdit}
      />

      <Button
        variant="primary"
        onClick={(e) => {
          handleReset();
        }}
      >
        Clear
      </Button>
    </div>)
  );
}

export default TeamListView;
