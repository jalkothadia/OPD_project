import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from 'react-icons/fa';

const SubTreatmentMaster = () => {
    const [subTreatments, setSubTreatments] = useState(() => {
        const saved = localStorage.getItem('subTreatments');
        if (saved) {
            return JSON.parse(saved);
        } else {
            return [
                { id: 1, treatmentTypeId: 1, name: 'General Consultation', cost: 500, type: 'Consultation' },
                { id: 2, treatmentTypeId: 1, name: 'Specialist Consultation', cost: 800, type: 'Surgery' },
                { id: 3, treatmentTypeId: 2, name: 'Appendectomy', cost: 25000, type: 'Therapy' },
                { id: 4, treatmentTypeId: 4, name: 'Blood Test (CBC)', cost: 300, type: 'Laboratory' },
                { id: 5, treatmentTypeId: 5, name: 'X Ray', cost: 1000, type: 'Radiology' },
            ];
        }
    });

    useEffect(() => {
        localStorage.setItem('subTreatments', JSON.stringify(subTreatments));
    }, [subTreatments]);

    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentSubTreatment, setCurrentSubTreatment] = useState({ id: null, name: '', type: 'Consultation', cost: '' });

    // Hardcoded treatment types for dropdown (matching TreatmentMaster)
    const treatmentTypes = ['Consultation', 'Surgery', 'Therapy', 'Laboratory', 'Radiology'];

    const handleAddNew = () => {
        setCurrentSubTreatment({ id: null, name: '', type: 'Consultation', cost: '' });
        setIsEditMode(false);
        setShowModal(true);
    };

    const handleEdit = (item) => {
        setCurrentSubTreatment({ ...item });
        setIsEditMode(true);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this sub treatment?')) {
            setSubTreatments(subTreatments.filter(item => item.id !== id));
        }
    };

    const handleSave = () => {
        if (!currentSubTreatment.name || !currentSubTreatment.cost) {
            alert('Please fill in all fields');
            return;
        }

        if (isEditMode) {
            setSubTreatments(subTreatments.map(item => item.id === currentSubTreatment.id ? currentSubTreatment : item));
        } else {
            const newId = subTreatments.length > 0 ? Math.max(...subTreatments.map(t => t.id)) + 1 : 1;
            setSubTreatments([...subTreatments, { ...currentSubTreatment, id: newId }]);
        }
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentSubTreatment({ ...currentSubTreatment, [name]: value });
    };

    return (
        <div className="container-fluid p-0">
            <h3 className="mb-4 text-primary fw-bold">Sub Treatment Master</h3>

            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3 border-0 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-primary">Sub Treatment List</h5>
                    <button className="btn btn-primary btn-sm" onClick={handleAddNew}>
                        <FaPlus className="me-2" /> Add New Sub Treatment
                    </button>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0 align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase ps-4">Sub Treatment Name</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Treatment Type</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase">Cost</th>
                                    <th className="border-0 text-secondary small fw-bold text-uppercase text-end pe-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subTreatments.map((item) => (
                                    <tr key={item.id}>
                                        <td className="ps-4 fw-medium text-dark">{item.name}</td>
                                        <td><span className="badge bg-light text-dark border">{item.type}</span></td>
                                        <td className="fw-bold text-success">${item.cost}</td>
                                        <td className="text-end pe-4">
                                            <button className="btn btn-outline-primary btn-sm me-2" onClick={() => handleEdit(item)}>
                                                <FaEdit />
                                            </button>
                                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {showModal && (
                <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0 shadow">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title">{isEditMode ? 'Edit Sub Treatment' : 'Add New Sub Treatment'}</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-secondary">Sub Treatment Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={currentSubTreatment.name}
                                            onChange={handleChange}
                                            placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-secondary">Treatment Type</label>
                                        <select
                                            className="form-select"
                                            name="type"
                                            value={currentSubTreatment.type}
                                            onChange={handleChange}
                                        >
                                            {treatmentTypes.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-secondary">Cost</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="cost"
                                            value={currentSubTreatment.cost}
                                            onChange={handleChange}
                                            placeholder="Enter cost"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer border-0">
                                <button type="button" className="btn btn-light text-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={handleSave}>
                                    <FaSave className="me-2" /> Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SubTreatmentMaster;
