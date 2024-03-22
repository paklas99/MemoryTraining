import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MemorizeNumbersModel from './NumbersModel';
import NumberViewSetup from './NumberViewSetup';
import MemorizeNumbersView from './NumbersView';

const theme = createTheme();

const MemorizeNumbersController: React.FC = () => {
  const [numberCount, setNumberCount] = useState(5); // Default to 5 digits
  const [userInput, setUserInput] = useState('');
  const [numbersToMemorize, setNumbersToMemorize] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [model, setModel] = useState(() => new MemorizeNumbersModel());



  

  const handleNumberCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberCount(parseInt(event.target.value, 10) || 0);
  };

  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleStartGame = () => {
    model.startGame(numberCount);
    setNumbersToMemorize(model.getNumbersToMemorize());
    setGameStarted(true);
    setUserInput(''); // Clear previous input
  };

  const handleCheckAnswer = () => {
    console.log('Checking answer...');
    const correctCount = model.checkAnswer(userInput);
    console.log(`Score: ${correctCount} and ` + model.getScore());
    setScore(correctCount); // Update the local component state for score
  };
  
  

  return (
    <div>
      {!gameStarted ? (
        <div>
          <input type="number" value={numberCount} onChange={handleNumberCountChange} placeholder="Number of digits" />
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      ) : (
        <div>
          <p>Memorize these numbers: {numbersToMemorize}</p>
          <input type="text" value={userInput} onChange={handleUserInputChange} placeholder="Your answer" />
          <button onClick={handleCheckAnswer}>Check Answer</button>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default MemorizeNumbersController;