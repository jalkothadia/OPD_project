async function getAll() {
    return `GetAll from service from SubTreatment`
}

async function getById(id){
    return `GetById  from service SubTreatment ${id}`
}

async function insert(id){
    return `insert is called  from service SubTreatment ${id}`
}

async function update(id){
    return `update is called  from service SubTreatment ${id}`
}

async function deleteById(id){
    return `delete is called  from service SubTreatment ${id}`
}

export {getAll,getById,insert,update,deleteById}