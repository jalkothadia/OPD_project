import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-5 pb-4 mt-auto">
            <div className="container">
                <div className="row">
                    {/* Column 1: Brand & Contact */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-4 fw-bold">
                            <FaStethoscope className="me-2" /> CarePlus HMS
                        </h5>
                        <p className="small mb-3 text-white-50">
                            Providing quality healthcare management solutions efficiently and reliably.
                        </p>
                        <div className="small">
                            <p className="mb-2"><FaMapMarkerAlt className="me-2" /> 123 Health Street, Medical City</p>
                            <p className="mb-2"><FaPhone className="me-2" /> +1 234 567 8900</p>
                            <p className="mb-2"><FaEnvelope className="me-2" /> support@careplushms.com</p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold mb-4">Core Services</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="text-white text-decoration-none small">Dashboard</Link></li>
                            <li className="mb-2"><Link to="/patient" className="text-white text-decoration-none small">Patient Registration</Link></li>
                            <li className="mb-2"><Link to="/opd" className="text-white text-decoration-none small">OPD Entry</Link></li>
                            <li className="mb-2"><Link to="/consultation" className="text-white text-decoration-none small">Doctor Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Administration */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold mb-4">Administration</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/receipt" className="text-white text-decoration-none small">Billing & Receipts</Link></li>
                            <li className="mb-2"><Link to="/reports" className="text-white text-decoration-none small">Reports Center</Link></li>
                            <li className="mb-2"><Link to="/doctor" className="text-white text-decoration-none small">Doctor Master</Link></li>
                            <li className="mb-2"><Link to="/hospital" className="text-white text-decoration-none small">Hospital Settings</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Configuration */}
                    <div className="col-md-3">
                        <h6 className="text-uppercase fw-bold mb-4">Configuration</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/diagnosis" className="text-white text-decoration-none small">Diagnosis Master</Link></li>
                            <li className="mb-2"><Link to="/treatment" className="text-white text-decoration-none small">Treatment Master</Link></li>
                            <li className="mb-2"><Link to="/sub-treatment" className="text-white text-decoration-none small">Sub-Treatment Type</Link></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none small" onClick={(e) => e.preventDefault()}>Help & Support</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 bg-white opacity-25" />

                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0 small text-white-50">© {new Date().getFullYear()} CarePlus HMS. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0 small text-white-50">Designed for modern healthcare.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
