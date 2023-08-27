import React, { useState } from 'react';
import '../styles/vehicles.css';

const Vehicles = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [editingItemId, setEditingItemId] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
    });

    const [tableData, setTableData] = useState({
        1: [
            { id: 1, name: 'Truck Owner 1', description: 'Description 1', price: '₹1000' },
            { id: 2, name: 'Truck Owner 2', description: 'Description 2', price: '₹1500' },
        ],
        2: [
            { id: 1, name: 'Customer 1', description: 'Description 1', price: '₹1000' },
            { id: 2, name: 'Customer 2', description: 'Description 2', price: '₹1500' },
        ],
        3: [
            { id: 1, name: 'Route 1', description: 'Description 1', price: '₹1000' },
            { id: 2, name: 'Route 2', description: 'Description 2', price: '₹1500' },
        ],
        4: [
            { id: 1, name: 'Truck Master 1', description: 'Description 1', price: '₹1000' },
            { id: 2, name: 'Truck Master 2', description: 'Description 2', price: '₹1500' },
        ],
    });

    const tableHeadings = {
        1: ['ID', 'Truck Owner Name', 'Description', 'Price', 'Actions'],
        2: ['ID', 'Customer Name', 'Description', 'Price', 'Actions'],
        3: ['ID', 'Route Name', 'Description', 'Price', 'Actions'],
        4: ['ID', 'Truck Master Name', 'Description', 'Price', 'Actions'],
    };

    const handleEdit = (id) => {
        setEditingItemId(id);
        const itemToEdit = tableData[activeTab].find(item => item.id === id);
        setFormData(itemToEdit);
    };

    const handleDelete = (id) => {
        const updatedData = tableData[activeTab].filter(item => item.id !== id);
        setTableData(prevTableData => ({
            ...prevTableData,
            [activeTab]: updatedData,
        }));
        setEditingItemId(null);
    };

    const handleAdd = () => {
        const newId = tableData[activeTab].length + 1;
        const newItem = { ...formData, id: newId };
        const updatedTableData = [...tableData[activeTab], newItem];
        setTableData(prevTableData => ({
            ...prevTableData,
            [activeTab]: updatedTableData,
        }));
        setFormData({
            id: '',
            name: '',
            description: '',
            price: '',
        });
    };

    const handleSave = () => {
        if (editingItemId) {
            const updatedData = tableData[activeTab].map(item =>
                item.id === editingItemId ? formData : item
            );
            setTableData(prevTableData => ({
                ...prevTableData,
                [activeTab]: updatedData,
            }));
            setEditingItemId(null);
        } else {
            handleAdd();
        }

        setFormData({
            id: '',
            name: '',
            description: '',
            price: '',
        });
    };

    return (
        <>
            <span className="heading">Masters</span>
            <div className='tab-container'>
                <div className="tab-view">
                    <div className="tab-buttons">
                        {Object.keys(tableData).map(tabIndex => (
                            <button
                                key={tabIndex}
                                className={activeTab === parseInt(tabIndex) ? 'active' : ''}
                                onClick={() => {
                                    setActiveTab(parseInt(tabIndex));
                                    setEditingItemId(null);
                                    setFormData({
                                        id: '',
                                        name: '',
                                        description: '',
                                        price: '',
                                    });
                                }}
                            >
                                {tableHeadings[parseInt(tabIndex)][1]}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        <div className="table-view">
                            <button className="add-btn" onClick={handleAdd}>
                                Add Item
                            </button>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        {tableHeadings[activeTab].map((heading, index) => (
                                            <th key={index}>{heading}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData[activeTab].map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>
                                                {editingItemId === item.id ? (
                                                    <input
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                ) : (
                                                    item.name
                                                )}
                                            </td>
                                            <td>
                                                {editingItemId === item.id ? (
                                                    <input
                                                        type="text"
                                                        value={formData.description}
                                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    />
                                                ) : (
                                                    item.description
                                                )}
                                            </td>
                                            <td>
                                                {editingItemId === item.id ? (
                                                    <input
                                                        type="text"
                                                        value={formData.price}
                                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                    />
                                                ) : (
                                                    item.price
                                                )}
                                            </td>
                                            <td>
                                                {editingItemId === item.id ? (
                                                    <button className="save-btn" onClick={handleSave}>
                                                        Save
                                                    </button>
                                                ) : (
                                                    <>
                                                        <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                                                            Edit
                                                        </button>
                                                        <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                                            Delete
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Vehicles;