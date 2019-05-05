import React from 'react';
import TaskTable from './components/TaskTable';
import ProjectTable from './components/ProjectTable';
import Header from './components/Header';
import styled from 'styled-components/macro';

function App() {
  return (
    <div className="App">
      <Header />
      <__Container>
        <TaskTable />
        <ProjectTable />
      </__Container>
    </div>
  );
}

export default App;

const __Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 3rem ;
  }
`;


// 2. The Tasks and Projects need to be done as a React SPA.
// * Show a list of todays tasks in the tasks section.
// * Show the projects assigned to the employee in the Project section. (at-least 4 rows ).
// * Should be able to Add a new project into the list.


//.App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }