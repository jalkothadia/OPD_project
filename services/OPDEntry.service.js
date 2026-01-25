async function getAll() {
    return `GetAll from service from OPDEntry`
}

async function getById(id){
    return `GetById  from service OPDEntry ${id}`
}

async function insert(id){
    return `insert is called  from service OPDEntry ${id}`
}

async function update(id){
    return `update is called  from service OPDEntry ${id}`
}

async function deleteById(id){
    return `delete is called  from service OPDEntry ${id}`
}

export {getAll,getById,insert,update,deleteById}