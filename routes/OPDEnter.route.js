import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/OPDEntry.service.js'
const RouterOPDEntery = express.Router()

RouterOPDEntery.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterOPDEntery.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    if(data == 0){
        res.status(404).json({message:'OPD Entry not exists'})
    }
    res.send(data)
})

RouterOPDEntery.post('/add',async (req,res)=>{
    const data = await insert(req.body)

    res.status(201).json({
        error:'false',
        data,
        message:'new OPD Entry added'
    })
})

RouterOPDEntery.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id,req.body)
    if(data == 0){
        res.status(404).json({message:'OPD Entry not found'})
    }
    res.send(data)
})

RouterOPDEntery.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)

    if(data == 0){
        res.status(404).json({message:'cannot find OPD Entry'})
    }
    res.send(data)
})


export default RouterOPDEntery
