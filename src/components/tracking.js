import React from 'react';
import '../styles/tracking.css';

const Tracking = () => {
    const userImage = "";
    return (
        <>
            <div className="heading">Tracking</div>
            <div className="user">
                <img src={userImage} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
            <div className='tracking-container'></div>
        </>
    );
};

export default Tracking;
