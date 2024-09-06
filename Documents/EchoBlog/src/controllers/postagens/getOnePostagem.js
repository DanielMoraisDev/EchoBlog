import Postagem from "../../models/Postagem.js";

const getOnePostagem = async (req, res) => {
    const { postagem_id } = req.params

    try {
        const postagem = await Postagem.findByPk(postagem_id)

        if(!postagem) {
            return res.status(404).json({ message: "Postagem não encontrada" })
        }

        res.json({ message: postagem })
    } catch (error) {
        console.error("[CONTROLLER] [POSTAGEM] [GET ONE] Error: " + error);
        res.status(500).json({ message: "Error interno" });
    }
}

export default getOnePostagem