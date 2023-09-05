import React, { useState } from 'react';
import '../styles/settings.css';
import NavBar from '../components/navbar';

const Settings = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '', '', '']);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [tableData, setTableData] = useState([
        { id: 1, tid: '#12489-DL-NY', date: '01-04-2023', suppliername: 'GOODWILL INDIA TRANS AND LOGISTICS PVT LTD', pocname: 'Nikhil', pocno: '9868856732', route: 'Noida - Tirupati', vehtype: '32FT SXL 7MT', status: 'Delivered' },
        { id: 2, tid: '#12489-DL-NY', date: '02-04-2023', suppliername: 'NEW AZAD TRANSPORT SERVICE', pocname: 'Sonu', pocno: '9868856732', route: 'Mundka - Guhawati', vehtype: '32FT MXL 15MT', status: 'Pending' },
        { id: 3, tid: '#12489-DL-NY', date: '04-04-2023', suppliername: 'NDCC CARGO CARRIERS', pocname: 'Bharat', pocno: '9868856732', route: 'Alwar - Kolkata', vehtype: '32FT MXL 17.5MT', status: 'Delivered' },
        { id: 4, tid: '#12489-DL-NY', date: '04-04-2023', suppliername: 'RAHUL ROADLINE', pocname: 'Sandeep', pocno: '9868856732', route: 'Sonipat - Guhawati', vehtype: '32FT SXL 7MT', status: 'Delivered' },
        { id: 5, tid: '#12489-DL-NY', date: '05-04-2023', suppliername: 'NDCC CARGO CARRIERS', pocname: 'Aman', pocno: '9868856732', route: 'Alwar - Guhawati', vehtype: '32FT MXL 17.5MT', status: 'Shipped' },
    ]);

    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
    };

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptions(selectedValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newId = tableData.length + 1;
        const newTid = inputValues[0];
        const newFromDate = inputValues[1];
        const newSuppName = inputValues[2];
        const newPocName = inputValues[3];
        const newPocNo = inputValues[4];
        const newRoute = inputValues[5];
        const newVehType = inputValues[6];
        const newStatus = selectedOptions;

        const newRow = {
            id: newId,
            tid: newTid,
            date: newFromDate,
            suppliername: newSuppName,
            pocname: newPocName,
            pocno: newPocNo,
            route: newRoute,
            vehtype: newVehType,
            status: newStatus,
        };

        setTableData([...tableData, newRow]);
        setInputValues(['', '', '', '', '', '', '']);
        setSelectedOptions([]);
    };

    const handleView = (id) => {
        // window.open(`./details/${id}`, '_blank');
        window.open(`./details`, '_blank');

    };

    const inputHeaders = ['Trip ID', 'Booking Date', 'Supplier Name', 'POC Name', 'POC Number', 'Route', 'Vehicle Type'];

    return (
        <>
            <NavBar />
            <div className="heading">Settings</div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-row">
                    {inputValues.map((value, index) => (
                        <div key={index} className="input-field">
                            <h3 className="input-header">{inputHeaders[index]}</h3>
                            {index === 1 ? (
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
                                    placeholder={`Enter ${inputHeaders[index]}`}
                                />
                            )}
                        </div>
                    ))}
                    <div className="dropdown-container">
                        <h3 className="dropdown-header">Status</h3>
                        <select className="dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <button className="form-button" type="submit">Add New Details</button>
                </div>
            </form>

            <div className="table-view-container">
                <table className="table-data">
                    <thead>
                        <tr>
                            <th>Trip ID</th>
                            <th>Booking Date</th>
                            <th>Supplier Name</th>
                            <th>POC Name</th>
                            <th>POC Number</th>
                            <th>Route</th>
                            <th>Vehicle Type</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => (
                            <tr key={item.id}>
                                <td>{item.tid}</td>
                                <td>{item.date}</td>
                                <td>{item.suppliername}</td>
                                <td>{item.pocname}</td>
                                <td>{item.pocno}</td>
                                <td>{item.route}</td>
                                <td>{item.vehtype}</td>
                                <td>{item.status}</td>
                                <td><button className="view-btn" onClick={() => handleView(item.id)}>View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Settings;
