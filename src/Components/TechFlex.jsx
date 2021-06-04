import React, { useState } from 'react';
import './TechFlex.css'
import CSSDisplay from './CSSDisplay.jsx'


function TechFlex() {
const [sizing, setSizing] = useState( 
{
    width: '40vw',
    height: '40vw',
    backgroundColor: 'whitesmoke',
    borderStyle:'solid', 
    borderRadius:'1%',
    margin: '1vw'
})

    const resize =(init, x, y)=>
    {
        const newWidth = (init).toString().concat('vw')
        const newHeight= (init/x*y).toString().concat('vw')
        setSizing( 
        {
            width: newWidth,
            height: newHeight,
            backgroundColor: 'whitesmoke',
            borderStyle:'solid', 
            borderRadius:'1%',
            margin: '1vw'
        })
    }
    return (
        <div className='TechFlexCont' >
        <div style={{width:'42vw', height:'100%', backgroundColor:'blue', marginLeft:'2vw', marginTop:'1vh', marginRight: '2vw'}}>
        <div className='marginCont'>
        <h1 className='FlexHeader'>Change my size!</h1>
        <button onClick = {()=>resize(40, 1, 1)} type='button' className='onetoOneButton'>1:1</button>
        <button onClick = {()=>resize(40, 4, 3)} type='button' className='onetoOneButton'>4:3</button>
        <button onClick = {()=>resize(40, 16, 9)} type='button' className='onetoOneButton'>16:9</button>
        <button onClick = {()=>resize(40, 3, 2)} type='button' className='onetoOneButton'>3:2</button>
        <button onClick = {()=>resize(40, 9, 5)} type='button' className='onetoOneButton'>9:5</button>
        </div>
        <div style = {sizing}><CSSDisplay/></div>
        </div>
        </div>
    );
}
export default TechFlex;