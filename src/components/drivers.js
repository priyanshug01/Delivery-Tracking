import React, { useState } from 'react';
import '../styles/tabs.css';

const Driver = ({ data: initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [newItem, setNewItem] = useState({
        id: '',
        name: '',
        state: '',
        city: '',
        mobno: '',
        transname: '',
        aadhar: '',
        dlfront: '',
        dlback: '',
        addedfrom: '',
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
        const newItemWithId = { ...newItem, id: data.length + 1 };
        const updatedData = [...data, newItemWithId];
        setNewItem({
            id: '',
            name: '',
            state: '',
            city: '',
            mobno: '',
            transname: '',
            aadhar: '',
            dlfront: '',
            dlback: '',
            addedfrom: '',
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
                        <th>Mobile No.</th>
                        <th>Transporter Name</th>
                        <th>Aadhar</th>
                        <th>DL Frontside</th>
                        <th>DL Backside</th>
                        <th>Added From</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className={editMode && editedData && editedData.id === item.id ? "editing" : ""}>
                            <td>{item.id}</td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="name"
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
                                        name="state"
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
                                        name="city"
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
                                        name="mobno"
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
                                        name="transname"
                                        value={editedData.transname}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, transname: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.transname
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="aadhar"
                                        value={editedData.aadhar}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, aadhar: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.aadhar
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="dlfront"
                                        value={editedData.dlfront}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, dlfront: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.dlfront
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="dlback"
                                        value={editedData.dlback}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, dlback: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.dlback
                                )}
                            </td>
                            <td>{item.addedfrom}</td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <>
                                        <button className="save-button" onClick={handleSave}>Save</button>
                                        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                                    </>
                                ) : (
                                    <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Driver;
