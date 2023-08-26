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
        window.open('./location', '_blank');
    };

    const inputHeaders = ['From', 'To', 'From', 'To'];

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
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                    <button className="form-button" type="submit">Submit</button>
                </div>
            </form>

            
        </>
    );
};

export default Settings;
