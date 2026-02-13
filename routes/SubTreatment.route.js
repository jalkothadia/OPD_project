import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/SubTreatment.service.js'
const RouterSubTreatment = express.Router()

RouterSubTreatment.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterSubTreatment.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    if(data == 0){
        res.status(404).json({message:'SubTreatment not exists'})
    }
    res.send(data)
})

RouterSubTreatment.post('/add',async (req,res)=>{
    const data = await insert(req.body)

    res.status(201).json({
        error:'false',
        data,
        message:'new SubTreatment added'
    })
})

RouterSubTreatment.patch('/:id',async (req,res)=>{
   const data = await update(req.params.id,req.body)
    if(data == 0){
        res.status(404).json({message:'SubTreatment not found'})
    }
    res.send(data)
})

RouterSubTreatment.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)

    if(data == 0){
        res.status(404).json({message:'cannot find Subtreatment'})
    }
    res.send(data)
})

export default RouterSubTreatment
