import React, {useState, useEffect} from 'react'

import './App.css'
const App = () => {
const [userChoice, setUserChoice] = useState('rock');
const [computerChoice, setComputerChoice] = useState('rock')
const [userPoints, setUserPoints] = useState(0);
const [computerPoints, setComputerPoints] = useState(0);
const [turnResult, setTurnResult] = useState(null);
const [result, setResult] = useState(`Let's see who wins`)
const [gameOver, setGameOver] = useState(false);
const choices = ['rock', 'paper', 'scissors']


const handelClick = (choice) => {

setUserChoice(choice);
generateComputerChoice()


}


const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]

setComputerChoice(randomChoice)
}



const reset = () => {
  window.location.reload()
}

useEffect(() => {
const comboMoves = userChoice + computerChoice;
if(userPoints <= 4 && computerPoints <=4){
  if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
    const updatedUserPoints = userPoints + 1;
    setUserPoints(updatedUserPoints)
    setTurnResult('User got the point');
    if(updatedUserPoints === 5){
      setGameOver(true);
      setResult('User Wins');

    }

  }
  if(comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
    const updateComputerPoints = computerPoints + 1;
    setComputerPoints(updateComputerPoints);
    setTurnResult('Computer got the point');
    if(updateComputerPoints === 5){
      setGameOver(true);
      setResult('Computer Wins')
    } 
  }
if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors'){
setTurnResult('No one Got A Point')
}

}
}, [userChoice, computerChoice])



  return (
    <div className='App'>
      <h1 className='heading'>ROCK PAPER, SCISSORS</h1>
      <div className='score'>
<h2>User Point : {userPoints}</h2>
<h2>Computer Points : {computerPoints}</h2>
      </div>
      <div className='choice'>
<div className='choice-user'>
<img  alt='image' className='user-hand' src={`../images/${userChoice}.png`}  />
</div>
<div className='choice-computer'>
<img  alt='image' className='computer-hand' src={`../images/${computerChoice}.png`}   />
</div>
      </div>

<div children='button-div'>
{
  choices.map((choice, index) => (
    <>
      <button className='button' key='index' onClick={() => handelClick(choice)} >
        {choice}
      </button>
    </>
  ))}
</div>

<div className='result'>
<h1>Turn Result : {turnResult}</h1>
<h1>Final Result : {result}</h1>
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



