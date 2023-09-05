import React, { useState } from 'react';
import '../styles/tabs.css';

const Vehicle = ({ data: initialData }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState(null);
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

    const handleAdd = () => {
        window.open(`./vehicleentry`, '_blank');
    };

    return (
        <div className="masters-tab">
            <button className="add-item" onClick={() => handleAdd()}>Add Item</button>
            <table className="masters-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Transporter Name</th>
                        <th>Transporter No.</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle No.</th>
                        <th>Insurance No.</th>
                        <th>Permit Type</th>
                        <th>Verification Status</th>
                        <th>RC Front</th>
                        <th>RC Back</th>
                        <th>Vehicle</th>
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
                                        value={editedData.transno}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, transno: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.transno
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.vehtype}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, vehtype: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.vehtype
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.vehno}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, vehno: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.vehno
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.insno}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, insno: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.insno
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.pertype}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, pertype: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.pertype
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.verstatus}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, verstatus: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.verstatus
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.rcfront}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, rcfront: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.rcfront
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.rcback}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, rcback: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.rcback
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        value={editedData.veh}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, veh: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.veh
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

export default Vehicle;
