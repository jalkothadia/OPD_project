import React, { useState } from 'react';
import { FaPrint } from 'react-icons/fa';

const ReceiptEntry = () => {
    // Static patients data
    const patients = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Michael Johnson' }
    ];

    const [billDate, setBillDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <div>
            <div className="mb-4">
                <h3>Billing & Receipt</h3>
                <p className="text-secondary">Generate receipts for OPD or treatments.</p>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="card border-0 shadow-sm mb-4">
                        <div className="card-header bg-white py-3 border-0">
                            <h5 className="mb-0 text-primary">Bill Details</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Select Patient <span className="text-danger">*</span></label>
                                        <select className="form-select">
                                            <option value="">-- Choose Patient --</option>
                                            {patients.map(p => (
                                                <option key={p.id} value={p.id}>{p.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Bill Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={billDate}
                                            onChange={(e) => setBillDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <table className="table table-bordered mb-4">
                                <thead className="bg-light">
                                    <tr>
                                        <th>Service / Treatment</th>
                                        <th style={{ width: '120px' }} className="text-end">Cost</th>
                                        <th style={{ width: '80px' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" className="form-control" placeholder="e.g. Consultation Fee" defaultValue="Consultation" />
                                        </td>
                                        <td>
                                            <input type="number" defaultValue="500" className="form-control text-end" />
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-outline-danger btn-sm">X</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" className="form-control" placeholder="Add Item..." />
                                        </td>
                                        <td>
                                            <input type="number" placeholder="0" className="form-control text-end" />
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-outline-success btn-sm">+</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h5 className="mb-4 text-center">Summary</h5>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Sub Total</span>
                                <strong>$500.00</strong>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Tax (0%)</span>
                                <strong>$0.00</strong>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Discount</span>
                                <strong>$0.00</strong>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4 align-items-center">
                                <span className="h5 mb-0">Total</span>
                                <span className="h4 mb-0 fw-bold text-primary">$500.00</span>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Payment Mode</label>
                                <select className="form-select">
                                    <option>Cash</option>
                                    <option>Card</option>
                                    <option>UPI</option>
                                </select>
                            </div>

                            <button className="btn btn-success btn-lg w-100">
                                <FaPrint className="me-2" /> Generate Receipt
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptEntry;
