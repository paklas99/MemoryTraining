import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

interface MemorizeNumbersViewProps {
  numberCount: number;
  timerDuration: number;
  userInput: string;
  score: number;
  gameStarted: boolean;
  numbersToMemorize: number[];
  onNumberCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTimerDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUserInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckAnswer: () => void;
  onStartGame: () => void;
}

const MemorizeNumbersView: React.FC<MemorizeNumbersViewProps> = ({
  numberCount,
  timerDuration,
  userInput,
  score,
  gameStarted,
  numbersToMemorize,
  onNumberCountChange,
  onTimerDurationChange,
  onUserInputChange,
  onCheckAnswer,
  onStartGame,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4">Gameplay</Typography>

      <Typography variant="h6">Memorize the Numbers:</Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold', my: 2 }}>
        {numbersToMemorize.slice(0, numberCount).join(' ')}
      </Typography>

      <Typography variant="h6">Enter the Numbers:</Typography>
      <TextField
        label="Your Answer"
        value={userInput}
        onChange={onUserInputChange}
        variant="outlined"
        sx={{ mt: 2 }}
      />

      <Button variant="contained" onClick={onCheckAnswer} sx={{ mt: 3 }}>
        Check Answer
      </Button>

      <Typography variant="h6" sx={{ mt: 4 }}>
        Score: {score}
      </Typography>
    </Box>
  );
};

export default MemorizeNumbersView;
