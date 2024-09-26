import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#004d40', width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Exam Manager
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/enter-exam">
            Enter Exam
          </Button>
          <Button color="inherit" component={Link} to="/exam-details">
            View Exams
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
