import { DataTypes, UUID } from "sequelize";
import conn from "../config/conn.js";



const Perfil = conn.define(
  "perfis",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "perfis",
  } 
);

export default Perfil