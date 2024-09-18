import jwt from "jsonwebtoken";
import Comentario from "../../models/Comentario.js";

const createComentario = async (req, res) => {
  const { titulo, conteudo, dataPublicacao, autor } = req.body;
  const imagem = req.file.path

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const comentario = {
    titulo,
    conteudo,
    dataPublicacao,
    autor,
    imagem
  };

  jwt.verify(token, process.env.JWT_PASSWORD, async (err, decoded) => {
    if (err) return res.send(err);
    req.user = decoded;

    comentario.autor = decoded.nome;
  });

  try {
    await Comentario.create(comentario);

    return res.status(201).json({ message: "Comentario criada com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [COMENTARIO] [CREATE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default createComentario;
