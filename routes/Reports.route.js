import express from 'express'
import { getAll ,getById,insert,update,deleteById} from '../services/Report.service.js'
const RouterReports = express.Router()

RouterReports.get('/',async (req,res)=>{
    const data = await getAll()
    res.send(data)
})

RouterReports.get('/:id',async (req,res)=>{
    const data = await getById(req.params.id)
    res.send(data)
})

RouterReports.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})

RouterReports.patch('/:id',async (req,res)=>{
    const data = await update(req.params.id)
    res.send(data)
})

RouterReports.delete('/:id',async (req,res)=>{
    const data = await deleteById(req.params.id)
    res.send(data)
})

export default RouterReports