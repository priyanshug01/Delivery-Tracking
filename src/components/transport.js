import React, { useState } from 'react';
import '../styles/tabs.css';

const Transport = ({ data: initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [newItem, setNewItem] = useState({
        id: '',
        name: '',
        state: '',
        city: '',
        accno: '',
        accholder: '',
        ifsc: '',
        mobno: '',
        fleetsize: '',
        addedfrom: '',
        aadharpic: '',
    });

    const [data, setData] = useState(initialData);

    const handleEdit = (item) => {
        setEditMode(true);
        setEditedData({ ...item });
    };

    const handleSave = () => {
        const updatedData = data.map((item) =>
            item.id === editedData.id ? editedData : item
        );
        setEditMode(false);
        setEditedData(null);
        setData(updatedData);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedData(null);
    };

    const handleAddItem = () => {
        const updatedData = [...data, newItem];
        setNewItem({
            id: '',
            name: '',
            state: '',
            city: '',
            accno: '',
            accholder: '',
            ifsc: '',
            mobno: '',
            fleetsize: '',
            addedfrom: '',
            aadharpic: '',
        });
        setData(updatedData);
    };

    return (
        <div className="masters-tab">
            <button className="add-item" onClick={handleAddItem}>Add Item</button>
            <table className="masters-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Account No.</th>
                        <th>Account Holder Name</th>
                        <th>IFSC Code</th>
                        <th>Mobile No.</th>
                        <th>Fleet Size</th>
                        <th>Added From</th>
                        <th>Aadhar Pic</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.name}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, name: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.name
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.state}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, state: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.state
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.city}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, city: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.city
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.accno}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, accno: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.accno
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.accholder}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, accholder: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.accholder
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.ifsc}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, ifsc: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.ifsc
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.mobno}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, mobno: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.mobno
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.fleetsize}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, fleetsize: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.fleetsize
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.addedfrom}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, addedfrom: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.addedfrom
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.aadharpic}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, aadharpic: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.aadharpic
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <button className="save-button" onClick={handleSave}>Save</button>
                                ) : (
                                    <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                                )}
                                {editMode && editedData && editedData.id === item.id && (
                                    <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transport;
