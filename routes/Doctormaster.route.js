import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/Doctormaster.service.js'
const RouterDoctorMaster = express.Router()

RouterDoctorMaster.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterDoctorMaster.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterDoctorMaster.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterDoctorMaster.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterDoctorMaster.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterDoctorMaster