import React from 'react';
import { FaDownload, FaFilter } from 'react-icons/fa';

const Reports = () => {
    return (
        <div>
            <div className="mb-4">
                <h3>Reports Center</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">OPD Reports</li>
                    </ol>
                </nav>
            </div>

            <div className="card mb-4">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 text-primary">OPD Collection Report</h5>
                </div>
                <div className="card-body p-4">
                    <form className="mb-4">
                        <div className="row align-items-end g-3">
                            <div className="col-md-3">
                                <label className="form-label fw-bold small">From Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label fw-bold small">To Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label fw-bold small">Doctor</label>
                                <select className="form-select">
                                    <option value="">All Doctors</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-primary w-100"><FaFilter className="me-2" /> Generate Report</button>
                            </div>
                        </div>
                    </form>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="bg-light">
                                <tr>
                                    <th>Date</th>
                                    <th>Receipt No</th>
                                    <th>Patient Name</th>
                                    <th>Doctor</th>
                                    <th>Service</th>
                                    <th className="text-end">Amount</th>
                                    <th>Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].map(i => (
                                    <tr key={i}>
                                        <td>2023-10-2{7 + i}</td>
                                        <td>REC-2023-00{i}</td>
                                        <td>Patient {i}</td>
                                        <td>Dr. Smith</td>
                                        <td>Consultation</td>
                                        <td className="text-end">$50.00</td>
                                        <td>Cash</td>
                                    </tr>
                                ))}
                                <tr className="bg-light fw-bold">
                                    <td colSpan={5} className="text-end">Total Collection</td>
                                    <td className="text-end">$150.00</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-success"><FaDownload className="me-2" /> Export to Excel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
