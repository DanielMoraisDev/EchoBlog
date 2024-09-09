import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationIDUsuario = (req, res, next) => {
  const usuarioSchema = z.object({
      usuario_id: z.string().min(0, "ID não pode ser vazia").max(60, "ID é muito grande"),
  });

  try {
    usuarioSchema.parse(req.params);
    next();
  } catch (error) {
    console.error("[HELPER] [USUARIO] [VALIDATION ID] Error: " + error);
    res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationIDUsuario;
