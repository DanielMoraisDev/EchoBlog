import createPostagem from "./createPostagem.js"
import deletePostagem from "./deletePostagem.js"
import getAllPostagens from "./getAllPostagens.js"
import getOnePostagem from "./getOnePostagem.js"
import updatePostagem from "./updatePostagem.js"
import updateImagemPostagem from "./updateImagePostagem.js"

const postagensController = {
    create: createPostagem,
    getAll: getAllPostagens,
    getOne: getOnePostagem,
    update: updatePostagem,
    delete: deletePostagem,
    updateImage: updateImagemPostagem
}

export default postagensController