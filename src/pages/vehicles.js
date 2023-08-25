import React from 'react';
import '../styles/vehicles.css';
import man from '../images/man.png';

const Vehicles = () => {
    return (
        <>
            <div className="heading">Vehicles</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
        </>
    );
};

export default Vehicles;
