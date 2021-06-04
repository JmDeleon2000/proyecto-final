import React from 'react';
import PropTypes from 'prop-types'
import HorGame from './HorGame.jsx'



function VertGame({horGames, reduce, augment, y}) {
    const xGames = horGames
    return (
        <div className = 'VertGame'>
        <button type='button' onClick = {()=>reduce(-1, y)} className = 'VertGameButton'>+</button>
        <div className = 'VertGameCont'>
        {xGames.map((x)=>(<HorGame key={x.id+(y+x.id)*10} reduce = {reduce} elements = {x.elements}
        augment = {augment} x = {x.id} y = {y}/>))}
        </div>
        <button type='button' onClick = {()=>augment(-1, y)} className = 'VertGameButton'>+</button>
        </div>
    );
}

VertGame.propTypes = 
{
    horGames: PropTypes.arrayOf(Object).isRequired,
    reduce: PropTypes.func.isRequired,
    augment: PropTypes.func.isRequired,
    y: PropTypes.number.isRequired
}

export default VertGame