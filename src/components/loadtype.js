import React, { useState } from 'react';
import '../styles/tabs.css';

const LoadType = ({ data: initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
    const [newItem, setNewItem] = useState({
        id: '',
        loadtype: '',
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
            loadtype: '',
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
                        <th>Load Type</th>
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
                                        name="loadtype"
                                        value={editedData.loadtype}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, loadtype: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.loadtype
                                )}
                            </td>
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

export default LoadType;
