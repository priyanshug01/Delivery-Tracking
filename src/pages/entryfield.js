import React, { useState } from 'react';
import '../styles/entryfield.css';
import NavBar from '../components/navbar';

const Location = () => {

    const state = [
        { value: "Assam", label: "Assam" },
        { value: "Bihar", label: "Bihar" },
        { value: "Haryana", label: "Haryana" },
        { value: "Punjab", label: "Punjab" },
        { value: "West Bengal", label: "West Bengal" },
    ];
    const city = [
        { value: "Patna", label: "Patna" },
        { value: "Gaya", label: "Gaya" },
        { value: "Kolkata", label: "Kolkata" },
    ];
    const loadtype = [
        { value: "Grocery", label: "Grocery" },
        { value: "Electronics", label: "Electronics" },
        { value: "Health Care", label: "Health Care" },
        { value: "Food & Beverages", label: "Food & Beverages" },
        { value: "Personal Care", label: "Personal Care" },
        { value: "Plywood", label: "Plywood" },
        { value: "Pipes", label: "Pipes" },
        { value: "Tires", label: "Tires" },
    ];
    const unit = [
        { value: "kg", label: "Kilograms" },
        { value: "ton", label: "Ton" },
        { value: "pcs", label: "Pieces" },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [dynamicIntermediateLocations, setDynamicIntermediateLocations] = useState([]);
    const [dynamicLoadInformation, setDynamicLoadInformation] = useState([]);

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOptions(selectedValue);
    };

    const addFieldInfo = () => {
        setDynamicLoadInformation([...dynamicLoadInformation, {}]);
    };

    const removeFieldInfo = (index) => {
        const updatedFields = [...dynamicLoadInformation];
        updatedFields.splice(index, 1);
        setDynamicLoadInformation(updatedFields);
    };

    const addFieldLoc = () => {
        setDynamicIntermediateLocations([...dynamicIntermediateLocations, {}]);
    };

    const removeFieldLoc = (index) => {
        const updatedFields = [...dynamicIntermediateLocations];
        updatedFields.splice(index, 1);
        setDynamicIntermediateLocations(updatedFields);
    };

    return (
        <>
            <NavBar />
            <div className="heading">Entry Field</div>

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
                            <th>Booking Date</th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <th>Client Name</th>
                            <td><input type="text" placeholder={`Enter Client Name`} /></td>
                            <th>Client Mobile Number</th>
                            <td><input type="text" placeholder={`Enter Client Mobile Number`} /></td>
                        </tr>
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
                        <br />
                        <tr>
                            <th style={{ color: "#c3b649" }}>Load Information</th>
                            <td>
                                <button className="add-button" type="button" onClick={addFieldInfo}>+</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Invoice Number</th>
                            <td><input type="text" placeholder={`Enter Invoice Number`} /></td>
                        </tr>
                        <tr>
                            <th>Product Name</th>
                            <td><input type="text" placeholder={`Enter Product Name`} /></td>
                            <th>Product Amount</th>
                            <td><input type="text" placeholder={`Enter Product Amount`} /></td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            <td><input type="text" placeholder={`Enter Quantity`} /></td>
                            <td style={{ width: "100px" }}>
                                <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                    {unit.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {dynamicLoadInformation.map((index) => (
                    <div key={index}>
                        <table className="entry-table">
                            <tbody>
                                <tr>
                                    <th>Invoice Number</th>
                                    <td><input type="text" placeholder={`Enter Invoice Number`} /></td>
                                </tr>
                                <tr>
                                    <th>Product Name</th>
                                    <td><input type="text" placeholder={`Enter Product Name`} /></td>
                                    <th>Product Amount</th>
                                    <td><input type="text" placeholder={`Enter Product Amount`} /></td>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <td><input type="text" placeholder={`Enter Quantity`} /></td>
                                    <th>
                                        <select className="entry-dropdown" value={selectedOptions} onChange={handleDropdownChange}>
                                            {unit.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </th>
                                    <td><button className='del-button' type="button" onClick={() => removeFieldInfo()}>-</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                <table className="entry-table">
                    <tbody>
                        <br />
                        <tr>
                            <th style={{ color: "#c3b649" }}>Location Information</th>
                        </tr>
                        <tr>
                            <th>Pickup Location</th>
                            <td><input type="text" placeholder={`Enter Pickup Address`} /></td>
                            <th><input type="text" placeholder={`Enter Mobile Number`} /></th>
                        </tr>
                        <tr>
                            <th>Intermediate Location</th>
                            <td><input type="text" placeholder={`Enter Pickup Address`} /></td>
                            <th><input type="text" placeholder={`Enter Mobile Number`} /></th>
                            <td><button className="add-button" type="button" onClick={addFieldLoc}>+</button></td>
                        </tr>
                    </tbody>
                </table>
                {dynamicIntermediateLocations.map((index) => (
                    <div key={index}>
                        <table className="entry-table">
                            <tbody>
                                <tr>
                                    <th>Intermediate Location</th>
                                    <td><input type="text" placeholder={`Enter Pickup Address`} /></td>
                                    <th><input type="text" placeholder={`Enter Mobile Number`} /></th>
                                    <td><button className='del-button' type="button" onClick={() => removeFieldLoc()}>-</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
                <table className="entry-table">
                    <tbody>
                        <tr>
                            <th>Destination Location</th>
                            <td><input type="text" placeholder={`Enter Pickup Address`} /></td>
                            <th><input type="text" placeholder={`Enter Mobile Number`} /></th>
                        </tr>
                        <br />
                        <tr>
                            <th style={{ color: "#c3b649" }}>Other Details</th>
                        </tr>
                        <tr>
                            <th>Goods Price</th>
                            <td><input type="text" placeholder={`Enter Goods Price`} /></td>
                            <th>Weight</th>
                            <td><input type="text" placeholder={`Enter Weight (KG)`} /></td>
                        </tr>
                        <tr>
                            <th>Vehicles Required</th>
                            <td><input type="number" placeholder="Enter No. of Vehicles Required" min="1" value="1" /></td>
                        </tr>
                        <tr>
                            <th>Driver Amount</th>
                            <td><input type="text" placeholder={`Enter Driver Amount`} /></td>
                            <th>Client Amount</th>
                            <td><input type="text" placeholder={`Enter Client Amount`} /></td>
                        </tr>
                        <tr>
                            <th>Duration</th>
                            <td><input type="date" /></td>
                            <th>to</th>
                            <td><input type="date" /></td>
                        </tr>
                        <tr>
                            <th>Remarks</th>
                            <td><textarea type="text" placeholder={'Enter Remarks'} /></td>
                        </tr>
                    </tbody>
                </table >
                <button className="entry-button" type="button">Add New Details</button>
            </div >
        </>
    );
};

export default Location;
