async function getAll() {
    return `GetAll from service from Diagonsis`
}

async function getById(id){
    return `GetById  from service Diagonsis ${id}`
}

async function insert(id){
    return `insert is called  from service Diagonsis ${id}`
}

async function update(id){
    return `update is called  from service Diagonsis ${id}`
}

async function deleteById(id){
    return `delete is called  from service Diagonsis ${id}`
}

export {getAll,getById,insert,update,deleteById}