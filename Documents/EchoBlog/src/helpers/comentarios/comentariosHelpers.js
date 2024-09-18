import validationComentario from "./validation-comentario.js";
import validationIDComentario from "./validation-id-comentarios.js";


const comentariosHelpers = {
    validation: validationComentario,
    validationID: validationIDComentario,
    validationUpdate: validationComentarioUpdate,
}

export default comentariosHelpers