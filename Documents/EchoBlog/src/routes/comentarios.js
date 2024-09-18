import { Router } from "express";

export const router = Router();

import comentariosController from "../controllers/comentarios/comentariosController.js";
import comentariosHelpers from "../helpers/comentarios/comentariosHelpers.js";

router.post("/comentarios", comentariosHelpers.validation, comentariosController.create);

router.get(
  "/comentarios",
  comentariosController.getAll
);

router.put(
  "/comentarios/:usuario_id",
  comentariosHelpers.validationID,
  comentariosHelpers.validationUpdate,
  comentariosController.update
);

router.delete(
  "/comentarios/:usuario_id",
  comentariosHelpers.validationID,
  comentariosController.delete
);
export default router;
