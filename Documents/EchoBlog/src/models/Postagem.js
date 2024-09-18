import conn from "../config/conn.js";
import { DataTypes } from "sequelize";
import Usuario from "./Usuario.js";

const table_mysql = "postagens";

const Postagem = conn.define(
  table_mysql,
  {
    postagem_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      required: true,
    },
    titulo: {
      type: DataTypes.STRING(255),
      required: true,
      allowNull: false,
    },
    conteudo: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      required: true
    },
    dataPublicacao: {
        type: DataTypes.DATE,
        allowNull: false,
        required: true
    },
    autor: {
        type: DataTypes.STRING(255),
        allowNull: false,
        required: true
    },
    imagem: {
        type: DataTypes.STRING(255),  
        defaultValue: null
    }
  },
  {
    tableName: table_mysql,
  }
);

Usuario.hasMany(Postagem)
Postagem.belongsTo(Usuario)

export default Postagem