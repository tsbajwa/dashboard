import React from "react";
import Table from "../shared/Table";
import Form from "../shared/Form";

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
    tableData: tableData
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
  };

  render() {
    const { tableData } = this.state;
    return (
      <>
        <Table data={tableData} title="Projects" />
        <button onClick={() => console.log("clicked")}>Add</button>
        <Form onSubmit={this.handleFormSubmit} formFields={tableData.columns} />
      </>
    );
  }
}

export default ProjectTable;
