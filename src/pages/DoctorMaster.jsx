import React, { useState } from 'react';
import { doctorData } from '../data/mockData';

const DoctorMaster = () => {
    // Static data defined directly in the component
    // Static data defined directly in the component
    const [doctors] = useState(doctorData);

    return (
        <div className="container-fluid p-0">
            <h3 className="mb-4 text-primary fw-bold">Doctor Master</h3>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 border-0">
                    <h5 className="mb-0 text-primary">Doctor List</h5>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase ps-4">Doctor Name</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Specialization</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Department</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Timings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {doctors.map((doctor) => (
                                    <tr key={doctor.id}>
                                        <td className="ps-4 fw-medium text-dark">{doctor.name}</td>
                                        <td>{doctor.specialization}</td>
                                        <td>{doctor.department}</td>
                                        <td><span className="badge bg-light text-dark border">{doctor.timings}</span></td>
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

export default DoctorMaster;
