import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/Diagomaster.service.js'
const RouterDiagnosis = express.Router()

RouterDiagnosis.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterDiagnosis.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterDiagnosis.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterDiagnosis.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterDiagnosis.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterDiagnosis