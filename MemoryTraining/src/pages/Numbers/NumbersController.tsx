import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MemorizeNumbersModel from './NumbersModel';
import NumberViewSetup from './NumberViewSetup';
import MemorizeNumbersView from './NumbersView';

const theme = createTheme();

const MemorizeNumbersController: React.FC = () => {
  const [numberCount, setNumberCount] = useState(5); // Default to 5 digits
  const [userInput, setUserInput] = useState('');
  const [numbersToMemorize, setNumbersToMemorize] = useState('');
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [model, setModel] = useState(() => new MemorizeNumbersModel());
  const [groupBy, setGroupBy] = useState(1);




// Handler for changing group size
  const handleGroupByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGroupBy = parseInt(event.target.value, 10) || 1;
    setGroupBy(newGroupBy);
    model.setGroupBy(newGroupBy); // Update the model with the new group size
  };

// Adjust handleStartGame to include grouping logic if necessary


  const handleNumberCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberCount(parseInt(event.target.value, 10) || 0);
  };

  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleStartGame = () => {
    model.startGame(numberCount);
    model.setGroupBy(groupBy);
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
    <ThemeProvider theme={theme}>
      <div>
        {!gameStarted ? (
          <div>
            <input type="number" value={numberCount} onChange={handleNumberCountChange} placeholder="Number of digits" />
            <input type="number" value={groupBy} onChange={handleGroupByChange} placeholder="Group digits by" />
            <button onClick={handleStartGame}>Start Game</button>
          </div>
        ) : (
          <MemorizeNumbersView
            numberCount={numberCount}
            numbersToMemorize={numbersToMemorize}
            userInput={userInput}
            score={score}
            groupBy={groupBy} // Assuming you've updated MemorizeNumbersView to accept and use this prop
            onNumberCountChange={handleNumberCountChange}
            onGroupByChange={handleGroupByChange}
            onUserInputChange={handleUserInputChange}
            onCheckAnswer={handleCheckAnswer}
            onStartGame={() => {}} // onStartGame might not be needed once the game has started, adjust as necessary
            />
            )}
      </div>
    </ThemeProvider>
  );}
  
  export default MemorizeNumbersController;