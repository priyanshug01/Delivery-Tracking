import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';
import upArrow from '../images/upArrow.png';
import downArrow from '../images/downArrow.png';

const Location = () => {

    // const status = [
    //     { value: "Shipped", label: "Shipped" },
    //     { value: "Delivered", label: "Delivered" },
    //     { value: "Cancelled", label: "Cancelled" },
    //     { value: "Pending", label: "Pending" },
    // ];
    const origin = [
        { value: "Noida", label: "Noida" },
        { value: "Mundka", label: "Mundka" },
        { value: "Sonipat", label: "Sonipat" },
        { value: "Alwar", label: "Alwar" },
    ];
    const destination = [
        { value: "Guhawati", label: "Guhawati" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Tirupati", label: "Tirupati" },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptions(selectedValue);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(prevVisible => !prevVisible);
    };

    return (
        <>
            <NavBar />
            <div className="heading">Entry Field
                <button className="toggle-button" onClick={toggleFormVisibility}>
                    <img src={isFormVisible ? upArrow : downArrow} alt="Toggle Arrow" />
                </button>
            </div>

            {isFormVisible && (
                <div className="entry-table-container">
                    <table className="entry-table">
                        <tbody>
                            <tr>
                                <th>Trip ID</th>
                                <td><input type="text" placeholder={`Enter Trip ID`} /></td>
                                <th>Booking Date</th>
                                <td><input type="date" /></td>
                            </tr>
                            <tr>
                                <th>Client Name</th>
                                <td><input type="text" placeholder={`Enter Client Name`} /></td>
                            </tr>
                            <tr>
                                <th>Supplier Name</th>
                                <td><input type="text" placeholder={`Enter Supplier Name`} /></td>
                            </tr>
                            <tr>
                                <th>POC Name</th>
                                <td><input type="text" placeholder={`Enter POC Name`} /></td>
                                <th>POC Number</th>
                                <td><input type="text" placeholder={`Enter POC Number`} /></td>
                            </tr>
                            <tr>
                                <th>Vehicle Type</th>
                                <td><input type="text" placeholder={`Enter Vehicle Type`} /></td>
                                <th>Vehicle Number</th>
                                <td><input type="text" placeholder={`Enter Vehicle Number`} /></td>
                            </tr>
                            <tr>
                                <th>Driver Name</th>
                                <td><input type="text" placeholder={`Enter Driver Name`} /></td>
                                <th>Driver Number</th>
                                <td><input type="text" placeholder={`Enter Driver Number`} /></td>
                            </tr>
                            <tr>
                                <th>Vehicle Placed By</th>
                                <td><input type="text" placeholder={`Enter Vehicle Placed By`} /></td>
                            </tr>
                            <tr>
                                <th>Origin</th>
                                <td>
                                    <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                        {origin.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </td>
                                <th>Destination</th>
                                <td>
                                    <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                        {destination.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>Fare Amount</th>
                                <td><input type="text" placeholder={`Enter Fare Amount`} /></td>
                                <th>Extra Charges (if any)</th>
                                <td><input type="text" placeholder={`Enter Extra Charges`} /></td>
                            </tr>
                            <tr>
                                <th>Add Attachments</th>
                                <td>
                                    <div className="upload-container">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            id="upload"
                                            hidden
                                        />
                                        <label for="upload" className='custom-file-input'>Upload Image</label>
                                        {selectedFile && (
                                            <div className="selected-file">
                                                File Selected: {selectedFile.name}
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="entry-button" type="button">Add New Details</button>
                </div>
            )}
        </>
    );
};

export default Location;
