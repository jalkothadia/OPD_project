import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
    patientName : String,
    patientId : Number,
    patientAge : Number,
})

const Login = mongoose.model('Login',LoginSchema)

export default Login