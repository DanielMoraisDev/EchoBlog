import { DataTypes, UUID } from "sequelize";
import conn from "../config/conn.js";

import Perfil from "./perfilModel.js";
import Postagem from "./postagemModel.js";

const Comentario = conn.define(
  "comentarios",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passssworld: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "comentarios",
  } 
);

// Associação M:N
Perfil.belongsToMany(Postagem, { through: "comentarios" })
Postagem.belongsToMany(Perfil, { through: "comentarios" })

export default Comentario;
