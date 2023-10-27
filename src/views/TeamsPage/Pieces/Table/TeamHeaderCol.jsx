import React from 'react';
import { FaSortUp, FaSortDown, FaSort } from 'react-icons/fa';

function TeamHeaderCol({ label, colName, sortCol, sortDir, onHandleSort }) {
    const isSortColumn = colName === sortCol;
    const isSortAsc = isSortColumn && sortDir === 'asc';

    const handleClick = () => {
        onHandleSort(colName);
    };

    return (
        <th onClick={handleClick} style={{ cursor: 'pointer' }}>
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
