import React from 'react';
import TeamListView from '../TeamsPage/Pieces/TeamListView';
import TeamAside from '../TeamsPage/Pieces/TeamAside'

function Teams({viewModel, api}) {
  return (
    <div className="row tab-pane custom-bg-color m-1">
      {/* You can pass appViewModel directly as a prop to TeamListView */}
      <div className='col-md-6'><TeamAside></TeamAside></div>
      <div className='col-md-6'><TeamListView  viewModel={viewModel} api={api} ></TeamListView></div>
    </div>
  );
}

export default Teams;
