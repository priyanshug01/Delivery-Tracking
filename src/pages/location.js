import React from 'react';
import '../styles/location.css';
import NavBar from '../components/navbar';
import man from '../images/man.png';

const Location = () => {
    return (
        <>
            <NavBar />
            <div className="heading">Location</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
        </>
    );
};

export default Location;
