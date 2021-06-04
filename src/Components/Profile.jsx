import React, { useState } from 'react';
import './Profile.css'


function Profile() {
const [extended, setExtended] = useState(false);

const toggleExtended=()=>
{
    setExtended(!extended)
}
    return (
        extended ?
        <div className='leftProfileExtended'>
        <button type='button' onClick = {toggleExtended} className = 'xButton'>X</button>
        <div className='aboutMeContainer'>
            <h3>My name is Jorge De León</h3>
            <div className ='imgContainer'>foto</div>
            <div className = 'flexCarrier'>
            <div className = 'separator'/>  
            <div className = 'textCont'>
            <p>I am one of those weird cases of people who actually enjoy programming. Specially when it comes to games and linear algebra heavy stuff.</p>
            </div>
            <div className = 'separator'/>
            <div className = 'textCont'>
            <p>Mail me: jmdeleonpi@gmail.com</p>
            </div>
            <div className = 'separator'/>  
            </div>
        </div>
        </div> : 
        <div className='leftProfile'>
        <button type='button' onClick = {toggleExtended} className = 'leftSided'>About me</button>
        </div>
    );
}
export default Profile;