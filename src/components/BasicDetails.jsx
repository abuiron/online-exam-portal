// src/components/BasicDetails.jsx
import React, { useState } from 'react';
import { TextField, MenuItem, Grid } from '@mui/material';
import QuestionTable from './QuestionTable';

const BasicDetails = ({ examData, setExamData }) => {
  const handleInputChange = (field, value) => {
    setExamData({ ...examData, [field]: value });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Exam Name"
            value={examData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="number"
            label="Exam Duration (in minutes)"
            value={examData.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Question Picking"
            value={examData.pickingType}
            onChange={(e) => handleInputChange('pickingType', e.target.value)}
          >
            <MenuItem value="Auto">Auto</MenuItem>
            <MenuItem value="Manual">Manual</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {examData.pickingType === 'Manual' && <QuestionTable />}
    </div>
  );
};

export default BasicDetails;
