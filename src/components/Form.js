import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const teams = [
  { value: "Red", label: "Red" },
  { value: "Blue", label: "Blue" },
  { value: "Yellow", label: "Yellow" },
];

export default function EditForm(props) {
  // const [team, setTeam] = useState('');
  const [formValues, setFormValues] = useState({
    id: null,
    firstName: null,
    lastName: null,
    age: null,
    team: null,
  });

  useEffect(() => {
    setFormValues({
      id: props.selectedItem.id,
      firstName: props.selectedItem.firstName,
      lastName: props.selectedItem.lastName,
      age: props.selectedItem.age,
      team: props.selectedItem.team,
    });
  }, [props.selectedItem]);

  const handleChange = (e, key) => {
    setFormValues({ ...formValues, [key]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateNewList(formValues);
  };
  const handleDelete = (e) => {
    props.handleDelete();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        disabled
        id="ID"
        placeholder="ID"
        value={formValues.id}
        onChange={(e) => handleChange(e, "id")}
        style={{ width: "60px" }}
      />
      <TextField
        required
        value={formValues.firstName}
        id="firstName"
        placeholder="First Name"
        onChange={(e) => handleChange(e, "firstName")}
      />
      <TextField
        required
        value={formValues.lastName}
        id="lastName"
        placeholder="Last Name"
        onChange={(e) => handleChange(e, "lastName")}
      />
      <TextField
        id="age"
        value={formValues.age}
        placeholder="Age"
        type="number"
        onChange={(e) => handleChange(e, "age")}
      />
      <TextField
        id="team"
        value={formValues.team}
        onChange={handleChange}
        label="Select"
        helperText="Please select your team"
        select
      >
        {teams.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField type="submit" />
      <br />
      <Button variant="outlined" size="large" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
}
