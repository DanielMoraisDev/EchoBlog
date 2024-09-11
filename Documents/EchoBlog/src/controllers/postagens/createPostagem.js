import formidable from "formidable";
import fs, { writeFile, readFile, copyFile } from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import jwt from "jsonwebtoken";
import Postagem from "../../models/Postagem.js";

const createPostagem = async (req, res) => {
  const { titulo, conteudo, dataPublicacao, autor, imagem } = req.body;

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const form = formidable({});
  let fields;
  let files;

  const postagem = {
    titulo,
    conteudo,
    dataPublicacao,
    autor,
    imagem,
  };

  jwt.verify(token, process.env.JWT_PASSWORD, async (err, decoded) => {
    if (err) return res.send(err);
    req.user = decoded;

    postagem.autor = decoded.nome;

    [fields, files] = await form.parse(req);

    console.log(fields);

    const caminhoImagem = path.join(
      __dirname,
      "../../../public/images",
      decoded.id + ".png"
    );

    console.log("oi");
    copyFile(files.imagemDePerfil[0].filepath, caminhoImagem, async (err) => {
      if (err) {
        console.log("err: ", err);
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(
          JSON.stringify({ message: "Não é possivel salvar a imagem" })
        );
        return;
      }

      postagem.imagem = "null";

      if (files.imagemDePerfil[0].filepath) {
        postagem.imagem = caminhoImagem;
      }
    });
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
