import React, { useState } from 'react';
import '../styles/vehicles.css';

const Vehicles = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const [data, setData] = useState([
        { id: 1, name: 'Item 1', description: 'Description 1', price: '₹1000' },
        { id: 2, name: 'Item 2', description: 'Description 2', price: '₹1500' },
        { id: 3, name: 'Item 3', description: 'Description 3', price: '₹2000' },
        { id: 4, name: 'Item 4', description: 'Description 4', price: '₹2500' },
    ]);

    const handleEdit = (id) => {
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAdd = () => {
        const newId = data.length + 1;
        const newItem = {
            id: newId,
            name: `Item ${newId}`,
            description: 'New Description',
            price: '₹1000',
        };
        setData([...data, newItem]);
    };

    return (
        <>
            <span className="heading">Masters</span>
            <div className='tab-container'>
                <div className="tab-view">
                    <div className="tab-buttons">
                        <button
                            className={activeTab === 1 ? 'active' : ''}
                            onClick={() => handleTabClick(1)}
                        >
                            Truck Owners
                        </button>
                        <button
                            className={activeTab === 2 ? 'active' : ''}
                            onClick={() => handleTabClick(2)}
                        >
                            Customers
                        </button>
                        <button
                            className={activeTab === 3 ? 'active' : ''}
                            onClick={() => handleTabClick(3)}
                        >
                            Routes
                        </button>
                        <button
                            className={activeTab === 4 ? 'active' : ''}
                            onClick={() => handleTabClick(4)}
                        >
                            Truck Master
                        </button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 1 && <p><div className="table-view">
                            <button className="add-btn" onClick={handleAdd}>
                                Add Item
                            </button>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                                                    Edit
                                                </button>
                                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </p>}
                        {activeTab === 2 && <p><div className="table-view">
                            <button className="add-btn" onClick={handleAdd}>
                                Add Item
                            </button>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                                                    Edit
                                                </button>
                                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div></p>}
                        {activeTab === 3 && <div className="table-view">
                            <button className="add-btn" onClick={handleAdd}>
                                Add Item
                            </button>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                                                    Edit
                                                </button>
                                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        }
                        {activeTab === 4 && <p><div className="table-view">
                            <button className="add-btn" onClick={handleAdd}>
                                Add Item
                            </button>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                                                    Edit
                                                </button>
                                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        </p>}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Vehicles;