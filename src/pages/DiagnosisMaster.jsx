import React, { useState } from 'react';

const DiagnosisMaster = () => {
    // Static data
    const [diagnoses] = useState([
        { id: 1, code: 'D001', name: 'Viral Fever' },
        { id: 2, code: 'D002', name: 'Typhoid' },
        { id: 3, code: 'D003', name: 'Malaria' },
        { id: 4, code: 'D004', name: 'Diabetes Type 2' }
    ]);

    return (
        <div className="container-fluid p-0">
            <h3 className="mb-4 text-primary fw-bold">Diagnosis Type Master</h3>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 border-0">
                    <h5 className="mb-0 text-primary">Diagnosis List</h5>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Diagnosis Code</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Diagnosis Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {diagnoses.map((item) => (
                                    <tr key={item.id}>
                                        <td className="fw-medium text-dark">{item.code}</td>
                                        <td>{item.name}</td>
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

export default DiagnosisMaster;
