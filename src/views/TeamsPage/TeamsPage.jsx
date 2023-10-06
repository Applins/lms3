import React, { useState } from 'react';
import TeamRow from './TeamRow';
import DeleteButton from './DeleteButton';

function Teams() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'Husky Robotics',
      coachName: 'Mark Musk',
      coachPhone: '801-555-2525',
      coachEmail: 'muskyhusky@gmail.com',
    },
    {
      id: 2,
      name: 'Lion Force',
      coachName: 'Mufasa Lion',
      coachPhone: '915-357-1257',
      coachEmail: 'mufafafa@gmail.com',
    },
    {
      id: 3,
      name: 'Autobots',
      coachName: 'Optimus Prime',
      coachPhone: '101-110-0011',
      coachEmail: 'optimus@prime.com',
    },
    // Add more team objects as needed
  ]);

  // Define a function to handle team deletion
  // const handleDeleteTeam = (teamId) => {
  //   // Implement the logic to delete the team from the state or server here.
  //   // For example, you can filter the teams array to remove the deleted team.
  //   const updatedTeams = teams.filter((team) => team.id !== teamId);
  //   setTeams(updatedTeams);
  // };

  return (
    <div className="row tab-pane custom-bg-color m-1">
        <div className='col-md-6'>
          <h2 className="m-2">2022 Championship Schedule</h2>
          <div className="table-responsive myTable">
            <table className="table table-striped table-hover p-2">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Team</th>
                          <th />
                          <th>Team</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Husky Robotics</td>
                          <td>09/22/2023</td>
                          <td>vs</td>
                          <td>Lion Force</td>
                        </tr>
                        <tr>
                          <td>09/29/2023</td>
                          <td>Lion Force</td>
                          <td>vs</td>
                          <td>Autobots</td>
                        </tr>
                        
                        <tr>
                          <td>10/6/2023</td>
                          <td>Autobots</td>
                          <td>vs</td>
                          <td>Husky Robotics</td>
                        </tr>
                        <tr>
                          <td>10/13/2023</td>
                          <td>Final Team</td>
                          <td>vs</td>
                          <td>Final Team</td>
                        </tr>
                      </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center m-1">
                  <h2>Teams</h2>
                  <button className="btn btn-primary float-end">
                    Add New Team
                  </button>
                </div>
                <div className="table-responsive myTable">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Team Name</th>
                        <th>Coach Name</th>
                        <th>Coach Phone Number</th>
                        <th>Coach Email</th>
                        <th colSpan={2}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teams.map((team) => (
                        <TeamRow
                          key={team.id}
                          team={team}
                          id={team.id}
                          onHandleDelete={<DeleteButton></DeleteButton>}
                        />
                      ))}
                      
                    </tbody>
                  </table>
                </div>
        </div>
    </div>
  );
}

export default Teams;
