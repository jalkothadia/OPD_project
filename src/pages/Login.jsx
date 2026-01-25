import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { hospitalData, doctorData } from '../data/mockData';
import './../styles/custom.css'; // Ensure we have styles

const Login = () => {
    const [userType, setUserType] = useState('patient'); // 'patient' or 'admin'
    const navigate = useNavigate();

    // Admin State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Patient Appointment State
    const [appointmentData, setAppointmentData] = useState({
        patientName: '',
        phone: '',
        age: '',
        gender: 'Male',
        doctor: '',
        date: ''
    });
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleAdminLogin = (e) => {
        e.preventDefault();
        // Simple mock authentication
        if (username === 'admin' && password === 'admin') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
        } else {
            setError('Invalid credentials. Try admin/admin');
        }
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Appointment Booked:', appointmentData);
        setBookingSuccess(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setBookingSuccess(false);
            setAppointmentData({
                patientName: '',
                phone: '',
                age: '',
                gender: 'Male',
                doctor: '',
                date: ''
            });
        }, 3000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="login-page-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#f0f2f5' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                            <div className="card-header bg-primary text-white text-center p-4">
                                <h3 className="mb-0 fw-bold">Sterling Hospital</h3>
                                <p className="mb-0 opacity-75">Advanced Care & Compassion</p>
                            </div>
                            <div className="card-body p-4">
                                <ul className="nav nav-pills justify-content-center mb-4">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link rounded-pill px-4 me-2 ${userType === 'patient' ? 'active' : ''}`}
                                            style={{backgroundColor:'white'}}
                                            onClick={() => setUserType('patient')}
                                        >
                                            Patient Appointment
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link rounded-pill px-4 me-2 ${userType === 'hospital' ? 'active' : ''}`}
                                            style={{backgroundColor:'white'}}
                                            onClick={() => setUserType('hospital')}
                                        >
                                            Hospital Info
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link rounded-pill px-4 me-2 ${userType === 'doctor' ? 'active' : ''}`}
                                            style={{backgroundColor:'white'}}
                                            onClick={() => setUserType('doctor')}
                                        >
                                            Doctors
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link rounded-pill px-4 ${userType === 'admin' ? 'active' : ''}`}
                                            style={{backgroundColor:'white'}}
                                            onClick={() => setUserType('admin')}
                                        >
                                            Staff Login
                                        </button>
                                    </li>
                                </ul>

                                {userType === 'patient' ? (
                                    <div className="patient-section animate-fade-in">
                                        <h5 className="text-secondary mb-3 text-center">Book Your Appointment</h5>
                                        {bookingSuccess && (
                                            <div className="alert alert-success" role="alert">
                                                Appointment booked successfully! We will contact you shortly.
                                            </div>
                                        )}
                                        <form onSubmit={handleAppointmentSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Patient Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter full name"
                                                    name="patientName"
                                                    required
                                                    value={appointmentData.patientName}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Phone Number</label>
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            placeholder="Enter phone"
                                                            name="phone"
                                                            required
                                                            value={appointmentData.phone}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <label className="form-label">Age</label>
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            placeholder="Age"
                                                            name="age"
                                                            required
                                                            value={appointmentData.age}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3">
                                                        <label className="form-label">Gender</label>
                                                        <select
                                                            className="form-select"
                                                            name="gender"
                                                            value={appointmentData.gender}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Select Doctor</label>
                                                <select
                                                    className="form-select"
                                                    name="doctor"
                                                    value={appointmentData.doctor}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">-- Select Specialist --</option>
                                                    <option value="Cardiology">Dr. Sharma (Cardiology)</option>
                                                    <option value="Orthopedic">Dr. Patel (Orthopedics)</option>
                                                    <option value="General">Dr. Singh (General Physician)</option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Preferred Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    name="date"
                                                    required
                                                    value={appointmentData.date}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold text-uppercase rounded-pill shadow-sm">
                                                Book Appointment
                                            </button>
                                        </form>
                                    </div>
                                ) : userType === 'hospital' ? (
                                    <div className="hospital-section animate-fade-in text-center">
                                        <h5 className="text-secondary mb-4">Hospital Information</h5>
                                        <div className="p-4 bg-light rounded text-start">
                                            <h4 className="text-primary fw-bold mb-3">{hospitalData.name}</h4>
                                            <div className="mb-3">
                                                <small className="text-muted text-uppercase fw-bold d-block mb-1">Address</small>
                                                <p className="mb-0">{hospitalData.address}</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <small className="text-muted text-uppercase fw-bold d-block mb-1">Contact</small>
                                                    <p className="mb-0">{hospitalData.phone}</p>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <small className="text-muted text-uppercase fw-bold d-block mb-1">Branch</small>
                                                    <p className="mb-0">{hospitalData.branch}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : userType === 'doctor' ? (
                                    <div className="doctor-section animate-fade-in text-center">
                                        <h5 className="text-secondary mb-4">Our Specialists</h5>
                                        <div className="list-group text-start">
                                            {doctorData.map(doc => (
                                                <div key={doc.id} className="list-group-item list-group-item-action border-0 mb-2 shadow-sm rounded">
                                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                                        <h6 className="mb-1 fw-bold text-primary">{doc.name}</h6>
                                                        <small className="text-white bg-info px-2 py-1 rounded-pill">{doc.specialization}</small>
                                                    </div>
                                                    <p className="mb-1 small text-muted">{doc.department}</p>
                                                    <small className="text-success"><i className="bi bi-clock me-1"></i>{doc.timings}</small>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="admin-section animate-fade-in">
                                        <h5 className="text-secondary mb-3 text-center">Staff & Admin Access</h5>
                                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                        <form onSubmit={handleAdminLogin}>
                                            <div className="mb-3">
                                                <label className="form-label">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-dark w-100 py-2 fw-bold rounded-pill shadow-sm">
                                                Login to Dashboard
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                            <div className="card-footer text-center bg-light py-3 border-0">
                                <small className="text-muted">&copy; 2026 Sterling Hospital Management System</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
