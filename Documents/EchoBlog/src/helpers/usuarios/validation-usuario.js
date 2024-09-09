import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationUsuario = (req, res, next) => {
  const usuarioSchema = z.object({
      nome: z.string({
        required_error: "O nome é obrigatório"
      }).min(3, "Muito pequeno"),

      email: z.string({
        required_error: "O email é obrigatório"
      }).min(3, "Muito pequeno"),

      senha: z.string({
        required_error: "A senha é obrigatória"
      }),

      papel: z.number({
        required_error: "O papel é obrigatório"
      }).min(1, "Muito pequeno"),
  });

  try {
    usuarioSchema.parse(req.body);
    next();
  } catch (error) {
    console.error("[HELPER] [USUARIO] [VALIDATION] Error: " + error);
    res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationUsuario;
