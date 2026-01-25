import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/Doctorcunsultant.service.js'
const RouterDoctorConsultant = express.Router()

RouterDoctorConsultant.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterDoctorConsultant.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterDoctorConsultant.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterDoctorConsultant.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterDoctorConsultant.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterDoctorConsultant