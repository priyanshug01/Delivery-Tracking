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
            </div>
        </>
    );
};

export default Details;
