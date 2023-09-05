import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';

const DriverEntry = () => {

    const transname = [
        { value: "Vibhor Bakshi", label: "Vibhor Bakshi / Patna" },
        { value: "Chandan Kumar", label: "Chandan Kumar / Patna" },
        { value: "Navin Kumar Singh", label: "Navin Kumar Singh / Patna" },
        { value: "Lal Babu Yadav", label: "Lal Babu Yadav / Patna" },
    ];
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
            <div className="heading">Driver Entry</div>
            <div className="entry-table-container">
                <table className="entry-table">
                    <tbody>
                        <tr>
                            <th>Transporter Name</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {transname.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td><input type="text" placeholder={`Enter Name`} /></td>
                        </tr>
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
                            <th>Birthday</th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <th>DL Expiration Date</th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td><input type="password" placeholder={`Enter Password`} /></td>
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
                            <th>DL Front Pic</th>
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
                            <th>DL Back Pic</th>
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
                            <th>Aadhar Front Pic</th>
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
                            <th>Aadhar Back Pic</th>
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
            </div >
        </>
    );
};

export default DriverEntry;
