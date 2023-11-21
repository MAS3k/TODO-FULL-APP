import React, { useState } from "react";
import InputTask from "./components/InputTask";
import Navbar from "./components/Navbar";
import CompletedTask from "./components/CompletedTask";
import "./App.css";
import { Box, Container } from "@mui/material";
import PendingTask from "./components/PendingTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAdd = (task) => {
    const preparedDate = {
      id: new Date(),
      task: task,
      status: "pending",
      createdAt: selectedTask
        ? "Edited @ " + new Date().toLocaleTimeString()
        : new Date().toLocaleTimeString(),
      completeAt: null,
    };

    if (selectedTask) {
      const updatedTask = tasks?.map((t) => {
        if (t.id === selectedTask.id) {
          return {
            ...selectedTask,
            task: task,
            createdAt: preparedDate.createdAt,
          };
        }
        return t;
      });
      setTasks(updatedTask);
      setSelectedTask(null);
    } else {
      setTasks([...tasks, preparedDate]);
    }
  };

  const handleComplete = (completeId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === completeId.id) {
          return {
            ...task,
            status: "completed",
            completeAt: new Date().toLocaleTimeString(),
          };
        }
        return task;
      })
    );
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId.id));
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  const handleRestore = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId.id) {
          return {
            ...task,
            status: "pending",
          };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <Navbar />
      <InputTask handleAdd={handleAdd} selectedTask={selectedTask} />
      <Container>
        <Box display="flex" gap="50px" marginTop="20px">
          <PendingTask
            taskList={tasks.filter((task) => task.status === "pending")}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            selectedTask={selectedTask}
            handleEdit={handleEdit}
          />
          <CompletedTask
            tasksList={tasks.filter((task) => task.status === "completed")}
            handleRestore={handleRestore}
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
