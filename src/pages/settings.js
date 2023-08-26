import React, { useState } from 'react';
import '../styles/settings.css';

const Settings = () => {

    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted values:', inputValues);
        console.log('Selected option:', selectedOption);
    };

    const inputHeaders = ['From', 'To', 'From', 'To'];

    const [data] = useState([
        { id: 1, tid: '#127777489-DL-NY', date: '01-04-2023', origin: 'Noida', destination: 'Tirupati', status: 'Delivered' },
        { id: 2, tid: '#127777489-DL-NY', date: '02-04-2023', origin: 'Mundka', destination: 'Guhawati', status: 'Pending' },
        { id: 3, tid: '#127777489-DL-NY', date: '04-04-2023', origin: 'Alwar', destination: 'Kolkata', status: 'Delivered' },
        { id: 4, tid: '#127777489-DL-NY', date: '04-04-2023', origin: 'Sonipat', destination: 'Guhawati', status: 'Delivered' },
        { id: 5, tid: '#127777489-DL-NY', date: '05-04-2023', origin: 'Alwar', destination: 'Guhawati', status: 'Shipped' },
    ]);

    const handleView = (id) => {
        window.open('./details', '_blank');
    };

    return (
        <>
            <div className="heading">Settings</div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-row">
                    {inputValues.map((value, index) => (
                        <div key={index} className="input-field">
                            <h3 className="input-header">{inputHeaders[index]}</h3>
                            {index === 2 || index === 3 ? (
                                <input
                                    className="form-input"
                                    type="date"
                                    value={value}
                                    onChange={(event) => handleInputChange(index, event)}
                                />
                            ) : (
                                <input
                                    className="form-input"
                                    type="text"
                                    value={value}
                                    onChange={(event) => handleInputChange(index, event)}
                                    placeholder={`Enter Location`}
                                />
                            )}
                        </div>
                    ))}
                    <div className="dropdown-container">
                        <h3 className="dropdown-header">Status</h3>
                        <select className="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                            <option value="Option 1">Shipped</option>
                            <option value="Option 2">Delivered</option>
                            <option value="Option 3">Cancelled</option>
                            <option value="Option 2">Pending</option>
                        </select>
                    </div>
                    <button className="form-button" type="submit">Submit</button>
                </div>
            </form>

            <div className="table-view-container">
                <table className="table-data">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Booking Date</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.tid}</td>
                                <td>{item.date}</td>
                                <td>{item.origin}</td>
                                <td>{item.destination}</td>
                                <td>{item.status}</td>
                                <td><button className="view-btn" onClick={() => handleView(item.id)}>
                                    View
                                </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Settings;
