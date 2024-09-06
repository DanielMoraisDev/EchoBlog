import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationIDPostagem = (req, res, next) => {
  const postagemSchema = z.object({
      postagem_id: z.string().min(0, "ID não pode ser vazia").max(60, "ID é muito grande"),
  });

  try {
    postagemSchema.parse(req.params);
    next();
  } catch (error) {
    console.error("[HELPER] [POSTAGEM] [VALIDATION ID] Error: " + error);
    res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationIDPostagem;
