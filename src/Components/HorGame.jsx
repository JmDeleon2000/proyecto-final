import React from 'react';
import PropTypes from 'prop-types'


function HorGame({elements, reduce, augment, x, y}) {

    return (
        <div className = 'HorGame'>
        <button type='button' onClick = {()=>reduce(x, y)} className = 'HorGameButton'> </button>
        <div className = 'HorGameCont'>
        {elements.map(el=>(<div key={el} className = 'HorGameElement'/>))}
        </div>
        <button type='button' onClick = {()=>augment(x, y)} className = 'HorGameButton'> </button>
        </div>
    );
}

HorGame.propTypes = 
{
    elements: PropTypes.arrayOf(Object).isRequired,
    reduce: PropTypes.func.isRequired,
    augment: PropTypes.func.isRequired,
    y: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired
}

export default HorGame;