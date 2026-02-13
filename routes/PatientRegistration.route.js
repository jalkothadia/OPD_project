import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/PatientRegistrarion.service.js'
const RouterPatientRegistrarion = express.Router()

RouterPatientRegistrarion.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterPatientRegistrarion.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    if(data == 0){
        res.status(404).json({message:'Patient not exists'})
    }
    res.send(data)
})

RouterPatientRegistrarion.post('/add',async (req,res)=>{
    const data = await insert(req.body)

    res.status(201).json({
        error:'false',
        data,
        message:'new doctor added'
    })
})

RouterPatientRegistrarion.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id,req.body)
    if(data == 0){
        res.status(404).json({message:'Patient not found'})
    }
    res.send(data)
})

RouterPatientRegistrarion.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)

    if(data == 0){
        res.status(404).json({message:'cannot find Patient'})
    }
    res.send(data)
})

export default RouterPatientRegistrarion
