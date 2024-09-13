import Postagem from "../../models/Postagem.js";

const updateImagemPostagem = async (req, res) => {
  const { postagem_id } = req.params;

  try {
    const postagem = await Postagem.findByPk(postagem_id);

    if (!postagem) {
      return res.status(500).json({ message: "Postagem não existe" });
    }

    const imagem = req.file.path

    const updatedImage = {
      imagem,
    };

    const [linhasPostagens] = await Postagem.update(updatedImage, {
      where: { postagem_id: postagem_id },
    });

    if (linhasPostagens <= 0) {
      return res.status(404).json({ message: "Postagem não encontrada" });
    }

    res.status(201).json({ message: "Imagem adicionada com sucesso" });
  } catch (error) {
    console.error("[CONTROLLER] [POSTAGEM] [UPDATE IMAGE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default updateImagemPostagem;
