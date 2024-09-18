import { and } from "sequelize";
import Comentario from "../../models/Comentario.js";
import Usuario from "../../models/Usuario.js";

const getAllComentarios = async (req, res) => {
  console.log(req.query.autor)
  if (req.query.autor) {
    const usuario = await Usuario.findOne({ where: { usuario_id: req.query.autor } })
    
    if (!usuario) {
      return res.status(500).json({ message: "Usuario não existe" })
    }

    const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

    const comentarios = await Comentario.findAndCountAll({
      limit,
      offset,
      where: { autor: usuario.nome } 
    });

    if (!comentarios) {
      return res.status(500).json({ message: "Autor não existe" })
    }

    const totalPaginas = Math.ceil(comentarios.count / limit);

    return res.json({
      totalComentarios: comentarios.count,
      totalPaginas,
      itemsPorPagina: limit,
      paginaAtual: page,
      comentarios: comentarios.rows,
      proximaPagina:
        totalPaginas === 0
          ? null
          : `http://localhost/${process.env.PORT}/comentarios?page=${page + 1}`,
      paginaAnterior:
        totalPaginas === 0
          ? null
          : `http://localhost/${process.env.PORT}/comentarios?page=${page - 1}`,
    })
  }

  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    const comentarios = await Comentario.findAndCountAll({
      limit,
      offset,
    });

    const totalPaginas = Math.ceil(comentarios.count / limit);

    res.json({
      totalComentarios: comentarios.count,
      totalPaginas,
      itemsPorPagina: limit,
      paginaAtual: page,
      comentarios: comentarios.rows,
      proximaPagina:
        totalPaginas === 0
          ? null
          : `http://localhost/${process.env.PORT}/comentarios?page=${page + 1}`,
      paginaAnterior:
        totalPaginas === 0
          ? null
          : `http://localhost/${process.env.PORT}/comentarios?page=${page - 1}`,
    });
  } catch (error) {
    console.error("[CONTROLLER] [COMENTARIO] [GET ALL] Error: " + error);
    res.status(500).json({ message: "Error interno" });
  }
};

export default getAllComentarios;
