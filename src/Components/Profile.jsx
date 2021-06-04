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
            <div className='imgContainer'>foto</div>
            <div style={{flexGrow:1, flexShrink: 1, backgroundColor: 'blue'}}>d20</div>
        </div>
        </div> : 
        <div className='leftProfile'>
        <button type='button' onClick = {toggleExtended} className = 'leftSided'>About me</button>
        </div>
    );
}
export default Profile;