import express from "express";
import AutoresController from "../controllers/AutoresController.js";

const router = express.Router();

router
	.get("/autores", AutoresController.listarLivros)
	.get("/autores/:id", AutoresController.listarLivroPorId)
	.post("/autores", AutoresController.cadastrarAutor)
	.put("/autores/:id", AutoresController.atualizarAutor)
	.delete("/autores/:id", AutoresController.excluirAutor);
export default router;