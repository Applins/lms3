  import React from 'react';
  import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
  import Popover from 'react-bootstrap/Popover';
  import DeleteButton from '../Table/DeleteButton'; 
  import EditButton from '../Table/EditButton'

  function TeamRow({team, onHandleDelete }) {
    
    let deletePrompt = `Are you sure you want to delete team: ${team.name}`;

    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Delete Team</Popover.Header>
        <Popover.Body>{deletePrompt}</Popover.Body>
      </Popover>
    );

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="auto"
        overlay={popover}
        delay={{ show: 300, hide: 200 }}
      >
        <tr>
          <td>{team.name}</td>
          <td>{team.coachName}</td>
          <td>{team.coachPhone}</td>
          <td>{team.coachEmail}</td>
          <td>
            {/* Pass the onDelete function to the DeleteButton */}
            <DeleteButton onDelete={() => onHandleDelete(team.id)}></DeleteButton>
          </td>
          <td>
            <EditButton></EditButton>
          </td>
        </tr>
      </OverlayTrigger>
    );
  }

  export default TeamRow;
