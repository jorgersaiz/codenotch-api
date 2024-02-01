let user = null;

function welcome (req, res) {
    res.send('Bienvenido a nuestro servidor!')
}

function getUser(req, res) {

    let response;

    if(user) {
        response = user;
    } else {
        response = { error: true, code: 200, message: 'No existe el usuario' }
    }
    res.send(response)
}

function getUserParams(req, res) {

    let response;

    if(user) {
        if(user.name === req.params.name) {
            response = user; 
        } else {
            response = { error: true, code: 200, message: `No existe un usuario con el nombre: ${req.params.name}` }
        }
        
    } else {
        response = { error: true, code: 200, message: 'No existe el usuario' }
    }
    res.send(response)
}

function getUserQuery(req, res) {

    let response;

    if(user) {
        if(user.name === req.query.name) {
            response = user; 
        } else {
            response = { error: true, code: 200, message: `No existe un usuario con el nombre: ${req.query.name}` }
        }
    } else {
        response = { error: true, code: 200, message: 'No existe el usuario' }
    }
    res.send(response)
}

function createUser (req, res) {

    let response;

    if (!user) {
        user = req.body;
        response = { error: false, code: 200, message: 'Usuario creado correctamente', user }
    } else {
        response = { error: true, code: 200, message: 'El usuario ya existe' }
    }

    res.send(response)
}

function updateUser (req, res) {

    let response;

    if (user) {
        user = {
            ...user,
            ...req.body ?? {}
        }

        response = { error: false, code: 200, message: 'Usuario modificado correctamente', user }
    } else {
        response = { error: true, code: 200, message: 'El usuario no existe' }
    }

    res.send(response)
}

function deleteUser (req, res) {

    let response;

    if (user) {
        user = null;
        response = { error: false, code: 200, message: 'Usuario eliminado correctamente' }
    } else {
        response = { error: true, code: 200, message: 'El usuario no existe' }
    }

    res.send(response)
}

module.exports = {welcome, getUser, createUser, updateUser, deleteUser, getUserParams, getUserQuery}