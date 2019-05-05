import React from 'react';
import TaskTable from '../components/TaskTable';
import ProjectTable from '../components/ProjectTable';
import Header from '../components/Header';
import styled from 'styled-components/macro';

const ProjectPage = () => {
  return (
    <div className="App">
      <Header />
      <__Container>
        <TaskTable />
        <ProjectTable />
      </__Container>
    </div>
  )
}


export default ProjectPage;


const __Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 3rem ;
  }
`;