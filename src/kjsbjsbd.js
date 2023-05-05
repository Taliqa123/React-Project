import React, { useEffect, useState } from 'react'

const App = () => {

const [userChoice, setUserChoice] = useState('rock');
const [computerChoice, setComputerChoice] = useState('rock');
const [userPoints, setUserPoints] = useState(0);
const [computerPoints, setComputerPoints] = useState(0);
const [turnResult, setTurnResult] = useState(null);
const [result, setResult] = useState(`let's see who wins`);
const [gameOver, setGameOver] = useState(false);
const choices = ['rock', 'paper', 'scissors'];



const handelClick= (choice) => {
setUserChoice(choice);
generateComputerChoice()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  setComputerChoice(randomChoice)
}



useEffect(() => {
const comboMoves = userChoice + computerChoice;
if(userPoints <=4 && computerChoice <=4){
  if(comboMoves === 'paperrock' || comboMoves === 'rockscissors' || comboMoves === 'scissorspaper'){
    const updatedUserPoints = userPoints + 1;
    setUserPoints(updatedUserPoints)
    setTurnResult('user got the Point');
    if(updatedUserPoints === 5){
      setGameOver(true);
      setResult('User Wins')
    }
  }


if(comboMoves === 'rockpaper' || comboMoves === 'scissorsrock' || comboMoves === 'paperscissors'){
  const updateComputerPoints = computerPoints + 1;
  setComputerPoints(updateComputerPoints);
  setTurnResult('computer got the point')
  if(updateComputerPoints === 5){
    setGameOver(true);
    setResult('computer Wins')

  }
}

if(comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors'){
  setResult('No one got the Point')
}


}


}, [userChoice, computerChoice])

const reset = () => {
  window.location.reload()
}

  return (
    <div className='App'>
    <h1>Rock Paper Scissors</h1>
    <p><span>Player Points : {userPoints}</span> <span>Computer Points : {computerPoints} </span></p>


<div className='choice'>
<div className='choice-user'>
<img  alt='image'  src={`../images/${userChoice}.png`}/>
</div>
<div className='choice-computer'>
<img  alt='image' src={`../images/${computerChoice}.png`} />
</div>
</div>

<div className='button-div'>
{
choices.map((choice, index) => (
<>
<button className='button' key={index} onClick={() => handelClick(choice)}>
{choice}
</button>
</>
))
}
</div>

<div className='result'>
<p>Turn Result : {turnResult}</p>
<p>Final Result : {result}</p>
</div>

<div className='button-div'>
{gameOver && 
<button className='button' onClick={() => reset()}>Restart Game</button>
}
</div>

    </div>
  )
}

export default App
