import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MemorizeNumbersModel from './NumbersModel';
import NumberViewSetup from './NumberViewSetup';
import MemorizeNumbersView from './NumbersView';

const theme = createTheme();

const MemorizeNumbersController: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [numberCount, setNumberCount] = useState(5);
  const [timerDuration, setTimerDuration] = useState(5);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [numbersToMemorize, setNumbersToMemorize] = useState<number[]>([]);
  
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
    model.startGame(numberCount, 2);
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
      {gameStarted ? (
        <MemorizeNumbersView
        numberCount={numberCount}
        timerDuration={timerDuration}
        userInput={userInput}
        score={score}
        gameStarted={gameStarted}
        numbersToMemorize={numbersToMemorize}
        onNumberCountChange={handleNumberCountChange}
        onTimerDurationChange={handleTimerDurationChange}
        onUserInputChange={handleUserInputChange}
        onCheckAnswer={handleCheckAnswer}
        onStartGame={handleStartGame}
        />
      ) : (
        <NumberViewSetup onStartGame={handleStartGame} />
      )}
    </ThemeProvider>
  );
};

export default MemorizeNumbersController;
