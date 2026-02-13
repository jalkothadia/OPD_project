import mongoose from 'mongoose'

const ReportSchema = new mongoose.Schema({
    id : Number,
    code : String,
    age : Number,
})

const Report = mongoose.model('Report',ReportSchema);

export default Report