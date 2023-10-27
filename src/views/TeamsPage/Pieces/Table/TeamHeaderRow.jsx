import React from 'react';
import TeamHeaderCol from './TeamHeaderCol'; // Import TeamHeaderCol component

function TeamHeaderRow({ sortCol, sortDir, onHandleSort }) {
  return (
    <tr>
      <TeamHeaderCol label="Team Name" colName="name" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
      <TeamHeaderCol label="Coach Name" colName="coachName" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
      <TeamHeaderCol label="Coach Phone Number" colName="coachPhone" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
      <TeamHeaderCol label="Coach Email" colName="coachEmail" sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
      <th colSpan={2}>Actions</th>
    </tr>
  );
}

export default TeamHeaderRow;
