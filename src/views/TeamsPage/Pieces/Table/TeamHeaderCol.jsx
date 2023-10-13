import React from 'react';
import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';

function TeamHeaderCol({ label, thClasses, colName, sortCol, sortDir, onHandleSort }) {
  const isSortColumn = colName === sortCol;
  const isSortAsc = isSortColumn && sortDir === 'asc';

  // Function to handle the column header click
  const handleClick = () => {
    // Determine the sort direction for the next click
    // Call the onHandleSort function with the current colName and newSortDir
    onHandleSort(colName);
  };

  return (
    <th className={thClasses} onClick={handleClick} style={{ cursor: 'pointer' }}>
      {label}
      {isSortColumn && (
        <span>
          {isSortAsc ? <FaSortUp /> : <FaSortDown />}
        </span>
      )}
      {!isSortColumn && <FaSort />}
    </th>
  );
}

export default TeamHeaderCol;
