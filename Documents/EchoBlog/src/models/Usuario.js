import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const table_mysql = "usuarios";

const Usuario = conn.define(
  table_mysql,
  {
    usuario_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      required: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      required: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      required: true,
    },
    senha: {
      type: DataTypes.STRING(255),
      required: true,
      allowNull: false,
    },
    papel: {
      type: DataTypes.ENUM,
      values: ["administrador", "autor", "leitor"],
      defaultValue: "leitor",
      allowNull: false,
      required: true,
    },
  },
  {
    tableName: table_mysql,
  }
);

export default Usuario;
