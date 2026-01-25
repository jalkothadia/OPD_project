import React from 'react';
import { FaUserMd, FaNotesMedical, FaHospitalUser, FaFileInvoiceDollar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StatCard = ({ title, count, icon, color }) => (
    <div className="card h-100 border-0 shadow-md">
        <div className="card-body d-flex justify-content-between align-items-center">
            <div>
                <h6 className="text-muted text-uppercase small fw-bold mb-1">{title}</h6>
                <h2 className="mb-0 fw-bold">{count}</h2>
            </div>
            <div className={`p-3 rounded-circle bg-${color} bg-opacity-10 text-${color}`}>
                {icon}
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="mb-1">Dashboard</h3>
                    <p className="text-secondary mb-0">Today's Overview</p>
                </div>
                <Link to="/opd" className="btn btn-primary">
                    + New OPD Entry
                </Link>
            </div>

            <div className="row g-4 mb-4">
                <div className="col-md-3">
                    <StatCard title="Registered Patients" count="1,245" icon={<FaHospitalUser size={24} />} color="primary" />
                </div>
                <div className="col-md-3">
                    <StatCard title="OPD Today" count="84" icon={<FaNotesMedical size={24} />} color="success" />
                </div>
                <div className="col-md-3">
                    <StatCard title="Doctors Active" count="12" icon={<FaUserMd size={24} />} color="info" />
                </div>
                <div className="col-md-3">
                    <StatCard title="Revenue" count="$12.4k" icon={<FaFileInvoiceDollar size={24} />} color="warning" />
                </div>
            </div>

            <div className="card border-0 shadow-md">
                <div className="card-header bg-transparent border-0 pt-4 px-4 pb-0 d-flex justify-content-between">
                    <h5 className="mb-0">Recent Appointments</h5>
                    <Link to="/opd" className="text-decoration-none small">View All</Link>
                </div>
                <div className="card-body p-4">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="border-0 small text-uppercase">Token</th>
                                    <th className="border-0 small text-uppercase">Patient Name</th>
                                    <th className="border-0 small text-uppercase">Doctor</th>
                                    <th className="border-0 small text-uppercase">Time</th>
                                    <th className="border-0 small text-uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i}>
                                        <td><span className="badge bg-light text-dark">#0{i}</span></td>
                                        <td className="fw-bold">John Doe {i}</td>
                                        <td>Dr. Sarah Smith</td>
                                        <td>10:{30 + i} AM</td>
                                        <td><span className={`badge bg-${i % 2 === 0 ? 'success' : 'warning'} fw-normal`}>{i % 2 === 0 ? 'Completed' : 'Waiting'}</span></td>
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

export default Dashboard;