import mongoose from "mongoose"
import OPD from '../models/OPDEntery.model.js'
// import { GetAll,GetById,Insert,Update,Delete } from "../models/OPDEntery.model.js"

async function getAll() {
    const data = await OPD.find() 
    return data
}

async function getById(id){
    const data = await OPD.findById(id)
    return(data)
}

async function insert(formData){
    try{

        const opd = new OPD(formData)

        await opd.validate()
        await opd.save()

        return(opd)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id,formData){
    try{
        const editOPD = await OPD.findByIdAndUpdate(id,formData,{new:true})
        if(!editOPD){
            return 0
        }
        return(editOPD)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id){
    try{
        const DeletedOPD = await OPD.findByIdAndDelete(id)

        if(!DeletedOPD){
            return 0
        }

        return (DeletedOPD)
    }catch(err){
        console.log("Error : ",err)
    }
}

export {getAll,getById,insert,update,deleteById}
