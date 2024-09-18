import createComentario from "./createComentario.js"
import deleteComentario from "./deleteComentario.js"
import getAllComentarios from "./getAllComentarios.js"
import getOneComentario from "./getOneComentario.js"
import updateComentario from "./updateComentario.js"

const comentariosController = {
    create: createComentario,
    getAll: getAllComentarios,
    getOne: getOneComentario,
    update: updateComentario,
    delete: deleteComentario
}

export default comentariosController