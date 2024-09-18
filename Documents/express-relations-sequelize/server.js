import express from "express";
import conn from "./config/conn.js";

const PORT = 3333;

const app = express();

import Usuario from "./models/usuarioModel.js";

app.get("/", (req, res) => {
  res.send("Olá, undo");
});

//Force deleta e cria 
conn
  .sync({ force: true })
  .then(
    app.listen(PORT, () => console.log("Servidor rodando na porta: " + PORT))
  )
  .catch((err) => console.error(err));