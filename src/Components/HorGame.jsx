import React from 'react';



function HorGame({elements, reduce, augment, x, y}) {

    return (
        <div className = 'HorGame'>
        <button type='button' onClick = {()=>reduce(x, y)} className = 'HorGameButton'></button>
        <div className = 'HorGameCont'>
        {elements.map(el=>(<div key={el} className = 'HorGameElement'/>))}
        </div>
        <button type='button' onClick = {()=>augment(x, y)} className = 'HorGameButton'></button>
        </div>
    );
}


export default HorGame;