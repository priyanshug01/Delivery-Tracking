import React from 'react';
import '../styles/tracking.css';
import man from '../images/man.png';
import truck from '../images/truck.png';
import plate from '../images/plate.png';
import payload from '../images/payload.png';
import volume from '../images/volume.png';
import distance from '../images/distance.png';
import time from '../images/time.png';

const Tracking = () => {
    return (
        <>
            <div className="heading">Tracking</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
            <div className='tracking-container'>
                <div className='row1'>
                    <div className='column1'>
                        <img src={truck} alt='truck' className='truck'></img>
                        <div className='vehicle-details'>
                            <h4 className="vehicle-owner">Volkswagen Transporter</h4>
                            <p className="documents">View Documents</p>
                        </div>
                        <img src={plate} alt='plate' className='plate'></img>
                        <div className="card-container">
                            <div className="card-row">
                                <div className="card-column">
                                    <div className="card">
                                        <h1 className='card-value'>101</h1>
                                        <h5 className='card-unit'>kg</h5>
                                        <p className='card-title'>Payload</p>
                                        <img className='card-logo' src={payload} alt='payload'></img>
                                    </div>
                                </div>
                                <div className="card-column">
                                    <div className="card">
                                        <h1 className='card-value'>123</h1>
                                        <h5 className='card-unit'>Ln3</h5>
                                        <p className='card-title'>Volume</p>
                                        <img className='card-logo' src={volume} alt='volume'></img>
                                    </div>
                                </div>
                            </div>
                            <div className="card-row">
                                <div className="card-column">
                                    <div className="card">
                                        <h1 className='card-value'>51</h1>
                                        <h5 className='card-unit1'>Km</h5>
                                        <p className='card-title'>Distance</p>
                                        <img className='card-logo' src={distance} alt='distance'></img>
                                    </div>
                                </div>
                                <div className="card-column">
                                    <div className="card">
                                        <h1 className='card-value'>90</h1>
                                        <h5 className='card-unit1'>Mins</h5>
                                        <p className='card-title'>Estimated Time</p>
                                        <img className='card-logo' src={time} alt='time'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='column1'>
                        <img src={truck} alt='truck' className='truck'></img>
                        <div className="card-row">
                            <div className="card-column">
                                <div className="contact-card">
                                    <h1 className='card-value'>51</h1>
                                    <h5 className='card-unit1'>Km</h5>
                                    <p className='card-title'>Distance</p>
                                    <img className='card-logo' src={distance} alt='distance'></img>
                                </div>
                            </div>
                            <div className="card-column">
                                <div className="contact-card">
                                    <h1 className='card-value'>90</h1>
                                    <h5 className='card-unit1'>Mins</h5>
                                    <p className='card-title'>Estimated Time</p>
                                    <img className='card-logo' src={time} alt='time'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tracking;
