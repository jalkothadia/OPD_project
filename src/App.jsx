import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import HospitalMaster from './pages/HospitalMaster';
import DoctorMaster from './pages/DoctorMaster';
import DiagnosisMaster from './pages/DiagnosisMaster';
import TreatmentMaster from './pages/TreatmentMaster';
import SubTreatmentMaster from './pages/SubTreatmentMaster';
import PatientRegistration from './pages/PatientRegistration';
import OPDEntry from './pages/OPDEntry';
import DoctorConsultation from './pages/DoctorConsultation';
import ReceiptEntry from './pages/ReceiptEntry';
import Reports from './pages/Reports';
import './styles/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simple Auth Wrapper
const RequireAuth = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="hospital" element={<HospitalMaster />} />
            <Route path="doctor" element={<DoctorMaster />} />
            <Route path="diagnosis" element={<DiagnosisMaster />} />
            <Route path="treatment" element={<TreatmentMaster />} />
            <Route path="sub-treatment" element={<SubTreatmentMaster />} />
            <Route path="patient" element={<PatientRegistration />} />
            <Route path="opd" element={<OPDEntry />} />
            <Route path="consultation" element={<DoctorConsultation />} />
            <Route path="receipt" element={<ReceiptEntry />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
