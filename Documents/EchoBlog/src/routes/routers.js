import { Router } from "express";

import { router as postagemRouter } from "./postagens.js"
import { router as usuarioRouter } from "./usuarios.js"

const router = Router()

router.use("/", postagemRouter)
router.use("/", usuarioRouter)

export default router