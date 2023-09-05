import React, { useState } from 'react';
import '../styles/survelliance.css';
import NavBar from '../components/navbar';

const Surveillance = () => {
    const [activeTab, setActiveTab] = useState(1);

    const incomingData = [
        { id: 1, company: 'Road Express', startdate: '26/07/2021', drivername: 'test1', vehno: 'JH-07-AJ-2198', sourcecity: 'Patna', type: 'Electronics', amount: '0' },
    ];

    const outgoingData = [
        { id: 1, company: 'Road Express', startdate: '26/07/2021', drivername: 'test2', vehno: 'JH-07-AJ-2198', sourcecity: 'Patna', type: 'Electronics', amount: '0' },
    ];

    const handleView = () => {
        window.open(`https://www.google.com/maps`, '_blank');

    };

    return (
        <>
            <NavBar />
            <span className="heading">Surveillance</span>
            <div className="sur-container">
                <div className="sur-view">
                    <div className="sur-buttons">
                        <button
                            className={activeTab === 1 ? 'active' : ''}
                            onClick={() => setActiveTab(1)}
                        >
                            Incoming
                        </button>
                        <button
                            className={activeTab === 2 ? 'active' : ''}
                            onClick={() => setActiveTab(2)}
                        >
                            Outgoing
                        </button>
                    </div>
                    <div className="sur-content">
                        {activeTab === 1 && (
                            <div>
                                <br />
                                <table className='sur-data-table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Company</th>
                                            <th>Start Date</th>
                                            <th>Driver Name</th>
                                            <th>Vehicle Number</th>
                                            <th>Source City</th>
                                            <th>Load Type</th>
                                            <th>Amount</th>
                                            <th>Track</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {incomingData.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.company}</td>
                                                <td>{item.startdate}</td>
                                                <td>{item.drivername}</td>
                                                <td>{item.vehno}</td>
                                                <td>{item.sourcecity}</td>
                                                <td>{item.type}</td>
                                                <td>{item.amount}</td>
                                                <td><button className="view-btn" onClick={() => handleView()}>Track</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div>
                                <br />
                                <table className='sur-data-table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Company</th>
                                            <th>Start Date</th>
                                            <th>Driver Name</th>
                                            <th>Vehicle Number</th>
                                            <th>Source City</th>
                                            <th>Load Type</th>
                                            <th>Amount</th>
                                            <th>Track</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {outgoingData.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.company}</td>
                                                <td>{item.startdate}</td>
                                                <td>{item.drivername}</td>
                                                <td>{item.vehno}</td>
                                                <td>{item.sourcecity}</td>
                                                <td>{item.type}</td>
                                                <td>{item.amount}</td>
                                                <td><button className="view-btn" onClick={() => handleView()}>Track</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Surveillance;
