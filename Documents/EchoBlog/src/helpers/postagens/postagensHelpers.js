import validationPostagem from "./validation-postagem.js";
import validationIDPostagem from "./validation-id-postagens.js";
import validatePaper from "./create-postagem-verify.js";

const postagensHelpers = {
    validation: validationPostagem,
    validationID: validationIDPostagem,
    validateCreatePostagem: validatePaper
}

export default postagensHelpers