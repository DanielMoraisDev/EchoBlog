import Usuario from "../../models/Usuario.js"

const alterPapelUsuario = async (req, res) => {
    const { usuario_id } = req.params

    try {
        const getUsuario = await Usuario.findByPk(usuario_id)

        const status = getUsuario.dataValues.status === "autor" ? 3 : 2

        const updatedUsuario = {
            status
        }

        const [linhasAfetadas] = await Usuario.update(updatedUsuario, { where: { usuario_id: usuario_id } })

        if (linhasAfetadas <= 0) {
            return res.status(404).json({ message: "Usuario não encontrado" })
        }

        req.json({ message: "Papel do usuário atualizado" })
    } catch (error) {
        console.error("[CONTROLLERS] [USUARIO] [ALTER PAPEL] Error: " + error)
    }
}

export default alterPapelUsuario