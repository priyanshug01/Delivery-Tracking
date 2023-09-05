import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';

const VehicleEntry = () => {

    // const status = [
    //     { value: "Shipped", label: "Shipped" },
    //     { value: "Delivered", label: "Delivered" },
    //     { value: "Cancelled", label: "Cancelled" },
    //     { value: "Pending", label: "Pending" },
    // ];
    const state = [
        { value: "Noida", label: "Noida" },
        { value: "Mundka", label: "Mundka" },
        { value: "Sonipat", label: "Sonipat" },
        { value: "Alwar", label: "Alwar" },
    ];
    const city = [
        { value: "Guhawati", label: "Guhawati" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Tirupati", label: "Tirupati" },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptions(selectedValue);
    };

    return (
        <>
            <NavBar />
            <div className="heading">Vehicle Entry</div>
            <div className="entry-table-container">
                <table className="entry-table">
                    <tbody>
                        <tr>
                            <th>State</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {state.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                            <th>City</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {city.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Mobile Number</th>
                            <td><input type="text" placeholder={`Enter Mobile Number`} /></td>
                        </tr>
                        <tr>
                            <th>User Name</th>
                            <td><input type="text" placeholder={`Enter User Name`} /></td>
                            <th>Email</th>
                            <td><input type="text" placeholder={`Enter Email`} /></td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td><input type="text" placeholder={`Enter Password`} /></td>
                        </tr>
                        <tr>
                            <th>Transporter Pic</th>
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
                <button className="entry-button" type="button">Add Details</button>
            </div>
        </>
    );
};

export default VehicleEntry;
