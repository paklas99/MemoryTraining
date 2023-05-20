import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

interface SetupProps {
  onStartGame: (numberCount: number, groupBy: number) => void;

}

const NumberViewSetup: React.FC<SetupProps> = ({ onStartGame }) => {
  const [numberCount, setNumberCount] = React.useState('');
  const [groupBy, setGroupBy] = React.useState('');

  const handleStartGame = () => {
    const parsedNumberCount = parseInt(numberCount, 10);
    const parsedGroupBy = parseInt(groupBy, 10);

    onStartGame(parsedNumberCount, parsedGroupBy);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4">Setup</Typography>

      <TextField
        label="Number of Digits"
        value={numberCount}
        onChange={(e) => setNumberCount(e.target.value)}
        type="number"
        variant="outlined"
        sx={{ mt: 3 }}
      />

      <TextField
        label="Group By"
        value={groupBy}
        onChange={(e) => setGroupBy(e.target.value)}
        type="number"
        variant="outlined"
        sx={{ mt: 2 }}
      />

      <Button variant="contained" onClick={handleStartGame} sx={{ mt: 3 }}>
        Start Game
      </Button>
    </Box>
  );
};

export default NumberViewSetup;
