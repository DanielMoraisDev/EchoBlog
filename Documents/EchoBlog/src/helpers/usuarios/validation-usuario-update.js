import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationUsuarioUpdate = (req, res, next) => {
  const usuarioSchema = z.object({
      nome: z.string({
        required_error: "O nome é obrigatório"
      }).min(3, "Muito pequeno"),

      email: z.string({
        required_error: "O email é obrigatório"
      }).min(3, "Muito pequeno"),

      senha: z.date({
        required_error: "A senha é obrigatória"
      }),
  });

  try {
    usuarioSchema.parse(req.body);
    next();
  } catch (error) {
    console.error("[HELPER] [USUARIO] [VALIDATION] Error: " + error);
    res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationUsuarioUpdate;
