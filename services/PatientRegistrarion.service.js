async function getAll() {
    return `GetAll from service from PatientRegistration`
}

async function getById(id){
    return `GetById  from service PatientRegistration ${id}`
}

async function insert(id){
    return `insert is called  from service PatientRegistration ${id}`
}

async function update(id){
    return `update is called  from service PatientRegistration ${id}`
}

async function deleteById(id){
    return `delete is called  from service PatientRegistration ${id}`
}

export {getAll,getById,insert,update,deleteById}