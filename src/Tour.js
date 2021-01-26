import React, { useState } from 'react'
import './Tour.css';

function Tour({id, image, info,price,name, removeTour}) {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className='tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>{readMore?info:`${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>{readMore? 'Show less': 'Show more'}</button>
                </p>
                <button className='delete-btn' onClick={() => removeTour(id)}>
                    Not Interested</button>
            </footer>
        </div>
    )
}

export default Tour
