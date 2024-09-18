import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationIDComentario = (req, res, next) => {
  const comentarioSchema = z.object({
      comentario_id: z.string().min(0, "ID não pode ser vazia").max(60, "ID é muito grande"),
  });

  try {
    comentarioSchema.parse(req.params);
    next();
  } catch (error) {
    console.error("[HELPER] [COMENTARIO] [VALIDATION ID] Error: " + error);
    res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationIDComentario;
