import mongoose from "mongoose"
import Subtreatment from "../models/SubTreatment.model.js"

// import { GetAll,GetById,Insert,Delete,Update } from "../models/SubTreatment.model.js"

async function getAll() {
    const data = await Subtreatment.find()
    return data
}

async function getById(id) {
     const data = await Subtreatment.findById(id)
    return(data)
}

async function insert(formData) {
    try{

        const subtre = new Subtreatment(formData)

        await subtre.validate()
        await subtre.save()

        return(subtre)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id,formData) {
    try{
        const editSubTre = await Subtreatment.findByIdAndUpdate(id,formData,{new:true})
        if(!editSubTre){
            return 0
        }
        return(editSubTre)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id) {
    try{
        const DeletedSubTre = await Subtreatment.findByIdAndDelete(id)

        if(!DeletedSubTre){
            return 0
        }

        return (DeletedSubTre)
    }catch(err){
        console.log("Error : ",err)
    }
}

export { getAll, getById, insert, update, deleteById }
