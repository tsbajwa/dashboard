import React from "react";
import styled from "styled-components/macro";
import Table from "../shared/Table";
import Button from "../shared/Button";
import Form from "./Form";
import data from "../../data/project";
class ProjectTable extends React.Component {
  state = {
    tableData: data,
    isFormVisible: false
  };

  addRow = row => {
    this.setState({
      tableData: {
        ...this.state.tableData,
        rows: [...this.state.tableData.rows, row]
      }
    });
  };

  handleFormSubmit = data => {
    this.addRow(data);
    this.toggleForm();
  };

  toggleForm = () => {
    this.setState(prevState => ({ isFormVisible: !prevState.isFormVisible }));
  };

  render() {
    const { tableData, isFormVisible } = this.state;
    return (
      <>
        <__Container>
          <Table data={tableData} title="Projects" />
          {!isFormVisible && <__Button onClick={this.toggleForm}>Add</__Button>}
        </__Container>
        {isFormVisible && (
          <Form
            onSubmit={this.handleFormSubmit}
            formFields={tableData.columns}
            onCancel={this.toggleForm}
          />
        )}
      </>
    );
  }
}

export default ProjectTable;

const __Button = styled(Button)`
  margin-bottom: 1rem;
  align-self: flex-end;
`;

const __Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 100%;
`;
