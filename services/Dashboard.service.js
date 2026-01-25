async function getAll() {
    return `GetAll from service`
}

async function getById(id){
    return `GetById  from service ${id}`
}

async function insert(id){
    return `insert is called  from service ${id}`
}

async function update(id){
    return `update is called  from service ${id}`
}

async function deleteById(id){
    return `delete is called  from service ${id}`
}

export {getAll,getById,insert,update,deleteById}