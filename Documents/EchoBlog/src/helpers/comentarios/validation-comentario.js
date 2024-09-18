import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationComentario = (req, res, next) => {
  const comentarioSchema = z.object({
    conteudo: z
      .string({
        required_error: "O conteúdo é obrigatório",
      })
      .min(3, "Muito pequeno"),

    usuario_id: z
      .string({
        required_error: "O usuário do id é obrigatório",
      })
      .min(3, "Muito pequeno"),
  });

  try {
    comentarioSchema.parse(req.body);
    next();
  } catch (error) {
    console.error("[HELPER] [COMENTARIO] [VALIDATION] Error: " + error);
    return res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationComentario;
