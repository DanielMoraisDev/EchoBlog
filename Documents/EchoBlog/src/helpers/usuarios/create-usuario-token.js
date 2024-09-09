import jwt from "jsonwebtoken";

const createUsuarioToken = async (usuario, req, res) => {
  try {
    const token = jwt.sign(
      {
        nome: usuario.nome,
        papel: usuario.papel,
      },
      process.env.JWT_PASSWORD
    );

    console.log("[HELPERS] [USUARIO] [CREATE TOKEN] Token: " + token)

    return true
  } catch (error) {
    console.error("[HELPERS] [USUARIO] [CREATE TOKEN] Error: " + error);
    return false
  }
};

export default createUsuarioToken;
