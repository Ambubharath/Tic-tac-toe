import React, { useState } from "react";
import Board from "./Board";
import { Box, Typography, Button } from "@mui/material";
import "../styles.css";

const calculateWinner = (squares) => {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // 'X' or 'O'
    }
  }
  return squares.includes(null) ? null : "Tie";
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";

    setSquares(newSquares);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <Box className="game-container">
      <Typography variant="h3" className="game-title">TIC-TAC-TOE</Typography>
      <Board squares={squares} onClick={handleClick} />
      <Button variant="contained" className="reset-btn" onClick={resetGame}sx={{ marginTop: "40px" }}>
        
        Reset Game
      </Button>

      {winner && (
        <div className="winner-banner">
          {winner === "Tie" ? "It's a Tie!" : `${winner} Wins!`}
        </div>
      )}
    </Box>
    
  );
  
  
};






export default Game;
