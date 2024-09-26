import React, { useState } from 'react';
import { TextField, Grid, Button, Switch, FormControlLabel } from '@mui/material';

const AdvancedSettings = () => {
  const [settings, setSettings] = useState({ randomize: false, timer: '' });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSwitch = () => {
    setSettings((prevSettings) => ({ ...prevSettings, randomize: !prevSettings.randomize }));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={<Switch checked={settings.randomize} onChange={handleSwitch} />}
          label="Randomize Questions"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="timer"
          label="Timer (seconds)"
          type="number"
          fullWidth
          variant="outlined"
          value={settings.timer}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={() => console.log(settings)}>
          Save Advanced Settings
        </Button>
      </Grid>
    </Grid>
  );
};

export default AdvancedSettings;
