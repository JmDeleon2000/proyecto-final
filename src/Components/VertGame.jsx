import React from 'react';
import HorGame from './HorGame.jsx'


function VertGame({horGames, reduce, augment, y}) {
    const xGames = horGames
    console.log(xGames)
    return (
        <div className = 'VertGame'>
        <button type='button' onClick = {()=>reduce(-1, y)} className = 'VertGameButton'>-</button>
        <div className = 'VertGameCont'>
        {xGames.map((x)=>(<HorGame key={x} reduce = {reduce} elements = {x.elements}
        augment = {augment} x = {x.id} y = {y}/>))}
        </div>
        <button type='button' onClick = {()=>augment(-1, y)} className = 'VertGameButton'>+</button>
        </div>
    );
}
export default VertGame;