import Postagem from "../../models/Postagem.js";

const deletePostagem = async (req, res) => {
    const { postagem_id } = req.params

    try {
        const postagem = await Postagem.destroy({where: { postagem_id: postagem_id }})

        if(!postagem) {
            return res.status(404).json({ message: "Postagem não encontrada" })
        }

        res.json({ message: "Postagem deletada com sucesso" })
    } catch (error) {
        console.error("[CONTROLLER] [POSTAGEM] [DELETE] Error: " + error);
        res.status(500).json({ message: "Error interno" });
    }
}

export default deletePostagem