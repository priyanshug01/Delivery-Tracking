import React from 'react';
import '../styles/tracking.css';
import man from '../images/man.png';

const Location = () => {
    return (
        <>
            <div className="heading">Tracking</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
        </>
    );
};

export default Location;
