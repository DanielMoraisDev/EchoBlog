import { Router } from "express";

export const router = Router();

import postagensController from "../controllers/postagens/postagensController.js";
import postagensHelpers from "../helpers/postagens/postagensHelpers.js";

router.post("/postagens",postagensHelpers.createImage.single("imagem"), postagensHelpers.validateCreatePostagem, postagensHelpers.validation,  postagensController.create);

router.get("/postagens", postagensController.getAll);

router.get("/postagens/:postagem_id", postagensHelpers.validationID, postagensController.getOne);

router.put("/postagens/:postagem_id", postagensHelpers.validationID, postagensController.update);

router.delete("/postagens/:postagem_id", postagensHelpers.validationID, postagensController.delete);

router.put("/postagens/:postagem_id/imagem", postagensHelpers.validationID, postagensController.updateImage);

//Rota da atualização das imagens

export default router
