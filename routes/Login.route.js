import express from 'express'
import { insert } from '../services/Login.service.js'
const RouterLogin = express.Router()


RouterLogin.post('/:id',async (req,res)=>{
    const data = await insert(req.params.id)
    res.send(data)
})



export default RouterLogin
