import React, { useState } from 'react';

const Client = ({ data: initialData }) => {
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
        window.open(`./cliententry`, '_blank');
    };

    return (
        <div className="masters-tab">
            <button className="add-item" onClick={() => handleAdd()}>Add Item</button>
            <table className="masters-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th>Employee Id</th>
                        <th>Surge Charge</th>
                        <th>GST Number</th>
                        <th>Rate Matrix Type</th>
                        <th>Wait Charge</th>
                        <th>Profile Pic</th>
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
                                        name="email"
                                        value={editedData.email}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, email: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.email
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="design"
                                        value={editedData.design}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, design: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.design
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="empid"
                                        value={editedData.empid}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, empid: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.empid
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="surcharge"
                                        value={editedData.surcharge}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, surcharge: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.surcharge
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="gstno"
                                        value={editedData.gstno}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, gstno: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.gstno
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="ratemat"
                                        value={editedData.ratemat}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, ratemat: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.ratemat
                                )}
                            </td>
                            <td>
                                {editMode && editedData && editedData.id === item.id ? (
                                    <input
                                        type="text"
                                        name="waitcharge"
                                        value={editedData.waitcharge}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, waitcharge: e.target.value })
                                        }
                                    />
                                ) : (
                                    item.waitcharge
                                )}
                            </td>
                            <td>{item.profpic}</td>
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

export default Client;
