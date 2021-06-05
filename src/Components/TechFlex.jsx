import React, { useState } from 'react';
import './TechFlex.css'
import CSSDisplay from './CSSDisplay.jsx'
import TechCard from './TechCard.jsx'
import reactLogo from './react-logo.png'
import bootstrapLogo from './bootstrap.jpg'
import CSSlogo from './css.png'
import Babellogo from './babel.png'
import Webpacklogo from './webpack.png'
import ESlintlogo from './eslint.png'
import Nginxlogo from './nginx.png'

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
        <div style={{width:'42vw', height:'100%', backgroundColor:'black', marginLeft:'2vw', marginTop:'1vh', marginRight: '2vw'}}>
        <div className='marginCont'>
        <h1 className='FlexHeader'>Add more elements and change my size!</h1>
        <button onClick = {()=>resize(40, 1, 1)} type='button' className='onetoOneButton'>1:1</button>
        <button onClick = {()=>resize(40, 4, 3)} type='button' className='onetoOneButton'>4:3</button>
        <button onClick = {()=>resize(40, 16, 9)} type='button' className='onetoOneButton'>16:9</button>
        <button onClick = {()=>resize(40, 3, 2)} type='button' className='onetoOneButton'>3:2</button>
        <button onClick = {()=>resize(40, 9, 5)} type='button' className='onetoOneButton'>9:5</button>
        </div>
        <div style = {sizing}><CSSDisplay/></div>
        </div>
        <div style = {{flexShrink: 1}}>
        <div className = 'PoweredByHeader'>
        <h1 className = 'PoweredByText'>POWERED BY:</h1>
        </div>
        <div className = 'poweredBy'>
        <a href = "https://reactjs.org/"><TechCard cover = {reactLogo}/> </a>
        <a href = "https://getbootstrap.com/"><TechCard cover = {bootstrapLogo}/> </a>
        <a href = "https://www.w3schools.com/css/"><TechCard cover = {CSSlogo}/> </a>
        <a href = "https://babeljs.io/"><TechCard cover = {Babellogo}/> </a>
        <a href = "https://webpack.js.org/"><TechCard cover = {Webpacklogo}/> </a>
        <a href = "https://eslint.org/"><TechCard cover = {ESlintlogo}/> </a>
        <a href = "https://www.nginx.com/"><TechCard cover = {Nginxlogo}/> </a>
        </div>
        </div>
        </div>
    );
}
export default TechFlex;