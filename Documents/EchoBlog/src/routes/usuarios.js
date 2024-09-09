import { Router } from "express";

export const router = Router();

import usuariosController from "../controllers/usuarios/usuariosController.js";
import usuariosHelpers from "../helpers/usuarios/usuariosHelpers.js";

router.post("/usuarios", usuariosHelpers.validation, usuariosController.create);

router.post(
  "/usuarios/login",
  usuariosHelpers.validationLogin,
  usuariosController.login
);

router.get(
  "/usuarios",
  usuariosHelpers.authenticateTokenAdmin,
  usuariosController.getAll
);

router.put(
  "/usuarios/:usuario_id",
  usuariosHelpers.authenticateToken,
  usuariosHelpers.validationID,
  usuariosHelpers.validationUpdate,
  usuariosController.update
);

router.delete(
  "/usuarios/:usuario_id",
  usuariosHelpers.authenticateTokenAdmin,
  usuariosHelpers.validationID,
  usuariosController.delete
);

router.patch(
  "/usuarios/:usuario_id",
  usuariosHelpers.authenticateTokenAdmin,
  usuariosHelpers.validationID,
  usuariosController.alterPapel
);

export default router;
