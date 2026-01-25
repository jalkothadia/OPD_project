import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/SubTreatment.service.js'
const RouterSubTreatment = express.Router()

RouterSubTreatment.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterSubTreatment.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterSubTreatment.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterSubTreatment.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterSubTreatment.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterSubTreatment