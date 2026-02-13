import express from 'express'
import { getAll , getById,insert,update,deleteById} from '../services/Hospitalmaster.service.js'
const RouterHospitalMaster = express.Router()

RouterHospitalMaster.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterHospitalMaster.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    if(data == 0){
        res.status(404).json({message:'Doctor not exists'})
    }
    res.send(data)
})

RouterHospitalMaster.post('/add',async (req,res)=>{
    const data = await insert(req.body)

    res.status(201).json({
        error:'false',
        data,
        message:'new doctor added'
    })
})

RouterHospitalMaster.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id,req.body)
    if(data == 0){
        res.status(404).json({message:'Doctor not found'})
    }
    res.send(data)
})

RouterHospitalMaster.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)

    if(data == 0){
        res.status(404).json({message:'cannot find doctor'})
    }
    res.send(data)
})

export default RouterHospitalMaster
