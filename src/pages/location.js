import React, { useState } from 'react';
import '../styles/location.css';
import NavBar from '../components/navbar';
import upArrow from '../images/upArrow.png';
import downArrow from '../images/downArrow.png';

const Location = () => {
    const colHeadings1 = ["Trip ID", "Client Name", "Supplier Name", "Booking Date"];
    const colHeadings2 = ["POC Name", "POC Number", "Vehicle Placed By", "Status"];
    const colHeadings3 = ["Vehicle Type", "Vehicle Number", "Driver Name", "Driver Number"];
    const colHeadings4 = ["Origin", "Destination", "Fare Amount", "Add Attachments"];

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
                        <thead>
                            <tr>
                                {colHeadings1.map((colHeading, index) => (
                                    <th key={index}>{colHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Array.from({ length: 4 }).map((_, colIndex) => (
                                    <td key={colIndex}>
                                        {colIndex === 3 ? (
                                            <input type="date" />
                                        ) : (
                                            <input type="text" placeholder={`Enter ${colHeadings1[colIndex]}`} />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    <table className="entry-table">
                        <thead>
                            <tr>
                                {colHeadings2.map((colHeading, index) => (
                                    <th key={index}>{colHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Array.from({ length: 4 }).map((_, colIndex) => (
                                    <td key={colIndex}>
                                        {colIndex === 3 ? (
                                            <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                                <option value="Pending">Pending</option>
                                            </select>
                                        ) : (
                                            <input type="text" placeholder={`Enter ${colHeadings2[colIndex]}`} />
                                        )}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    <table className="entry-table">
                        <thead>
                            <tr>
                                {colHeadings3.map((colHeading, index) => (
                                    <th key={index}>{colHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Array.from({ length: 4 }).map((_, colIndex) => (
                                    <td key={colIndex}>
                                        <input type="text" placeholder={`Enter ${colHeadings3[colIndex]}`} />
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    <table className="entry-table">
                        <thead>
                            <tr>
                                {colHeadings4.map((colHeading, index) => (
                                    <th key={index}>{colHeading}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Array.from({ length: 4 }).map((_, colIndex) => (
                                    <td key={colIndex}>
                                        {colIndex === 3 ? (
                                            <div className="upload-container">
                                                <input
                                                    className='custom-file-input'
                                                    type="file"
                                                    accept=".pdf,.doc,.docx,.jpg,.png"
                                                    onChange={handleFileChange}
                                                />
                                                {selectedFile && (
                                                    <div className="selected-file">
                                                        Selected File: {selectedFile.name}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <input type="text" placeholder={`Enter ${colHeadings4[colIndex]}`} />
                                        )}
                                    </td>
                                ))}
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
