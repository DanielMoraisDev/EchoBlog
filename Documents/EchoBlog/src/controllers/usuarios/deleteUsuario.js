import Usuario from "../../models/Usuario.js";

const deleteUsuario = async (req, res) => {
    const { usuario_id } = req.params

    try {
        const usuario = await Usuario.destroy({where: { usuario_id: usuario_id }})

        if(!usuario) {
            return res.status(404).json({ message: "Usuario não encontrado" })
        }

        res.json({ message: "Usuario deletado com sucesso" })
    } catch (error) {
        console.error("[CONTROLLER] [USUARIO] [DELETE] Error: " + error);
        res.status(500).json({ message: "Error interno" });
    }
}

export default deleteUsuario