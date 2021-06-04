import React, { useState } from 'react';
import VertGame from './VertGame.jsx'



function CSSDisplay() {
const [GameElements, setElements] = useState([{id:0, elements:[{id: 0, elements:[0,1]}, {id: 1, elements:[0,1]}]}]) 

const reduce =(x, y)=>
{
    if (x === -1)
    {
;
    }
    else
    {
        ;
    }
}

    return (
        <div className = 'CSSDisp'>
        {GameElements.map((el)=>(<VertGame horGames = {el.elements} key = {el.id} y = {el.id} />))}
        </div>
    );
}
export default CSSDisplay;