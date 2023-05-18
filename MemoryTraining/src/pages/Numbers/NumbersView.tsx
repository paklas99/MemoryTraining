import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  CardContent,
  Card,
  Container,
} from '@mui/material';

interface MemorizeNumbersViewProps {
  numberCount: number;
  timerDuration: number;
  userInput: string;
  score: number;
  gameStarted: boolean;
  numbersToMemorize: number[];
  onNumberCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTimerDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStartGame: () => void;
  onUserInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckAnswer: () => void;
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
  onStartGame,
  onUserInputChange,
  onCheckAnswer,
}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Memorize Numbers
            </Typography>
            {gameStarted ? (
              <Typography variant="body1">
                Memorize these numbers: {numbersToMemorize.join(', ')}
              </Typography>
            ) : (
              <>
                <Typography variant="body1">Repeat the numbers you memorized:</Typography>
                <TextField
                  label="Your Answer"
                  value={userInput}
                  onChange={onUserInputChange}
                  variant="outlined"
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={onCheckAnswer}>
                  Check Answer
                </Button>
                <Typography variant="h6" gutterBottom>
                  Score: {score}/{numberCount}
                </Typography>
              </>
            )}
            {!gameStarted && (
              <>
                <Typography variant="body1">Number of digits to memorize:</Typography>
                <TextField
                  type="number"
                  value={numberCount}
                  onChange={onNumberCountChange}
                  variant="outlined"
                  margin="normal"
                />
                <Typography variant="body1">Timer duration (seconds):</Typography>
                <TextField
                  type="number"
                  value={timerDuration}
                  onChange={onTimerDurationChange}
                  variant="outlined"
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={onStartGame} fullWidth>
                  Start Game
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default MemorizeNumbersView;
