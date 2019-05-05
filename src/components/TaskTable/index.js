import React from "react";
import Table from "../shared/Table";
import styled from "styled-components/macro";
import data from "../../data/task";

const TaskTable = () => {
  return (
    <__Container>
      <Table data={data} title="Todays Tasks" />
    </__Container>
  );
};

export default TaskTable;

const __Container = styled.div`
  width: 100%;
  border: 1px solid gray;
`;
