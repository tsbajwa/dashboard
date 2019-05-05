import React from "react";
import Table from "../shared/Table";
import Form from "../shared/Form";
import styled from 'styled-components/macro';

const tableData = {
  columns: [
    "Task",
    "Subject",
    "Customer",
    "Priority",
    "Status",
    "Start Date",
    "Due Date"
  ],
  rows: [
    {
      Task: "fakedata",
      Subject: "fakedata",
      Customer: "fakedata",
      Priority: "fakedata",
      Status: "fakedata",
      "Start Date": "fakedata",
      "Due Date": "fakedata"
    }
  ]
};

class ProjectTable extends React.Component {
  state = {
    tableData: tableData,
    isFormVisible: false,
  };

  addRow = data => {
    this.setState({
      tableData: {
        ...this.state.tableData,
        rows: [...this.state.tableData.rows, data]
      }
    });
  };

  handleFormSubmit = data => {
    this.addRow(data);
    this.toggleForm();
  };

  toggleForm = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }))
  }

  render() {
    const { tableData, isFormVisible } = this.state;
    return (
      <>
      <__Container>
        <Table data={tableData} title="Projects" />
        {
          !isFormVisible &&
            <__Button onClick={ this.toggleForm }>Add</__Button>
        }
      </__Container>
      {
        isFormVisible &&
          <Form onSubmit={this.handleFormSubmit} formFields={tableData.columns} />
      }
      </>
    );
  }
}

export default ProjectTable;

const __Button = styled.span`
  margin-bottom: 2rem;
  margin-right: 0.5rem;
  align-self: flex-end;
  padding: 0.6rem 1rem;
  color: white;
  background: lightblue;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const __Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin-bottom: 2rem;
`;