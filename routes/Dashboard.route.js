import express from 'express'
import {getPatients,getDoctors,insert,update,deleteById} from '../services/Dashboard.service.js'
const RouterDashboard = express.Router()

RouterDashboard.get('/patients',async (req,res)=>{
    const data = await getPatients()
    res.send("Total number of patients : "+data)
})

RouterDashboard.get('/doctors',async (req,res)=>{
    const data = await getDoctors(req.params.id)
    res.send("Total Doctors : "+data)
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
