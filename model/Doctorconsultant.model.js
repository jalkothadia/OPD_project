import mongoose from 'mongoose'

const DocConsultantSchema = new mongoose.Schema({
    doctorId : Number,
    doctorName : String,
    staffId : Number,
    studentId : Number,
    hospitalId : Number,
    description : String,
    userId : Number,
    created : Date,
    modified : Date
},
    {collection:'doctors'})



const Doctorconsultant = mongoose.model('Doctor',DocConsultantSchema)

export default Doctorconsultant