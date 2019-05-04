import React from "react";
import './table.scss';

//TODO: Change to functional component
const Table = ({ title, data }) => {
  const renderTableHeader = () => (
    <tr>
      {data.columns.map(column => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  );

  const renderTableBody = () => {
    const { rows, columns } = data;
    const isRowData = !!rows.length;

    if (!isRowData) {
      return (
        <tr>
          <td> No available information</td>
        </tr>
      );
    }

    return rows.map((row, index) => (
      <tr key={index}>
        {columns.map(column => (
          <td key={column}>{row[column]}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <span>{title}</span>
      <table className='table table-responsive table-hover '>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Table;
