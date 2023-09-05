import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';

const CityEntry = () => {

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

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptions(selectedValue);
    };

    return (
        <>
            <NavBar />
            <div className="heading">City Entry</div>
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
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {city.map(option => (
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

export default CityEntry;
