import mongoose from "mongoose"
import Treatment from '../models/Treatment.model.js'

// import { GetAll,GetById,Insert,Update,Delete } from "../models/Treatment.model.js"

async function getAll() {
   const data = await Treatment.find()
    return data
}

async function getById(id){
    const data = await Treatment.findById(id)
    return(data)
}

async function insert(formData){
   try{

        const tre = new Treatment(formData)

        await tre.validate()
        await tre.save()

        return(tre)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id ,formData){
    try{
        const editTreatment = await Treatment.findByIdAndUpdate(id,formData,{new:true})
        if(!editTreatment){
            return 0
        }
        return(editTreatment)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id){
    try{
        const DeletedTreatment = await Treatment.findByIdAndDelete(id)

        if(!DeletedTreatment){
            return 0
        }

        return (DeletedTreatment)
    }catch(err){
        console.log("Error : ",err)
    }
}

export {getAll,getById,insert,update,deleteById}
