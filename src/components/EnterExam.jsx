import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem, Grid } from '@mui/material';
import mockExamData from '../utils/mockExamData';

function EnterExam() {
  const [examName, setExamName] = useState('');
  const [duration, setDuration] = useState('');
  const [selectionMode, setSelectionMode] = useState('auto');
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExam = {
      examName,
      duration,
      selectionMode,
      questions: selectionMode === 'manual' ? 'Selected manually' : 'Auto-generated',
    };
    mockExamData.push(newExam); // Add new exam to mock data
    navigate('/exam-details');
  };

  return (
    <div className="form-container">
      <h2>Enter Exam Details</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Exam Name" value={examName} onChange={(e) => setExamName(e.target.value)} fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Duration (minutes)" value={duration} onChange={(e) => setDuration(e.target.value)} type="number" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField select label="Question Selection Mode" value={selectionMode} onChange={(e) => setSelectionMode(e.target.value)} fullWidth>
              <MenuItem value="auto">Auto</MenuItem>
              <MenuItem value="manual">Manual</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default EnterExam;
