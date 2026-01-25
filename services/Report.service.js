async function getAll() {
    return `GetAll from service from Report`
}

async function getById(id){
    return `GetById  from service Report ${id}`
}

async function insert(id){
    return `insert is called  from service Report ${id}`
}

async function update(id){
    return `update is called  from service Report ${id}`
}

async function deleteById(id){
    return `delete is called  from service Report ${id}`
}

export {getAll,getById,insert,update,deleteById}