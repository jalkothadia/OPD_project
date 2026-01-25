import express from 'express'
import RouterDashboard from './routes/Dashboard.route.js'
import RouterDiagnosis from './routes/Diagomaster.route.js'
import RouterDoctorConsultant from './routes/Doctorconsultant.route.js'
import RouterDoctorMaster from './routes/Doctormaster.route.js'
import RouterHospitalMaster from './routes/HospitalMaster.route.js'
import RouterLogin from './routes/Login.route.js'
import RouterOPDEntery from './routes/OPDEnter.route.js'
import RouterPatientRegistrarion from './routes/PatientRegistration.route.js'
import RouterReports from './routes/Reports.route.js'
import RouterSubTreatment from './routes/SubTreatment.route.js'
import RouterTreatmentMaster from './routes/TreatmentMaster.route.js'


const app = express()

app.use(express.json())

app.use('/dashboard',RouterDashboard)
app.use ('/diagonosis',RouterDiagnosis)
app.use('/doctorconsultant',RouterDoctorConsultant)
app.use('/doctormaster',RouterDoctorMaster)
app.use('/hospitalmaster',RouterHospitalMaster)
app.use('/login',RouterLogin)
app.use('/opdentry',RouterOPDEntery)
app.use('/patienregistration',RouterPatientRegistrarion)
app.use('/reports',RouterReports)
app.use('/subtreatment',RouterSubTreatment)
app.use('/treatmentmaster',RouterTreatmentMaster)


app.listen(3000,()=>{
    console.log("server started at localhost 3000")
})