import { and } from "sequelize";
import Postagem from "../../models/Postagem.js";
import Usuario from "../../models/Usuario.js";

const getAllPostagens = async (req, res) => {
  console.log(req.query.autor)
  if (req.query.autor) {
    const usuario = await Usuario.findOne({ where: { usuario_id: req.query.autor } })
    
    if (!usuario) {
      return res.status(500).json({ message: "Usuario não existe" })
    }

    const postagem = await Postagem.findOne({ where: { autor: usuario.nome } })

    if (!postagem) {
      return res.status(500).json({ message: "Autor não existe" })
    }

    return res.json({ message: postagem })
  }

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const postagens = await Postagem.findAndCountAll({
      limit,
      offset,
    });

    const totalPaginas = Math.ceil(postagens.count / limit);

    res.json({
      totalPostagens: postagens.count,
      totalPaginas,
      itemsPorPagina: limit,
      paginaAtual: page,
      postagens: postagens.rows,
      proximaPagina:
        totalPaginas === 0
          ? null
          : `http://localhost/${process.env.PORT}/postagens?page=${page + 1}`,
      paginaAnterior:
        totalPaginas === 0
          ? null
          : `http://localhost/${process.env.PORT}/postagens?page=${page - 1}`,
    });
  } catch (error) {
    console.error("[CONTROLLER] [POSTAGEM] [GET ALL] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default getAllPostagens;
