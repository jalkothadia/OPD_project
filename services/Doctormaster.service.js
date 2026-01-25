async function getAll() {
    return `GetAll from service from Doctor Master`
}

async function getById(id){
    return `GetById  from service Doctor Master ${id}`
}

async function insert(id){
    return `insert is called  from service Doctor Master ${id}`
}

async function update(id){
    return `update is called  from service Doctor Master ${id}`
}

async function deleteById(id){
    return `delete is called  from service Doctor Master ${id}`
}

export {getAll,getById,insert,update,deleteById}