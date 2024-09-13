import Postagem from "../../models/Postagem.js";

const updatePostagem = async (req, res) => {
  const { postagem_id } = req.params;

  const { titulo, conteudo, dataPublicacao, autor } = req.body;
  const imagem  = req.file.path

  const updatedPostagem = {
    titulo,
    conteudo,
    dataPublicacao,
    autor,
    imagem,
  };

  try {
    const [linhasPostagens] = await Postagem.update(updatedPostagem, {
      where: { postagem_id: postagem_id },
    });

    if(linhasPostagens <= 0) {
        return res.status(404).json({ message: "Postagem não encontrada" })
    }

    res.status(201).json({ message: "Postagem atualizado com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [POSTAGEM] [UPDATE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default updatePostagem;
