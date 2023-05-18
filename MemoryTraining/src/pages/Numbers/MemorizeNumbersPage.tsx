import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Box, CardContent, Card, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const MemorizeNumbersPage: React.FC = () => {
    const [numberCount, setNumberCount] = useState<number>(5); // Number of numbers to memorize
    const [timerDuration, setTimerDuration] = useState<number>(5); // Timer duration in seconds
    const [gameStarted, setGameStarted] = useState<boolean>(false); // Track if the game has started
    const [numbersToMemorize, setNumbersToMemorize] = useState<number[]>([]); // Numbers to memorize
    const [userInput, setUserInput] = useState<string>(''); // User input for repeating the numbers
    const [score, setScore] = useState<number>(0); // Score based on correct answers

    const handleNumberCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberCount(Number(event.target.value));
    };

    const handleTimerDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimerDuration(Number(event.target.value));
    };

    const handleStartGame = () => {
        // Generate random numbers to memorize
        const numbers: number[] = [];
        for (let i = 0; i < numberCount; i++) {
            const randomNum: number = Math.floor(Math.random() * 10);
            numbers.push(randomNum);
        }
        setNumbersToMemorize(numbers);
        setGameStarted(true);
        setUserInput('');
        setScore(0);
    };

    const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleCheckAnswer = () => {
        // Convert user input to an array of numbers
        const userAnswers: number[] = userInput.split(',').map((str) => Number(str.trim()));

        // Calculate the score based on the number of correct answers
        let correctCount = 0;
        numbersToMemorize.forEach((num, index) => {
            if (userAnswers[index] === num) {
                correctCount++;
            }
        });
        setScore(correctCount);
    };

    useEffect(() => {
        if (gameStarted) {
            // Timer logic to display the numbers for memorization
            const timer = setTimeout(() => {
                setGameStarted(false);
            }, timerDuration * 1000);

            return () => clearTimeout(timer);
        }
    }, [timerDuration, gameStarted]);

    return (
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
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
                      <Typography variant="body1">
                        Repeat the numbers you memorized:
                      </Typography>
                      <TextField
                        label="Your Answer"
                        value={userInput}
                        onChange={handleUserInputChange}
                        variant="outlined"
                        margin="normal"
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCheckAnswer}
                      >
                        Check Answer
                      </Button>
                      <Typography variant="h6" gutterBottom>
                        Score: {score}/{numberCount}
                      </Typography>
                    </>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleStartGame}
                    fullWidth
                  >
                    Start Game
                  </Button>
                </CardContent>
              </Card>
            </Container>
          </Box>
        </ThemeProvider>
      );
};

export default MemorizeNumbersPage;     