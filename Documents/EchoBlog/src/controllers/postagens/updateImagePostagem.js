import formidable from "formidable";
import fs, { writeFile, readFile, copyFile } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Postagem from "../../models/Postagem.js";

const updateImagemPostagem = async (req, res) => {
  const { postagem_id } = req.params;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const form = formidable({});
  let fields;
  let files;

  try {
    const postagem = await Postagem.findByPk(postagem_id);

    if (!postagem) {
      return res.status(500).json({ message: "Postagem não existe" });
    }

    [fields, files] = await form.parse(req);

    const caminhoImagem = path.join(
      __dirname,
      "../../../public/images",
      postagem_id + ".png"
    );

    copyFile(files.imagemDePerfil[0].filepath, caminhoImagem, async (err) => {
      if (err) {
        console.log("err: ", err);
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "Não é possivel salvar a imagem" })
        );
        return;
      }

      const updatedImage = {
        imagem: caminhoImagem,
      };

      const [linhasPostagens] = await Postagem.update(updatedImage, {
        where: { postagem_id: postagem_id },
      });

      if (linhasPostagens <= 0) {
        return res.status(404).json({ message: "Postagem não encontrada" });
      }

      res.status(201).json({ message: "Imagem adicionada com sucesso" });
    });
  } catch (error) {
    console.error("[CONTROLLER] [POSTAGEM] [UPDATE IMAGE] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default updateImagemPostagem;
