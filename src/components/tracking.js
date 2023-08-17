import React from 'react';
import '../styles/tracking.css';
import man from '../images/man.png';

const Tracking = () => {
    return (
        <>
            <div className="heading">Tracking</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
            <div className='tracking-container'></div>
        </>
    );
};

export default Tracking;
