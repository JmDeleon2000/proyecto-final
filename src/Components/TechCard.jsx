import React from 'react';
import PropTypes from 'prop-types'


function TechCard({cover}) {
    return (
        <div className='TechCard'>
        <div className = 'TechCardCover' style = {{backgroundImage: `url(${cover})`}}/>
        
        </div>
    );
}

TechCard.propTypes = 
{
    cover: PropTypes.string.isRequired
}

export default TechCard;