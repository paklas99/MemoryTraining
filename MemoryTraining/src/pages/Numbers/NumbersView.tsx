import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface MemorizeNumbersViewProps {
  numberCount: number;
  groupBy: number; // Add this line
  numbersToMemorize: string; // Change this to string if you're formatting grouped numbers as a string
  userInput: string;
  score: number;
  onNumberCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onGroupByChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add this line
  onUserInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckAnswer: () => void;
  onStartGame: () => void;
}


const MemorizeNumbersView: React.FC<MemorizeNumbersViewProps> = ({
  numberCount,
  groupBy, // Ensure this is received from props
  numbersToMemorize,
  userInput,
  score,
  onNumberCountChange,
  onGroupByChange, // Ensure this is received from props
  onUserInputChange,
  onCheckAnswer,
  onStartGame,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4">Memory Game</Typography>
      
      <TextField
        label="Number of Digits"
        type="number"
        value={numberCount}
        onChange={onNumberCountChange}
        variant="outlined"
        sx={{ mt: 2, mb: 2 }}
      />

      {/* Add this new TextField for group size */}
      <TextField
        label="Group Size"
        type="number"
        value={groupBy}
        onChange={onGroupByChange}
        variant="outlined"
        sx={{ mt: 2, mb: 2 }}
      />
      
      <Button variant="contained" onClick={onStartGame} sx={{ mb: 2 }}>
        Start Game
      </Button>
      
      {numbersToMemorize && (
        <>
          <Typography variant="h6">Memorize these numbers:</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'bold', my: 2 }}>
            {numbersToMemorize}
          </Typography>
        </>
      )}
      
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
