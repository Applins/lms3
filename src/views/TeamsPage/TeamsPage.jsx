import React from 'react';
import TeamListView from '../TeamsPage/Pieces/TeamListView';
import appViewModel from '../../services/appViewModel.meta';
import TeamAside from '../TeamsPage/Pieces/TeamAside'

function Teams() {
  // Initialize LocalStorageService using AppViewModel's getApi method
  const api = appViewModel.getApi('teams')
  return (
    <div className="row tab-pane custom-bg-color m-1">
      {/* You can pass appViewModel directly as a prop to TeamListView */}
      <div className='col-md-6'><TeamAside></TeamAside></div>
      <div className='col-md-6'><TeamListView viewModel={appViewModel} model={api}></TeamListView></div>
    </div>
  );
}

export default Teams;
