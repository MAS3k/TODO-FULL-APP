import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";

export default function InputTask({ handleAdd, selectedTask }) {
  const [inputValue, setInputValue] = useState("");

  const InputVal = (e) => {
    setInputValue(e.target.value);
  };

  const AddTask = () => {
    if (inputValue === "") {
      alert("Write something in the box");
    } else {
      handleAdd(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (selectedTask !== null) {
      setInputValue(selectedTask.task);
    }
  }, [selectedTask]);

  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <TextField
          sx={{
            width: "50%",
          }}
          id="outlined-basic"
          placeholder="Add Task"
          variant="outlined"
          value={inputValue}
          onChange={InputVal}
        />
        <Button
          style={{ backgroundColor: "#479" }}
          type="primary"
          variant="contained"
          onClick={AddTask}
        >
          {selectedTask ? "Update" : "Add"}
        </Button>
      </CardContent>
    </Card>
  );
}
