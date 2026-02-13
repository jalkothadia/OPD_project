import mongoose from "mongoose"
import patients from '../models/PatientRegistration.model.js'
// import { GetAll,GetById,Insert,Delete,Update } from "../models/PatientRegistration.model.js"

async function getAll() {
    const data = await patients.find() 
    if(data){
        return{
            error : false,
            data,
            message : "data fetched success"
        }
    }
    else{
        return{
            error : true,
            message : "Error occured"
        }
    }
}

async function getById(id){
    const data = await patients.findById(id)
    return(data)
}

async function insert(formData){
    try{

        const newpatient = new patients(formData)

        await newpatient.validate()
        await newpatient.save()

        return(newpatient)
    }catch(err){
        console.log("Insert err" , err)
    }
}

async function update(id, formData){
    try{
        const editPatient = await patients.findByIdAndUpdate(id,formData,{new:true})
        if(!editPatient){
            return 0
        }
        return(editPatient)
    }catch(err){
        console.log("Edit Error : ",err)
    }
}

async function deleteById(id){
    try{
        const DeletedPatient = await patients.findByIdAndDelete(id)

        if(!DeletedPatient){
            return 0
        }

        return (DeletedPatient)
    }catch(err){
        console.log("Error : ",err)
    }
}

export {getAll,getById,insert,update,deleteById}
