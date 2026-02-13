import mongoose from "mongoose"
import Login from "../models/Login.model.js"

async function insert(id){
    const data = Login.find()
    return data
}


export {insert}
