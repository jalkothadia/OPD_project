import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/Diagomaster.service.js'
const RouterDiagnosis = express.Router()

RouterDiagnosis.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterDiagnosis.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    if(data == 0){
        res.status(404).json({message:'Doctor not exists'})
    }
    res.send(data)
})

RouterDiagnosis.post('/add',async (req,res)=>{
    const data = await insert(req.body)

    res.status(201).json({
        error:'false',
        data,
        message:'new doctor added'
    })
})

RouterDiagnosis.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id,req.body)
    if(data == 0){
        res.status(404).json({message:'Doctor not found'})
    }
    res.send(data)
})

RouterDiagnosis.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)

    if(data == 0){
        res.status(404).json({message:'cannot find doctor'})
    }
    res.send(data)
})

export default RouterDiagnosis
