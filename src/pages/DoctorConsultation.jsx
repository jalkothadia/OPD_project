import React from 'react';
import { FaUserInjured, FaSave, FaPlus } from 'react-icons/fa';

const DoctorConsultation = () => {
    return (
        <div>
            <div className="mb-4">
                <h3>Consultation</h3>
                <p className="text-secondary">Patient diagnosis and prescription.</p>
            </div>

            <div className="row g-4">
                {/* Patient Context */}
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <div className="bg-light p-3 rounded-circle me-3 text-primary">
                                    <FaUserInjured size={24} />
                                </div>
                                <div>
                                    <h5 className="mb-0">John Doe</h5>
                                    <p className="text-muted small">Male, 30 Yrs | ID: #PAT-101</p>
                                </div>
                            </div>

                            <div className="bg-light p-3 rounded mb-3">
                                <p className="fw-bold text-uppercase text-secondary">Vitals</p>
                                <div className="d-flex justify-content-between mt-2">
                                    <span>BP: <strong>120/80</strong></span>
                                    <span>Temp: <strong>98.6</strong></span>
                                    <span>SpO2: <strong>99%</strong></span>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold">Clinical Notes / Symptoms</label>
                                <textarea className="form-control" rows={4} placeholder="Enter observations..."></textarea>
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-bold">Diagnosis</label>
                                <input type="text" className="form-control" placeholder="e.g. Viral Fever" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prescription & Action */}
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-header bg-transparent border-0 pt-4 px-4 pb-0">
                            <h5 className="mb-0 text-primary">Rx / Prescription</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="row g-2 mb-4 align-items-end">
                                <div className="col-md-4">
                                    <label className="form-label small">Medicine</label>
                                    <input className="form-control" placeholder="e.g. Paracetamol" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label small">Dosage</label>
                                    <input className="form-control" placeholder="e.g. 1-0-1" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label small">Duration</label>
                                    <input className="form-control" placeholder="e.g. 5 Days" />
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-outline-primary w-100"><FaPlus /> Add</button>
                                </div>
                            </div>

                            <table className="table mb-4">
                                <thead className="bg-light text-muted small">
                                    <tr>
                                        <th>Medicine</th>
                                        <th>Dosage</th>
                                        <th>Duration</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dolo 650</td>
                                        <td>1-0-1 (After Food)</td>
                                        <td>3 Days</td>
                                        <td className="text-end"><button className="btn btn-link btn-sm text-danger p-0 text-decoration-none">Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="mb-4">
                                <label className="form-label small fw-bold">Advice</label>
                                <textarea className="form-control" rows={3} placeholder="Drink water, take rest..."></textarea>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary btn-lg"><FaSave className="me-2" /> Save & Print</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorConsultation;
