import React from 'react';
import '../styles/location.css';
import man from '../images/man.png';

const Location = () => {
    return (
        <>
            <div className="heading">Location</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
        </>
    );
};

export default Location;
