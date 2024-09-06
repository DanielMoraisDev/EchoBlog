import { Router } from "express";

import { router as postagemRouter } from "./postagens.js"

const router = Router()

router.use("/", postagemRouter)

export default router