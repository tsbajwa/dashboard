import React from "react";
import TaskTable from "../components/TaskTable";
import ProjectTable from "../components/ProjectTable";
import Header from "../components/Header";
import styled from "styled-components/macro";

const ProjectPage = () => {
  return (
    <>
      <Header />
      <__Container>
        <TaskTable />
        <ProjectTable />
      </__Container>
    </>
  );
};

export default ProjectPage;

const __Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 992px;
  margin: 0 auto;

  > div {
    margin-top: 3rem;
  }
`;
