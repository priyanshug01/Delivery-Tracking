import React, { useState } from 'react';
import '../styles/details.css';

const Details = () => {

    const circleData = [
        { text: 'Ordered' },
        { text: 'Picked Up' },
        { text: 'Customs' },
        { text: 'Picked Up' },
        { text: 'Out for Delivery' },
        { text: 'Delivered' },
    ];

    const circles = circleData.map((circle, index) => (
        <div key={index} className="circle-func">
            <div className="hole"></div>
            <div className="circle-text">{circle.text}</div>
        </div>
    ));

    return (
        <>
            <div className="heading">Details</div>
            <div className="order-details-container">
                <div className="order-header">
                    <h2 className='first-line'>#127777489-DL-NY</h2>
                    <h4 className='second-line'>Client Name: OM Logistics</h4>
                    <h5 className='third-line'>POC Name: Nikhil</h5>
                </div >
                <div className="completion-status">
                    <h4>Complete</h4>
                    <h2 className='second-line'>45%</h2>
                    <hr class="gradient-line" />
                </div >
                <div className="completion-header">
                    <h2 className='first-line'>Expected Completion</h2>
                    <h3 className='second-line'>01 Apr, 2023</h3>
                    <h5 className='third-line'>POC No: 9868856732</h5>
                </div>
                <div className="line-container">
                    <div className="line"></div>
                    <div className="circles">{circles}</div>
                </div>
                <table className="cust-header">
                    <tr>
                        <th className='tb-header'>Customer's Details</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                </table>

                <iframe className='details-map' src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d46373.719834648524!2d4.833254383815726!3d52.34832363017738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47c5e1e2c3698a61%3A0x595abf41bfccdee!2sAmsterdam%20UMC%2C%20locatie%20VUmc!3m2!1d52.334610399999995!2d4.8598083!4m5!1s0x47c609eec1bb16e5%3A0xd54373ae6a408585!2sRijksmuseum%2C%20Museumstraat%201%2C%201071%20XX%20Amsterdam%2C%20Netherlands!3m2!1d52.3599976!2d4.8852188!5e0!3m2!1sen!2sin!4v1692420985827!5m2!1sen!2sin" loading='lazy' referrerpolicy="no-referrer-when-downgrade"></iframe>

                <table className="ship-header">
                    <tr>
                        <td></td>
                        <th className='tb-header2'>Shipping Details</th>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Customer's Name</th>
                        <td>OM Logistics</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Details;
