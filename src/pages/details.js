import React, { useState } from 'react';
import '../styles/details.css';

const Details = () => {

    const [data] = useState([
        { id: '1', header1: 'Date', value1: '2023-08-26', header2: 'Vehicle no', value2: 'NL01AF3270', header3: 'Date', value3: '2023-08-26' },
        { id: '2', header1: 'Client Name', value1: 'OM LOGISTICS', header2: 'Vehicle Reported at Hub', value2: '01-04-2023', header3: 'Date', value3: '2023-08-26'  },
        { id: '3', header1: 'POC Name', value1: 'Nikhil', header2: 'Vehicle Departed at Hub', value2: '02-04-2023', header3: 'Date', value3: '2023-08-26'  },
        { id: '4', header1: 'POC No', value1: '9868856732', header2: 'Detention Days', value2: '1', header3: 'Date', value3: '2023-08-26'  },
        { id: '5', header1: 'Vehicle Placed By', value1: 'Sunny Sir', header2: 'Supplier Name', value2: 'GOODWILL INDIA TRANS AND LOGISTICS PVT LTD', header3: 'Date', value3: '2023-08-26'  },
        { id: '6', header1: 'Vehicle Type', value1: '32FT SXL 7MT', header2: 'Beneficiary Name', value2: 'GOODWILL INDIA TRANS AND LOGISTICS PVT LTD', header3: 'Date', value3: '2023-08-26'  },
        { id: '7', header1: 'Origin', value1: 'Noida', header2: 'Vehicle no', value2: 'NL01AF3270', header3: 'Date', value3: '2023-08-26'  },
        { id: '8', header1: 'Destination', value1: 'Tirupati', header2: 'Vehicle no', value2: 'NL01AF3270', header3: 'Date', value3: '2023-08-26'  },

    ]);

    return (
        <>
            <div className="heading">Details</div>
            <div className="table-container">
                <table className="tbl-data">
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.header1}</th>
                                <td>{item.value1}</td>
                                <th>{item.header2}</th>
                                <td>{item.value2}</td>
                                <th>{item.header3}</th>
                                <td>{item.value3}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
};

export default Details;
