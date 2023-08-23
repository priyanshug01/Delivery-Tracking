/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../styles/tracking.css';
import NavBar from '../components/navbar';
import man from '../images/man.png';
import truck from '../images/truck.png';
import plate from '../images/plate.png';
import payload from '../images/payload.png';
import volume from '../images/volume.png';
import distance from '../images/distance.png';
import time from '../images/time.png';
import man1 from '../images/man1.png';
import call from '../images/call.png';
import pin from '../images/pin.png';
import calendar from '../images/calendar.png';
import cross from '../images/cross.png';

const Tracking = () => {
    return (
        <>
            <NavBar />
            <div className="heading">Tracking</div>
            <div className="user">
                <img src={man} alt="user" />
                <span className='username'>Mathew Perry</span>
            </div>
            <div className='overview-container'>
                <img className='overview-cross' src={cross} alt="cross" />
                <div className='overview-id'>#127777489-DL-NY</div>
                <div className='button-container'>
                    <div className='overview-button'>Out for Delivery</div>
                    <div className='overview-button'>Parcel</div>
                </div>
                <div class="dotted-line"></div>
                <img className='overview-icon' src={man} alt="user" />
                <div class="overview-status">Package has left Courier Facility</div>
                <div class="overview-country">San Francisco, California</div>
                <img className='overview-icon' src={man} alt="user" />
                <div class="overview-status">Package arrived at Local Facility</div>
                <div class="overview-country">New York City, New York</div>
                <img className='overview-icon' src={man} alt="user" />
                <div class="overview-status">Out for Delivery</div>
                <div class="overview-country">New York City, New York</div>
                <img className='overview-icon' src={man} alt="user" />
                <div class="overview-status">Delivered</div>
                <div class="overview-country">1567 Dove Street, New York City, 9888</div>
            </div>
            <div className='delivery-container'>
                <div className='delivery-card'>
                    <div className='delivery-id'>#127777489-DL-NY</div>
                    <div className='button-container'>
                        <div className='delivery-button'>In Transit</div>
                        <div className='delivery-button'>Documents</div>
                    </div>
                    <img className='delivery-icon' src={man} alt="user" />
                    <div class="delivery-status">Package has left Courier Facility</div>
                    <div class="delivery-country">Detroit, Denmark</div>
                </div>
                <div className='delivery-card'>
                    <div className='delivery-id'>#127777489-DL-NY</div>
                    <div className='button-container'>
                        <div className='delivery-button'>In Customs</div>
                        <div className='delivery-button'>Parcel</div>
                    </div>
                    <img className='delivery-icon' src={man} alt="user" />
                    <div class="delivery-status">Customs</div>
                    <div class="delivery-country">New York City, New York</div>
                </div>
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
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d46373.719834648524!2d4.833254383815726!3d52.34832363017738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47c5e1e2c3698a61%3A0x595abf41bfccdee!2sAmsterdam%20UMC%2C%20locatie%20VUmc!3m2!1d52.334610399999995!2d4.8598083!4m5!1s0x47c609eec1bb16e5%3A0xd54373ae6a408585!2sRijksmuseum%2C%20Museumstraat%201%2C%201071%20XX%20Amsterdam%2C%20Netherlands!3m2!1d52.3599976!2d4.8852188!5e0!3m2!1sen!2sin!4v1692420985827!5m2!1sen!2sin" loading='lazy' referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="details-container">
                            <div className="details-row">
                                <div className="details-column">
                                    <div className="details tilt">
                                        <div className="details-user-container">
                                            <img className='details-user' src={man1} alt="user" />
                                            <h5 className='details-posi'>Driver</h5>
                                            <p className='details-id'>ID : 222-111-33</p>
                                            <h4 className='details-name'>Mathew Perry</h4>
                                            <button className="icon-button"><img className='button-logo' src={call} alt='call'></img>Call</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="details-column">
                                    <div className="details tilt">
                                        <h5 className='details-title'>Address</h5>
                                        <img className='details-logo' src={pin} alt='pin'></img>
                                        <p className='details-addr'>Houstan Lane, Lan 9, 22/1.</p>
                                        <h5 className='details-title'>Delivery</h5>
                                        <img className='details-logo' src={calendar} alt='calendar'></img>
                                        <p className='details-time'>12:30 PM</p>
                                        <p className='details-date'>31 Jan</p>
                                    </div>
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
