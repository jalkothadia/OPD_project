import React, { useState } from 'react';

const TreatmentMaster = () => {
    // Static data
    const [treatments] = useState([
        { id: 1, name: 'Consultation' },
        { id: 2, name: 'Surgery' },
        { id: 3, name: 'Therapy' },
        { id: 4, name: 'Laboratory' },
        { id: 5, name: 'Radiology' }
    ]);

    return (
        <div className="container-fluid p-0">
            <h3 className="mb-4 text-primary fw-bold">Treatment Type Master</h3>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 border-0">
                    <h5 className="mb-0 text-primary">Treatment List</h5>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase ps-4">Treatment Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {treatments.map((item) => (
                                    <tr key={item.id}>
                                        <td className="ps-4 fw-medium text-dark">{item.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentMaster;
