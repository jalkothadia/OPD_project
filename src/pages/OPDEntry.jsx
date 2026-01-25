import React, { useState } from 'react';
import { FaSave, FaTrash } from 'react-icons/fa';

const OPDEntry = () => {
    // Static data
    const doctors = [
        { id: 1, name: 'Dr. John Doe', specialization: 'General Physician' },
        { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician' },
        { id: 3, name: 'Dr. Robert Brown', specialization: 'Orthopedic' }
    ];

    const patients = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Michael Johnson' }
    ];

    const initialFormState = {
        patientId: '',
        doctorId: '',
        reason: '',
        fee: '500',
        paymentMode: 'Cash'
    };

    const [formData, setFormData] = useState(initialFormState);
    const [opdList, setOpdList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Find names for display
        const patientName = patients.find(p => p.id === parseInt(formData.patientId))?.name || 'Unknown';
        const doctorName = doctors.find(d => d.id === parseInt(formData.doctorId))?.name || 'Unknown';

        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            patientName,
            doctorName,
            ...formData
        };

        setOpdList([newEntry, ...opdList]);
        setFormData(initialFormState);
        alert('Appointment Created Successfully!');
    };

    const handleDelete = (id) => {
        setOpdList(opdList.filter(item => item.id !== id));
    };

    return (
        <div>
            <div className="mb-4">
                <h3>OPD Entry</h3>
                <p className="text-secondary">Create a new OPD appointment appointment.</p>
            </div>

            <div className="card border-0 shadow-sm mb-5">
                <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Select Patient <span className="text-danger">*</span></label>
                                    <select
                                        className="form-select"
                                        name="patientId"
                                        value={formData.patientId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">-- Choose Patient --</option>
                                        {patients.map(p => (
                                            <option key={p.id} value={p.id}> {p.name} (ID: {p.id})</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Assign Doctor <span className="text-danger">*</span></label>
                                    <select
                                        className="form-select"
                                        name="doctorId"
                                        value={formData.doctorId}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">-- Choose Doctor --</option>
                                        {doctors.map(d => (
                                            <option key={d.id} value={d.id}> {d.name} ({d.specialization})</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Reason for Visit / Complaints</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Enter purpose of visit or quick notes..."
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Consultation Fee</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="fee"
                                        value={formData.fee}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Payment Mode</label>
                                    <select
                                        className="form-select"
                                        name="paymentMode"
                                        value={formData.paymentMode}
                                        onChange={handleInputChange}
                                    >
                                        <option>Cash</option>
                                        <option>Online/UPI</option>
                                        <option>Insurance</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                                <FaSave className="me-2" /> Create Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* List Section */}
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 text-primary">Today's Appointments</h5>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-light text-secondary">
                                <tr>
                                    <th className="ps-4">#</th>
                                    <th>Patient Name</th>
                                    <th>Doctor</th>
                                    <th>Fee</th>
                                    <th>Mode</th>
                                    <th>Reason</th>
                                    <th className="text-end pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {opdList.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4 text-muted">
                                            No appointments added yet.
                                        </td>
                                    </tr>
                                ) : (
                                    opdList.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="ps-4">{index + 1}</td>
                                            <td className="fw-bold">{item.patientName}</td>
                                            <td>{item.doctorName}</td>
                                            <td>₹{item.fee}</td>
                                            <td><span className="badge bg-light text-dark border">{item.paymentMode}</span></td>
                                            <td className="text-truncate" style={{ maxWidth: '150px' }} title={item.reason}>{item.reason || '-'}</td>
                                            <td className="text-end pe-4">
                                                <button
                                                    className="btn btn-link text-danger p-0"
                                                    onClick={() => handleDelete(item.id)}
                                                    title="Remove"
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

export default OPDEntry;
