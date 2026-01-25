import express from 'express'
import { getAll,getById,insert,update,deleteById } from '../services/OPDEntry.service.js'
const RouterOPDEntery = express.Router()

RouterOPDEntery.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterOPDEntery.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterOPDEntery.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterOPDEntery.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterOPDEntery.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})


export default RouterOPDEntery