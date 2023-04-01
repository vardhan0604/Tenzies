import React from 'react'
import "./Die.css"
const Die = (props) => {
  const {isHeld ,hold ,value, id}=props;
  return (
    // <div className= 'Die' >
    <div className= {`Die ${isHeld ? 'isHeld' : ''}`} onClick={()=>hold(id)}> 
     <p>{value}</p>
    </div>
  )
}

export default Die
