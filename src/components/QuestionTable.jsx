import React, { useState } from 'react';
import { TextField, Button, Grid, IconButton, Paper, TableContainer, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import mockTopics from '../utils/mockData';
import './QuestionTable.css';

const QuestionTable = () => {
  const [rows, setRows] = useState([{ topic: '', easy: 0, medium: 0, hard: 0 }]);

  const handleAddRow = () => setRows([...rows, { topic: '', easy: 0, medium: 0, hard: 0 }]);
  
  const handleRemoveRow = (index) => setRows(rows.filter((_, i) => i !== index));

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: '1rem' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Topic</TableCell>
              <TableCell>Easy</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>Hard</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <TextField
                    select
                    value={row.topic}
                    onChange={(e) => handleChange(index, 'topic', e.target.value)}
                    fullWidth
                    SelectProps={{ native: true }}
                  >
                    {mockTopics.map((topic, i) => (
                      <option key={i} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.easy}
                    onChange={(e) => handleChange(index, 'easy', parseInt(e.target.value) || 0)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.medium}
                    onChange={(e) => handleChange(index, 'medium', parseInt(e.target.value) || 0)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    type="number"
                    value={row.hard}
                    onChange={(e) => handleChange(index, 'hard', parseInt(e.target.value) || 0)}
                  />
                </TableCell>
                <TableCell>{row.easy + row.medium + row.hard}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRemoveRow(index)}>
                    <Delete />
                  </IconButton>
                  <IconButton>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleAddRow} sx={{ marginTop: '1rem' }}>
        Add Row
      </Button>
    </>
  );
};

export default QuestionTable;
