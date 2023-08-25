import React from 'react';
import '../styles/dashboard.css';
import man from '../images/man.png';

const Dashboard = () => {
    return (
        <>
            <div className="heading">Dashboard</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
        </>
    );
};

export default Dashboard;
