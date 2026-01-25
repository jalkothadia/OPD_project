async function getAll() {
    return `GetAll from service from Diagonsis`
}

async function getById(id){
    return `GetById  from service Doctor Cunsultant ${id}`
}

async function insert(id){
    return `insert is called  from service Doctor Cunsultant ${id}`
}

async function update(id){
    return `update is called  from service Doctor Cunsultant ${id}`
}

async function deleteById(id){
    return `delete is called  from service Doctor Cunsultant ${id}`
}

export {getAll,getById,insert,update,deleteById}