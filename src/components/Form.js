import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';




const teams = [{value: 'Red', label: 'Red'}, {value: 'Blue', label: 'Blue'}, {value: 'Yellow',label: 'Yellow'}]

export default function EditForm(props) {
    const [team, setTeam] = useState('');

    const handleChange = (event) => {
        setTeam(event.target.value);
      };

    // const handleEdit = () => {

    // }

return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField
          disabled
          id="ID"
          label="ID"
          defaultValue="#"
          style={{width: '60px' }}
        />
        <TextField
          required
          id="firstName"
          label="First Name"
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
        />
        <TextField
          id="age"
          label="Age"
          type="number"
        />
        <TextField
          id="team"
          select
          label="Select"
          value={team}
          onChange={handleChange}
          helperText="Please select your team"
        >
          {teams.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" size="large">Update</Button>
    </Box>
)
}