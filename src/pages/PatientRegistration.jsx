import React, { useState } from 'react';
import { FaSave, FaEraser, FaTrash, FaUserPlus } from 'react-icons/fa';

const PatientRegistration = () => {
    const initialFormState = {
        name: '',
        age: '',
        gender: '',
        mobile: '',
        city: '',
        address: ''
    };

    const [formData, setFormData] = useState(initialFormState);
    const [patientList, setPatientList] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFormData(initialFormState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPatient = {
            id: Date.now(), // Simple unique ID
            uhid: `UHID-${Math.floor(1000 + Math.random() * 9000)}`, // Mock Unique Hospital ID
            ...formData
        };

        setPatientList([newPatient, ...patientList]);
        setFormData(initialFormState);
        alert(`Patient Registered Successfully! UHID: ${newPatient.uhid}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this patient record?')) {
            setPatientList(patientList.filter(p => p.id !== id));
        }
    };

    return (
        <div>
            <div className="mb-4">
                <h3>Patient Registration</h3>
                <p className="text-secondary">Register a new patient with basic details.</p>
            </div>

            <div className="card border-0 shadow-sm mb-5">
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        <h5 className="mb-4 text-primary d-flex align-items-center">
                            <FaUserPlus className="me-2" /> Patient Details
                        </h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Full Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter full name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label className="form-label">Age <span className="text-danger">*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label className="form-label">Gender <span className="text-danger">*</span></label>
                                    <select
                                        className="form-select"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Mobile Number <span className="text-danger">*</span></label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Enter mobile number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Enter full address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3 mt-4">
                            <button type="button" className="btn btn-light text-muted" onClick={handleReset}>
                                <FaEraser className="me-2" /> Reset
                            </button>
                            <button type="submit" className="btn btn-primary">
                                <FaSave className="me-2" /> Save Patient
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Patient List Section */}
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-primary">Registered Patients</h5>
                    <span className="badge bg-primary rounded-pill">{patientList.length} Total</span>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-light text-secondary">
                                <tr>
                                    <th className="ps-4">UHID</th>
                                    <th>Patient Name</th>
                                    <th>Age/Gender</th>
                                    <th>Mobile</th>
                                    <th>City</th>
                                    <th className="text-end pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientList.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-muted">
                                            No patients registered yet.
                                        </td>
                                    </tr>
                                ) : (
                                    patientList.map((patient) => (
                                        <tr key={patient.id}>
                                            <td className="ps-4 fw-bold text-primary">{patient.uhid}</td>
                                            <td className="fw-bold">{patient.name}</td>
                                            <td>{patient.age} / {patient.gender}</td>
                                            <td>{patient.mobile}</td>
                                            <td>{patient.city || '-'}</td>
                                            <td className="text-end pe-4">
                                                <button
                                                    className="btn btn-link text-danger p-0"
                                                    onClick={() => handleDelete(patient.id)}
                                                    title="Delete Record"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientRegistration;
