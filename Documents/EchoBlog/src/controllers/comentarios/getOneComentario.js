import Comentario from "../../models/Comentario.js";

const getOneComentario = async (req, res) => {
    const { comentario_id } = req.params

    try {
        const Comentario = await Comentario.findByPk(comentario_id)

        if(!Comentario) {
            return res.status(404).json({ message: "Comentario não encontrada" })
        }

        res.json({ message: Comentario })
    } catch (error) {
        console.error("[CONTROLLER] [COMENTARIO] [GET ONE] Error: " + error);
        res.status(500).json({ message: "Error interno" });
    }
}

export default getOneComentario