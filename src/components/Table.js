import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Form from "./Form";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    width: 90,
  },
  {
    field: "team",
    headerName: "Team",
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, team: "Red" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, team: "Red" },
  { id: 8, lastName: "Lannister", firstName: "Jaime", age: 45, team: "Red" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, team: "Blue" },
];

export default function DataTable() {
  const [selectedItem, setSelectedItem] = useState([]);
  const [chosenRow, setChosenRow] = useState({
    id: "",
    lastName: "",
    firstName: "",
    age: "",
    team: "",
  });
  const [newRows, setNewRows] = useState(rows);

  const updateNewList = (index) => {
    const newList = newRows.map((x) => x);

    if (newList.find((x) => x.id === index.id) !== undefined) {
      let foundIndex = newList.find((x) => x.id === index.id);
      foundIndex = newList.findIndex((x) => x.id === index.id);
      newList[foundIndex] = index;
      setNewRows(newList);
    } else {
      console.log(index);
      index.id = Math.floor(Math.random() * 100);
      console.log(index);
      newList.push(index);
      setNewRows(newList);
    }
  };

  const handleDelete = () => {
    const newList = newRows.map((x) => x);
    const deletedList = newList.filter(
      (arr) => !selectedItem.find((item) => item === arr.id)
    );
    setNewRows(deletedList);
  };

  useEffect(() => {
    setChosenRow((item) => {
      if (selectedItem.length === 1) {
        return newRows.find((x) => x.id === selectedItem[0]);
      } else {
        return { id: "", lastName: "", firstName: "", age: "", team: "" };
      }
    });
  }, [selectedItem]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={newRows}
        columns={columns}
        checkboxSelection
        disableColumnMenu
        onSelectionModelChange={(item) => {
          setSelectedItem(item);
        }}
      />
      <Form
        selectedItem={chosenRow}
        rows={rows}
        updateNewList={updateNewList}
        handleDelete={handleDelete}
      />
    </div>
  );
}
