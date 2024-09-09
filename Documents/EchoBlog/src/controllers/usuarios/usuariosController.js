import createUsuario from "./createUsuario.js"
import loginUsuario from "./loginUsuario.js"
import updateUsuario from "./updateUsuario.js"
import getAllUsuarios from "./getAllUsuarios.js"
import deleteUsuario from "./deleteUsuario.js"
import alterPapelUsuario from "./alterPapelUsuario.js"

const usuariosController = {
    create: createUsuario,
    update: updateUsuario,
    login: loginUsuario,
    getAll: getAllUsuarios,
    delete: deleteUsuario,
    alterPapel: alterPapelUsuario
}

export default usuariosController