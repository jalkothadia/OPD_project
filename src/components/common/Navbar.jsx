import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaStethoscope } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom shadow-sm">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand d-flex align-items-center fw-bold text-primary">
                    <FaStethoscope className="me-2" /> CarePlus HMS
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#basic-navbar-nav"
                    aria-controls="basic-navbar-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basic-navbar-nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" end>Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/patient" className="nav-link">Patients</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/opd" className="nav-link">OPD</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/consultation" className="nav-link">Consultation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/receipt" className="nav-link">Billing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/reports" className="nav-link">Reports</NavLink>
                        </li>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Master
                            </button>
                            <ul className="dropdown-menu">
                                <li className="nav-item">
                                    <NavLink to="/hospital" className="nav-link">Hospital Master</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/doctor" className="nav-link">Doctor Master</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/diagnosis" className="nav-link">Diagnosis Type</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/treatment" className="nav-link">Treatment Type</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/sub-treatment" className="nav-link">Sub Treatment</NavLink>
                                </li>
                            </ul>
                        </div>


                    </ul>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaUserCircle size={20} />
                            User
                        </button>
                        <ul className="dropdown-menu">
                            <li className="nav-item mb-2">
                                <NavLink to="/profile" className="nav-link">Profile</NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink to="/info" className="nav-link">Info</NavLink>
                            </li>
                            <div className='dropdown-dividor' />
                            <li className="nav-item mb-2">
                                <NavLink to="/login" className="nav-link">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
