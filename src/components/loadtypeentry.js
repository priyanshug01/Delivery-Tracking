import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';

const LoadtypeEntry = () => {

    const loadtype = [
        { value: "Noida", label: "Noida" },
        { value: "Mundka", label: "Mundka" },
        { value: "Sonipat", label: "Sonipat" },
        { value: "Alwar", label: "Alwar" },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptions(selectedValue);
    };

    return (
        <>
            <NavBar />
            <div className="heading">Load Type Entry</div>
            <div className="entry-table-container">
                <table className="entry-table">
                    <tbody>
                        <tr>
                            <th>Load Type</th>
                            <td>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {loadtype.map(option => (
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

export default LoadtypeEntry;
