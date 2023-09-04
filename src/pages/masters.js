import React, { useState } from 'react';
import '../styles/masters.css';
import NavBar from '../components/navbar';
import Transport from '../components/transport';
import Driver from '../components/drivers';
import Vehicle from '../components/vehicle';
import City from '../components/city';
import LoadType from '../components/loadtype';
import Clients from '../components/clients';

const Masters = () => {
    const [activeTab, setActiveTab] = useState(1);

    const transportData = [
        { id: 1, name: 'Vibhor Bakshi', state: 'Bihar', city: 'Patna', accno: '97979797644664', accholder: 'Mayank', ifsc: 'zgGGGGa', mobno: '8789179924', fleetsize: '5', addedfrom: 'Dashboard', aadharpic: 'Pic' },
        { id: 2, name: 'Lal Babu Yadav', state: 'Bihar', city: 'Patna', accno: '73200100125070', accholder: 'Lal Babu Yadav', ifsc: 'PUNB0MBGB06', mobno: '6206090211', fleetsize: '0', addedfrom: 'Dashboard', aadharpic: 'Pic' },
    ];

    const driverData = [
        { id: 1, name: 'Ajay Kumar', state: 'Bihar', city: 'Patna', mobno: '6395184231', transname: 'Ajay Kumar', aadhar: 'pic', dlfront: 'Pic', dlback: 'Pic', addedfrom: 'App' },
        { id: 2, name: 'Akhilesh Kumar', state: 'Bihar', city: 'Patna', mobno: '7763855244', transname: 'Akhilesh Kumar', aadhar: 'pic', dlfront: 'Pic', dlback: 'Pic', addedfrom: 'App' },
    ];

    const vehicleData = [
        { id: 1, transname: 'Ajay Kumar', transno: '6395184231', vehtype: 'T-407', vehno: 'UP80FT1062', insno: '12345689', pertype: 'State', verstatus: 'Verified', rcfront: 'Pic', rcback: 'Pic', veh: 'Pic', addedfrom: 'App' },
        { id: 2, transname: 'Aman Kumar', transno: '7492934134', vehtype: 'T-207 (Pick-up)', vehno: 'BR01GH7484', insno: '3379/02705160/000/00', pertype: 'All India', verstatus: 'Verified', rcfront: 'Pic', rcback: 'Pic', veh: 'Pic', addedfrom: 'Dashboard' },
    ];

    const cityData = [
        { id: 1, state: 'Bihar', city: 'Patna', addedfrom: 'App' },
        { id: 2, state: 'Bihar', city: 'Aurangabad', addedfrom: 'App' },
    ];

    const loadTypeData = [
        { id: 1, loadtype: 'Grocery' },
        { id: 2, loadtype: 'Electronics' },
        { id: 3, loadtype: 'Health Care' },
        { id: 4, loadtype: 'Food & Beverages' },
        { id: 5, loadtype: 'Personal Care' },
        { id: 6, loadtype: 'Plywood' },
        { id: 7, loadtype: 'Pipes' },
        { id: 8, loadtype: 'Tires' },
    ];

    const clientData = [
        { id: 1, name: 'Abhishek Kumar (INDIGO PAINTS)', state: 'Bihar', city: 'Patna', mobno: '8521094349', email: 'patna@indigopaints.com', design: 'Logistics Manager', empid: '00000', surcharge: '0', gstno: '10AAECG6456H1ZT', ratemat: 'Static', waitcharge: 'No', profpic: 'pic' },
        { id: 2, name: 'Bettiah (Dehaat)', state: 'Bihar', city: 'Bettiah', mobno: '7091873298', email: 'bhartenduk@agrevolution.in', design: 'Node Incharge', empid: 'E02190210', surcharge: '0', gstno: '10AAECG6456H1ZT', ratemat: 'Static', waitcharge: 'No', profpic: 'pic' },
    ];

    return (
        <>
            <NavBar />
            <span className="heading">Masters</span>
            <div className='tab-container'>
                <div className="tab-view">
                    <div className="tab-buttons">
                        <button
                            className={activeTab === 1 ? 'active' : ''}
                            onClick={() => setActiveTab(1)}
                        >
                            Transport
                        </button>
                        <button
                            className={activeTab === 2 ? 'active' : ''}
                            onClick={() => setActiveTab(2)}
                        >
                            Driver
                        </button>
                        <button
                            className={activeTab === 3 ? 'active' : ''}
                            onClick={() => setActiveTab(3)}
                        >
                            Vehicle
                        </button>
                        <button
                            className={activeTab === 4 ? 'active' : ''}
                            onClick={() => setActiveTab(4)}
                        >
                            City
                        </button>
                        <button
                            className={activeTab === 5 ? 'active' : ''}
                            onClick={() => setActiveTab(5)}
                        >
                            Load Type
                        </button>
                        <button
                            className={activeTab === 6 ? 'active' : ''}
                            onClick={() => setActiveTab(6)}
                        >
                            Client
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 1 && <Transport data={transportData} />}
                        {activeTab === 2 && <Driver data={driverData} />}
                        {activeTab === 3 && <Vehicle data={vehicleData} />}
                        {activeTab === 4 && <City data={cityData} />}
                        {activeTab === 5 && <LoadType data={loadTypeData} />}
                        {activeTab === 6 && <Clients data={clientData} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Masters;
