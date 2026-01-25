import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/PatientRegistrarion.service.js'
const RouterPatientRegistrarion = express.Router()

RouterPatientRegistrarion.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterPatientRegistrarion.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterPatientRegistrarion.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterPatientRegistrarion.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterPatientRegistrarion.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterPatientRegistrarion