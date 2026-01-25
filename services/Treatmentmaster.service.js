async function getAll() {
    return `GetAll from service from TreatmentMaster`
}

async function getById(id){
    return `GetById  from service TreatmentMaster ${id}`
}

async function insert(id){
    return `insert is called  from service TreatmentMaster ${id}`
}

async function update(id){
    return `update is called  from service TreatmentMaster ${id}`
}

async function deleteById(id){
    return `delete is called  from service TreatmentMaster ${id}`
}

export {getAll,getById,insert,update,deleteById}