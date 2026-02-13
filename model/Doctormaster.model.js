import mongoose from 'mongoose'

const DocmasterSchema = new mongoose.Schema({
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
    {collection:'doctors'}
)


const Doctormaster = mongoose.model('Doctormaster',DocmasterSchema)


export default Doctormaster