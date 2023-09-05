import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';

const DriverEntry = () => {

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
    const type = [
        { value: "Default", label: "Default" },
        { value: "Manager", label: "Manager" },
    ];
    const ratetype = [
        { value: "Static", label: "Static" },
        { value: "Dynamic", label: "Dynamic" },
    ];
    const waitcharge = [
        { value: "No", label: "No" },
        { value: "Yes", label: "Yes" },
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
            <div className="heading">Client Entry</div>
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
                            <th>Name</th>
                            <td><input type="text" placeholder={`Enter Name`} /></td>
                            <th>Email</th>
                            <td><input type="text" placeholder={`Enter Email`} /></td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td><textarea type="text" placeholder={`Enter Address`} /></td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td><input type="text" placeholder={`Enter Password`} /></td>
                        </tr>
                        <tr>
                            <th>GST Number</th>
                            <td><input type="text" placeholder={`Enter GST Number`} /></td>
                        </tr>
                        <tr>
                            <th>Designation</th>
                            <td><input type="text" placeholder={`Enter Designation`} /></td>
                        </tr>
                        <tr>
                            <th>Employee ID</th>
                            <td><input type="text" placeholder={`Enter Employee ID`} /></td>
                            <th>Surge Charge</th>
                            <td><input type="text" placeholder={`Enter Surge Charge`} /></td>
                        </tr>
                        <tr>
                            <th>Profile Pic</th>
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
                        <tr>
                            <th>Select Type</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {type.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>                        </tr>
                        <tr>
                            <th>Select Rate Type</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {ratetype.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                            <th>Select Wait Charge Type</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {waitcharge.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="entry-button" type="button">Add Details</button>
            </div>
        </>
    );
};

export default DriverEntry;
