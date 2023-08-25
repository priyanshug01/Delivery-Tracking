import React, { useState } from 'react';
import '../styles/vehicles.css';
import man from '../images/man.png';

const Vehicles = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    
    return (
        <>
            <span className="heading">Dashboard</span>
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
                        {activeTab === 1 && <p>Content for Tab 1</p>}
                        {activeTab === 2 && <p>Content for Tab 2</p>}
                        {activeTab === 3 && <p>Content for Tab 3</p>}
                        {activeTab === 4 && <p>Content for Tab 4</p>}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Vehicles;
