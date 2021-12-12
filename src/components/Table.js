import React, { useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Form from './Form'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    width: 90,
  },
  {
    field: 'team',
    headerName: 'Team',
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, team: 'Red' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, team: 'Red' },
  { id: 8, lastName: 'Lannister', firstName: 'Jaime', age: 45, team: 'Red' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, team: 'Blue' },
];

export default function DataTable() {
const [selectedItem, setSelectedItem] = useState([]);

useEffect((selectedItem) => {
  if(selectedItem !== [] ){
    console.log('true')
} else {console.log('false')}}, [selectedItem]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableColumnMenu	
        onSelectionModelChange = {(item) => {setSelectedItem(item)}}
      />
      <Form selected={selectedItem} />
    </div>
  );
}
