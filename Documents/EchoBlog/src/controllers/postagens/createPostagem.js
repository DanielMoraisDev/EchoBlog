import jwt from "jsonwebtoken";
import Postagem from "../../models/Postagem.js";

const createPostagem = async (req, res) => {
  const { titulo, conteudo, dataPublicacao, autor } = req.body;
  const imagem = req.file.path

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const postagem = {
    titulo,
    conteudo,
    dataPublicacao,
    autor,
    imagem
  };

  jwt.verify(token, process.env.JWT_PASSWORD, async (err, decoded) => {
    if (err) return res.send(err);
    req.user = decoded;

    postagem.autor = decoded.nome;
    
  });

  try {
    await Postagem.create(postagem);

    return res.status(201).json({ message: "Postagem criada com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [POSTAGEM] [CREATE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default createPostagem;
