import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/Treatmentmaster.service.js'
const RouterTreatmentMaster = express.Router()

RouterTreatmentMaster.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterTreatmentMaster.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    if(data == 0){
        res.status(404).json({message:'Doctor not exists'})
    }
    res.send(data)
})

RouterTreatmentMaster.post('/add',async (req,res)=>{
    const data = await insert(req.body)

    res.status(201).json({
        error:'false',
        data,
        message:'new doctor added'
    })
})

RouterTreatmentMaster.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id,req.body)
    if(data == 0){
        res.status(404).json({message:'Doctor not found'})
    }
    res.send(data)
})

RouterTreatmentMaster.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)

    if(data == 0){
        res.status(404).json({message:'cannot find doctor'})
    }
    res.send(data)
})
export default RouterTreatmentMaster
