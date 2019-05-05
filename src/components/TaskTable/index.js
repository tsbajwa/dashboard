import React from 'react';
import Table from '../shared/Table';

const tableData = {
  columns: ["Task",
  "Subject",
  "Customer",
  "Priority",
  "Status",
  "Start Date",
  "Due Date"],
  rows: [{
    "Task": 'fakasdta',
    "Subject": 'fdfgdfgedata',
    "Customer": 'fadata',
    "Priority": 'fakedata',
    "Status": 'adsdata',
    "Start Date": 'fakesdata',
    "Due Date": 'fakedata'
  },
{
  "Task": 'fakasdta',
  "Subject": 'fdfgdfgedata',
  "Customer": 'fadata',
  "Priority": 'fakedata',
  "Status": 'adsdata',
  "Start Date": 'fakesdata',
  "Due Date": 'fakedata'
},
{
  "Task": 'fakasdta',
  "Subject": 'fdfgdfgedata',
  "Customer": 'fadata',
  "Priority": 'fakedata',
  "Status": 'adsdata',
  "Start Date": 'fakesdata',
  "Due Date": 'fakedata'
},
{
  "Task": 'fakasdta',
  "Subject": 'fdfgdfgedata',
  "Customer": 'fadata',
  "Priority": 'fakedata',
  "Status": 'adsdata',
  "Start Date": 'fakesdata',
  "Due Date": 'fakedata'
}]
}

class TaskTable extends React.Component {
  render() {
    return (
      <Table
        data={ tableData }
        title="Todays Tasks"
      />
    )
  }
}


export default TaskTable;