import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Typography,
  Paper,
} from "@mui/material";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";

const CompletedTask = ({ tasksList, handleRestore }) => {
  const handleRestoreClick = (task) => {
    handleRestore(task);
  };

  const renderCompletedTask = () => {
    return tasksList?.map((task, ind) => {
      if (task?.status === "completed") {
        return (
          <TableRow align="center" key={ind}>
            <TableCell align="center">{ind + 1}</TableCell>
            <TableCell align="center">{task?.task}</TableCell>
            <TableCell align="center">{task.createdAt}</TableCell>
            <TableCell align="center">
              {task?.status === "completed" ? task.completeAt : ""}
            </TableCell>
            <TableCell>
              <IconButton
                sx={{ color: "black" }}
                color="primary"
                onClick={() => handleRestoreClick(task)}
              >
                <Tooltip title="Restore">
                  <SettingsBackupRestoreIcon />
                </Tooltip>
              </IconButton>
            </TableCell>
          </TableRow>
        );
      }
      return null;
    });
  };

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
          Completed Task
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">S.no</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Created-Time</TableCell>
              <TableCell align="center">Completed-Time</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderCompletedTask()}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CompletedTask;
