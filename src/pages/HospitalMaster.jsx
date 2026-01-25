import React, { useState } from 'react';
import { hospitalData } from '../data/mockData';

const HospitalMaster = () => {
    const [hospitals, setHospitals] = useState([hospitalData]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        branch: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHospital = {
            id: hospitals.length + 1,
            ...formData
        };
        setHospitals([...hospitals, newHospital]);
        setShowForm(false);
        setFormData({ name: '', address: '', phone: '', branch: '' });
    };

    return (
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="text-primary fw-bold mb-0">Hospital Settings</h3>
                <button
                    className={`btn ${showForm ? 'btn-danger' : 'btn-primary'}`}
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Cancel Entry' : '+ Hospital Entry'}
                </button>
            </div>

            {showForm && (
                <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-white py-3">
                        <h5 className="mb-0 text-primary">New Hospital Entry</h5>
                    </div>
                    <div className="card-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Hospital Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Branch</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="branch"
                                        value={formData.branch}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <textarea
                                        className="form-control"
                                        name="address"
                                        rows="2"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Contact No</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-12 text-end mt-3">
                                    <button type="button" className="btn btn-secondary me-2" onClick={() => setShowForm(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save Hospital</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="row g-4">
                {hospitals.map((hospital, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-header bg-white py-3 border-0">
                                <h5 className="mb-0 text-primary">Hospital Details #{hospital.id || index + 1}</h5>
                            </div>
                            <div className="card-body p-4">
                                <div className="row g-4">
                                    <div className="col-md-12">
                                        <div className="p-3 bg-light rounded">
                                            <label className="small text-muted text-uppercase fw-bold mb-1">Hospital Name</label>
                                            <h5 className="mb-0 text-dark fw-bold">{hospital.name}</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="p-3 bg-light rounded">
                                            <label className="small text-muted text-uppercase fw-bold mb-1">Address</label>
                                            <p className="mb-0">{hospital.address}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded">
                                            <label className="small text-muted text-uppercase fw-bold mb-1">Contact No</label>
                                            <p className="mb-0 fw-medium">{hospital.phone}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 bg-light rounded">
                                            <label className="small text-muted text-uppercase fw-bold mb-1">Branch</label>
                                            <p className="mb-0 fw-medium">{hospital.branch}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalMaster;
