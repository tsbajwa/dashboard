import React from 'react';
import DashBoard from './pages/DashBoard';
import { Route, Switch } from 'react-router-dom'

const test = () => (
  <div>test</div>
)
function App() {
  return (
    <Switch>
      <Route exact path='/' component={DashBoard} />
      <Route path='/test' component={test} />
    </Switch>
  );
}

export default App;



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