import React from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const PendingTask = ({
  taskList,
  handleComplete,
  handleDelete,
  handleEdit,
  selectedTask,
}) => {
  return (
    <Box
      width="100%"
      minHeight="400px"
      border="2px solid #479"
      display="flex"
      flexDirection="column"
    >
      <Box backgroundColor="#479" textAlign="center">
        <Typography variant="h4" color="#fff">
          Pending Task
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">S.no</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Created Time</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList?.map((task, ind) => (
              <TableRow  align="center" key={ind}>
                <TableCell align="center"l>{ind + 1}</TableCell>
                <TableCell align="center">{task?.task}</TableCell>
                <TableCell align="center">{task?.createdAt}</TableCell>
                <TableCell align="center">
                  <IconButton
                    sx={{ color: "black" }}
                    color="primary"
                    onClick={() => handleEdit(task)}
                  >
                    <Tooltip title="Edit Task" arrow>
                      <EditIcon />
                    </Tooltip>
                  </IconButton>
                  <IconButton
                    sx={{ color: "black" }}
                    disabled={
                      selectedTask && selectedTask.id === task.id ? true : false
                    }
                    color="primary"
                    onClick={() => handleComplete(task)}
                  >
                    <Tooltip title="Complete" arrow>
                      <TaskAltIcon />
                    </Tooltip>
                  </IconButton>
                  <IconButton
                    sx={{ color: "black" }}
                    color="primary"
                    disabled={
                      selectedTask && selectedTask.id === task.id ? true : false
                    }
                    onClick={() => handleDelete(task)}
                  >
                    <Tooltip title="Delete" arrow>
                      <DeleteIcon />
                    </Tooltip>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PendingTask;
