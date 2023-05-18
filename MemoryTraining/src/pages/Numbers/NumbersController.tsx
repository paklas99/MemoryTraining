import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MemorizeNumbersModel from './NumbersModel';
import MemorizeNumbersView from './NumbersView';

const theme = createTheme();

const MemorizeNumbersPage: React.FC = () => {
  const [numberCount, setNumberCount] = useState<number>(5); // Number of numbers to memorize
  const [gameStarted, setGameStarted] = useState<boolean>(false); // Track if the game has started
  const [userInput, setUserInput] = useState<string>(''); // User input for repeating the numbers
  const [score, setScore] = useState<number>(0); // Score based on correct answers
  const [numbersToMemorize, setNumbersToMemorize] = useState<number[]>([]); // Numbers to memorize
  const [timerDuration, setTimerDuration] = useState<number>(5); // Timer duration in seconds

  const model = new MemorizeNumbersModel();

  const handleNumberCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const count = Number(event.target.value);
    setNumberCount(count);
  };

  const handleTimerDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const duration = Number(event.target.value);
    setTimerDuration(duration);
  };

  const handleStartGame = () => {
    model.startGame(numberCount);
    setGameStarted(true);
    setUserInput('');
    setScore(0);
    setNumbersToMemorize(model.getNumbersToMemorize());
  };

  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleCheckAnswer = () => {
    const correctCount = model.checkAnswer(userInput);
    setScore(correctCount);
  };

  return (
    <ThemeProvider theme={theme}>
      <MemorizeNumbersView
        numberCount={numberCount}
        timerDuration={timerDuration}
        userInput={userInput}
        score={score}
        gameStarted={gameStarted}
        numbersToMemorize={numbersToMemorize}
        onNumberCountChange={handleNumberCountChange}
        onTimerDurationChange={handleTimerDurationChange}
        onStartGame={handleStartGame}
        onUserInputChange={handleUserInputChange}
        onCheckAnswer={handleCheckAnswer}
      />
    </ThemeProvider>
  );
};

export default MemorizeNumbersPage;
