import React from "react";
import styled from 'styled-components/macro';

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
      <__Table>
        <__Head>{renderTableHeader()}</__Head>
        <__Body>{renderTableBody()}</__Body>
      </__Table>
    </div>
  );
};

export default Table;

const __Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  display: block;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  th, td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #eceeef;
  }
`;

const __Head = styled.thead`
  th {
    vertical-align: bottom;
    border-bottom: 2px solid #eceeef;
    background-color: lightblue;
  }
`;

const __Body = styled.tbody`
  tr {
    &:hover {
      background-color: gray;
    }
  }
`;