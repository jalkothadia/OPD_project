import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/Treatmentmaster.service.js'
const RouterTreatmentMaster = express.Router()

RouterTreatmentMaster.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterTreatmentMaster.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterTreatmentMaster.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterTreatmentMaster.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterTreatmentMaster.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})
export default RouterTreatmentMaster