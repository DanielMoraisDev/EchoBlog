import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationUsuarioLogin = (req, res, next) => {
  const usuarioSchema = z.object({

      email: z.string({
        required_error: "O email é obrigatório"
      }).min(3, "Muito pequeno"),

      senha: z.string({
        required_error: "A senha é obrigatória"
      }).min(3, "Muito pequeno"),
  });

  try {
    usuarioSchema.parse(req.body);
    next();
  } catch (error) {
    console.error("[HELPER] [USUARIO] [VALIDATION LOGIN] Error: " + error);
    res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationUsuarioLogin;
