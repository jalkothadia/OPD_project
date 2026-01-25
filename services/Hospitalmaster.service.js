async function getAll() {
    return `GetAll from service from Hospital Master`
}

async function getById(id){
    return `GetById  from service Hospital Master ${id}`
}

async function insert(id){
    return `insert is called  from service Hospital Master ${id}`
}

async function update(id){
    return `update is called  from service Hospital Master ${id}`
}

async function deleteById(id){
    return `delete is called  from service Hospital Master ${id}`
}

export {getAll,getById,insert,update,deleteById}