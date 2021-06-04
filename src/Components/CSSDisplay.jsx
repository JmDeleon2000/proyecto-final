import { element } from 'prop-types';
import React, { useState } from 'react';
import VertGame from './VertGame.jsx'


let keys = 15
let xkeys = 100

function CSSDisplay() {
const [GameElements, setElements] = useState([{id:0, elements:[{id: 0, elements:[0,1]}, {id: 1, elements:[0,1]}]}]) 



const augment =(x, y)=>
{
    if (x === -1)
    {
        setElements(GameElements.map((el)=>(el.id === y ? 
            {id:y, elements:[...el.elements, {id:keys, elements:[0, 1]}]}:el)))
            keys+=1
    }
    else
    {
        setElements(GameElements.map(el=>({id:el.id, elements: el.elements.map((l)=>(l.id === x ? {id:l.id, elements:[...l.elements, xkeys]}:l))})))
        xkeys+=1
    }
}

    return (
        <div className = 'CSSDisp'>
        {GameElements.map((el)=>(<VertGame horGames = {el.elements} key = {el.id} y = {el.id} reduce = {augment} augment={augment}/>))}
        </div>
    );
}
export default CSSDisplay;