import React from 'react'

const styles={
  display:'flex',
  background:"orange",
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  height: '8vh',
  color:'#fff',
  position:'fixed',
  width:'100vw'

}

export default function Header(props) {
  return (
    <div>
      <div style={styles} className="header-group">
        <h3>Clicky Game</h3>
        <h3>Click Any card to play, but only click Once!</h3>
        <h3>Current Score: {props.counter} High Score : {props.maxScore}</h3>
      </div>
      
    </div>
  )
}
