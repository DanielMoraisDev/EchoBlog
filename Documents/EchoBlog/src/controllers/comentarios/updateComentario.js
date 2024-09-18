import Comentario from "../../models/Comentario.js";
import Usuario from "../../models/Usuario.js";

const updateComentario = async (req, res) => {
  const { comentario_id } = req.params;

  const { titulo, conteudo, usuario_id } = req.body;

  const updatedComentario = {
    titulo,
    conteudo,
    usuario_id,
  };

  try {
    const verifyIfUsuarioExist = await Usuario.findOne({
      where: { usuario_id: usuario_id },
    });

    if (!verifyIfUsuarioExist) {
      return res.status(404).json({ message: "Usuario não encontrada" });
    }

    const [linhasPostagens] = await Comentario.update(updatedComentario, {
      where: { comentario_id: comentario_id },
    });

    if (linhasPostagens <= 0) {
      return res.status(404).json({ message: "Comentario não encontrada" });
    }

    res.status(201).json({ message: "Comentario atualizado com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [COMENTARIO] [UPDATE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default updateComentario;