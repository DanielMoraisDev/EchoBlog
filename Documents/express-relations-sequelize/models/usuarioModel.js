import { DataTypes, UUID } from "sequelize";
import conn from "../config/conn.js";

import Perfil from "./perfilModel.js";

const Usuario = conn.define(
  "usuarios",
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
    tableName: "usuarios",
  } 
);

// Associação 1:N
Usuario.hasOne(Perfil)
Perfil.belongsTo(Usuario)

export default Usuario
