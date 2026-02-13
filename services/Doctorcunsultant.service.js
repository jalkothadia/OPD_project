import mongoose from "mongoose"
import Doctorconsultant from "../models/Doctorconsultant.model.js"

// import { GetAll,GetById,Insert,Delete,Update } from "../models/Doctorconsultant.model.js"

async function getAll() {
    const data = await Doctorconsultant.find()
    return data
}

async function getById(id){
    const data = await Doctorconsultant.findById(id)
    return(data)
}


async function insert(formData){
    try{

        const hos = new Doctorconsultant(formData)

        await hos.validate()
        await hos.save()

        return(hos)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id, formData){
   try{
        const editHospital = await Doctorconsultant.findByIdAndUpdate(id,formData,{new:true})
        if(!editHospital){
            return 0
        }
        return(editHospital)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id){
   try{
        const DeletedHospital = await Doctorconsultant.findByIdAndDelete(id)

        if(!DeletedHospital){
            return 0
        }

        return (DeletedHospital)
    }catch(err){
        console.log("Error : ",err)
    }
}

export {getAll,getById,insert,update,deleteById}
