import { DataTypes, UUID } from "sequelize";
import conn from "../config/conn.js";
import Perfil from "./perfilModel.js";

const Postagem = conn.define(
  "postagens",
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },x
  },
  {
    tableName: "postagens",
  } 
);

Perfil.hasMany(Postagem)
Postagem.belongsTo(Perfil)

export default Postagem
