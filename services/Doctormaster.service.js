import mongoose from "mongoose"
import Doctormaster from "../models/Doctormaster.model.js"

async function getAll() {
    const data = await Doctormaster.find() 
    return data
}

async function getById(_id){
    const data = await Doctormaster.findById(_id)
    if(!data){
        return 0
    }
    return(data)
}

async function insert(formData){
    try{

        const doc = new Doctormaster(formData)

        await doc.validate()
        await doc.save()

        return(doc)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id,formData){
    try{
        const editDoctor = await Doctormaster.findByIdAndUpdate(id,formData,{new:true})
        if(!editDoctor){
            return 0
        }
        return(editDoctor)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id){
    try{
        const DeletedDoctor = await Doctormaster.findByIdAndDelete(id)

        if(!DeletedDoctor){
            return 0
        }

        return (DeletedDoctor)
    }catch(err){
        console.log("Error : ",err)
    }
}

export {getAll,getById,insert,update,deleteById}
