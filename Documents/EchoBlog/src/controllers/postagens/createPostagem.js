import Postagem from "../../models/Postagem.js";

const createPostagem = async (req, res) => {
  const { titulo, conteudo, dataPublicacao, autor, imagem } = req.body;

  const postagem = {
    titulo,
    conteudo,
    dataPublicacao,
    autor,
    imagem,
  };

  try {
    await Postagem.create(postagem);

    res.status(201).json({ message: "Postagem criada com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [POSTAGEM] [CREATE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default createPostagem;
