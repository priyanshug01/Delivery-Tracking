import React, { useState } from 'react';

const City = ({ data: initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [newItem, setNewItem] = useState({
        id: '',
        state: '',
        city: '',
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
            state: '',
            city: '',
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
                        <th style={{ width: "35%" }}>State</th>
                        <th>City</th>
                        <th style={{ width: "200px" }}>Added From</th>
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

export default City;
