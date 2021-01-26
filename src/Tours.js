import React from 'react'
import './Tours.css';
import Tour from './Tour';

function Tours({props, removeTour}) {
    return (
        <div className='tours'>
            <div className='title'>
                <h2>Our Tours</h2>
                <div className='underline'></div>
            </div>
            
            <div>
                {props.map((tour) => {
                    return <Tour key={tour.id} {...tour}
                    removeTour={removeTour}/> 
                })}
            </div>
        </div>
    )
}

export default Tours
