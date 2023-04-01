import React, { useState } from 'react';
import Hero from './components/Hero/Hero'
import Die from "./components/Die/Die"
import Confetti from 'react-confetti'

function generate(i){
  return{
    key : i,
    id : i,
    value : Math.floor(Math.random() * 6) + 1,
    isHeld : false
  }
}

const App = () => {
  function getNewDice(){
    const result = []
    for (let i = 0; i < 10; i++) {
      
     
      
      result.push(
        generate(i)
      );
    }
    return result;
  }
  
  const [diceList,setDiceList]=React.useState(getNewDice());
  const [tenzies, setTenzies] = React.useState(false)
  
  React.useEffect(() => {
    const isTrue=diceList.every(el => el.isHeld)
    const first=diceList[0].value
    const equal=diceList.every(el=> el.value===first)
    if(isTrue && equal){
      console.log("You finally won BITCH!")
      setTenzies(true)
    }
  }, [diceList])
  
  const els=diceList.map((el)=> <Die isHeld={el.isHeld} key={el.key}  hold={hold}  value={el.value} id={el.key}  />)


  function rollDice(){
    if(!tenzies){
      setDiceList(old => old.map(die =>{
        return die.isHeld ? die : generate(die.id)
      }))
    }else{
      setTenzies(false)
      setDiceList(getNewDice())
    }
  }

  function hold(id){
    const x=diceList.map(el => {
      return el.id === id ? {...el,isHeld : !el.isHeld} : el
    })
    setDiceList(x);
    
  }
  
  return (
    <div className='main'>
      {tenzies && <Confetti  width={window.innerWidth}
      height={window.innerHeight} /> }
      <div className='game'>

        <Hero />
        <div className='grid'>
          {els}
        </div>
        <button className='btn' onClick={rollDice}>{tenzies ? "Start New Game ": "Roll Dice"}</button>
      </div>
    </div>
  )
}

export default App

