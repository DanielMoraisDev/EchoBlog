import conn from "../config/conn.js";
import { DataTypes } from "sequelize";
import Usuario from "./Usuario.js";
import Postagem from "./Postagem.js";

const table_mysql = "comentarios";

const Comentario = conn.define(
  table_mysql,
  {
    comentario_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      required: true,
    },
    conteudo: {
      type: DataTypes.STRING(255),
      required: true,
      allowNull: false,
    },
    usuario_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    tableName: table_mysql,
  }
);

Usuario.belongsToMany(Postagem, { through: "comentarios" })
Postagem.belongsToMany(Usuario, { through: "comentarios" })

export default Comentario;
