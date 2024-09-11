import { z } from "zod";
import formatZodError from "../functions/formatZodError.js";

const validationPostagem = (req, res, next) => {
  const postagemSchema = z.object({
    titulo: z
      .string({
        required_error: "O título é obrigatório",
      })
      .min(3, "Muito pequeno"),

    conteudo: z
      .string({
        required_error: "O conteúdo é obrigatório",
      })
      .min(3, "Muito pequeno"),

    dataPublicacao: z.string().date({
      required_error: "A data é obrigatória",
    }),
  });

  try {
    postagemSchema.parse(req.body);
    next();
  } catch (error) {
    console.error("[HELPER] [POSTAGEM] [VALIDATION] Error: " + error);
    return res.status(500).json({ message: formatZodError(error) });
  }
};

export default validationPostagem;
