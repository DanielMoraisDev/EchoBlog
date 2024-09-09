import Usuario from "../../models/Usuario.js";

const updateUsuario = async (req, res) => {
  const { usuario_id } = req.params;

  const { nome, email, senha, autor } = req.body;

  const usuarioToUpdate = {
    nome,
    email,
    senha,
    autor,
  };

  try {
    const verifyUsuario = await Usuario.update(usuarioToUpdate, {
      where: { usuario_id: usuario_id },
    });

    if (!verifyUsuario) {
      return res.status(500).json({ message: "O usuário não existe" });
    }

    res.json({ message: "Usuário atualizado" });
  } catch (error) {
    console.error("[CONTROLLER] [USUARIOS] [UPDATE] Error: " + error);
  }
};

export default updateUsuario;
