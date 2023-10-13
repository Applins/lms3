import React from 'react';
import TeamHeaderRow from '../Table/TeamHeaderRow'
import TeamRow from '../Table/TeamRow'

function TeamsTable({ teams, sortCol, sortDir, viewModel, onHandleDelete, onHandleSort, onHandleEdit }) {
  return (
    <table className='table table-striped table-hover'>
      <thead>
        <TeamHeaderRow sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort}></TeamHeaderRow>
      </thead>
      <tbody>
        {teams.map((team) => (
          <TeamRow team={team} onHandleDelete={onHandleDelete}></TeamRow>
        ))}
      </tbody>
    </table>
  );
}

export default TeamsTable;
