import express from 'express'
import { getAll , getById,insert,update,deleteById} from '../services/Hospitalmaster.service.js'
const RouterHospitalMaster = express.Router()

RouterHospitalMaster.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterHospitalMaster.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterHospitalMaster.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterHospitalMaster.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterHospitalMaster.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterHospitalMaster