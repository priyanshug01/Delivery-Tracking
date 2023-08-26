import React, { useState } from 'react';
import '../styles/details.css';

const Details = () => {

    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

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
                        <th>Client's Name</th>
                        <td>: OM Logistics</td>
                    </tr>
                    <tr>
                        <th>Origin</th>
                        <td>: Noida</td>
                    </tr>
                    <tr>
                        <th>Destination</th>
                        <td>: Tirupati</td>
                    </tr>
                    <tr>
                        <th>Vehicle Placed By</th>
                        <td>: Sunny Sir</td>
                    </tr>
                    <tr>
                        <th>Vehicle Type</th>
                        <td>: 32FT SXL 7MT</td>
                    </tr>
                    <tr>
                        <th>Vehicle No</th>
                        <td>: NL01AF3270</td>
                    </tr>
                    <tr>
                        <th>Vehicle Reported</th>
                        <td>: 01-04-2023</td>
                    </tr>
                    <tr>
                        <th>Vehicle Departed</th>
                        <td>: 02-04-2023</td>
                    </tr>
                </table>

                <iframe className='details-map' src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d46373.719834648524!2d4.833254383815726!3d52.34832363017738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47c5e1e2c3698a61%3A0x595abf41bfccdee!2sAmsterdam%20UMC%2C%20locatie%20VUmc!3m2!1d52.334610399999995!2d4.8598083!4m5!1s0x47c609eec1bb16e5%3A0xd54373ae6a408585!2sRijksmuseum%2C%20Museumstraat%201%2C%201071%20XX%20Amsterdam%2C%20Netherlands!3m2!1d52.3599976!2d4.8852188!5e0!3m2!1sen!2sin!4v1692420985827!5m2!1sen!2sin" loading='lazy' referrerpolicy="no-referrer-when-downgrade"></iframe>

                <table className="ship-header">
                    <tr>
                        <th></th>
                        <td className='tb-header2'>Shipping Details</td>
                    </tr>
                    <tr>
                        <th>Supplier's Name</th>
                        <td>: GOODWILL INDIA TRANS AND LOGISTICS PVT LTD</td>
                    </tr>
                    <tr>
                        <th>Beneficiary's Name</th>
                        <td>: GOODWILL INDIA TRANS AND LOGISTICS PVT LTD</td>
                    </tr>
                    <tr>
                        <th>Beneficiary A/C</th>
                        <td>: 15810200022155</td>
                    </tr>
                    <tr>
                        <th>IFSC</th>
                        <td>: FDRL0001581</td>
                    </tr>
                    <tr>
                        <th>Supplier Mob.</th>
                        <td>: 9053399955</td>
                    </tr>
                    <tr>
                        <th>Driver Mob.</th>
                        <td>: 9983958282</td>
                    </tr>
                </table>
                <table className="fin-header">
                    <tr>
                        <th className='tb-header3'>Financial Details</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Client Fare</th>
                        <td>: ₹ 74000</td>
                        <th>Driver Fare</th>
                        <td>: ₹ 74000</td>
                    </tr>
                    <tr>
                        <th>Loading Charges</th>
                        <td>: ₹ </td>
                        <th>Other Charges Paid</th>
                        <td>: ₹ </td>
                    </tr>
                    <tr>
                        <th>Comm Paid to Client</th>
                        <td>: ₹ </td>
                        <th>Adv by Client to Road-Ex</th>
                        <td>: ₹ 34500</td>
                    </tr>
                    <tr>
                        <th>Comm Received from Supplier</th>
                        <td>: ₹ 600</td>
                        <th>Adv by Road-Ex to Supplier</th>
                        <td>: ₹ 66600</td>
                    </tr>
                    <tr>
                        <th>Client Penalty</th>
                        <td>: ₹ </td>
                    </tr>
                    <tr>
                        <th>Penalty to Supplier</th>
                        <td>: ₹ </td>
                    </tr>
                    <tr>
                        <th>Unloading Charge</th>
                        <td>: ₹ </td>
                    </tr>
                </table>

                <table className="pod-header">
                    <tr>
                        <th className='tb-header3'>POD Details</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Soft POD Status</th>
                        <td>: No</td>
                        <th>POD Status / Hardcopy</th>
                        <td>: Received</td>
                    </tr>
                    <tr>
                        <th>POD Received On</th>
                        <td>: 17-04-2023</td>
                        <th>Soft Copy POD</th>
                        <td>: <p className="documents">View Documents</p></td>
                    </tr>
                    <tr>
                        <th>POD F/UP Remark</th>
                        <td>: OK</td>
                        <th>POD Sent to Client</th>
                        <td>: 24-04-2023</td>
                    </tr>
                </table>
                <form className='details-form'>
                    <div className="dt-input-row">
                        <h4 className="details-dropdown-header">Enter Input</h4>
                        <input className="dt-input" type="text" placeholder={`Enter Value`} />
                    </div>
                    <div className="details-dropdown">
                        <h4 className="details-dropdown-header">Change Status</h4>
                        <select className="dt-dropdown" value={selectedOption} onChange={handleDropdownChange}>
                            <option value="Option 1">Shipped</option>
                            <option value="Option 2">Delivered</option>
                            <option value="Option 3">Cancelled</option>
                            <option value="Option 2">Pending</option>
                        </select>
                    </div>
                    <button className="dt-button" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Details;
