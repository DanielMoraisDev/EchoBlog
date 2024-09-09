import Usuario from "../../models/Usuario.js";

const createUsuario = async (req, res) => {
  const { nome, email, senha, autor, papel } = req.body;

  const usuario = {
    nome,
    email,
    senha,
    autor,
    papel,
  };

  try {
    await Usuario.create(usuario);

    res.status(201).json({ message: "O usuário foi criado com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [USUARIO] [CREATE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default createUsuario;
