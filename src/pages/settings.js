import React from 'react';
import '../styles/settings.css';
import man from '../images/man.png';

const Settings = () => {
    return (
        <>
            <div className="heading">Settings</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
        </>
    );
};

export default Settings;
