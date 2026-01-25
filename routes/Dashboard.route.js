import express from 'express'
import {getAll,getById,insert,update,deleteById} from '../services/Dashboard.service.js'
const RouterDashboard = express.Router()

RouterDashboard.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterDashboard.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterDashboard.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterDashboard.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterDashboard.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterDashboard