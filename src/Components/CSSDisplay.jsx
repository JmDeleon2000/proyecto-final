import { element } from 'prop-types';
import React, { useState } from 'react';
import VertGame from './VertGame.jsx'



function CSSDisplay() {
const [GameElements, setElements] = useState([{id:0, elements:[{id: 0, elements:[0,1]}, {id: 1, elements:[0,1]}]}]) 

const reduce =(x, y)=>
{
    console.log(x)
    console.log(y)
    if (x === -1)
    {
        if (GameElements.length === 1)
        {
            return;
        }
        setElements(GameElements.filter((el)=>(el.id !== y)));
    }
    else
    {
        const elements = GameElements
        //elements[y].elements = elements[y].elements[x].elements.pop()
        console.log(elements[y].elements[x].elements.pop())
        console.log(elements[y].elements[x].elements.pop())
        console.log(elements[y].elements[x])
        const last = elements[y].elements[x].elements.pop()
        
        setElements(GameElements.map((el)=>(el.id === y ? {id: el.id, 
            elements:el.elements[x].elements.map((l)=>(l))} :el)));
    }
}

    return (
        <div className = 'CSSDisp'>
        {GameElements.map((el)=>(<VertGame horGames = {el.elements} key = {el.id} y = {el.id} reduce = {reduce}/>))}
        </div>
    );
}
export default CSSDisplay;