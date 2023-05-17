import mongoose from "mongoose";
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import ManipuladorDeErros from "./middlewares/ManipuladorDeErros.js";
import Manipulador404 from "./middlewares/Manipulador404.js";

db.on("error", console.log.bind(console, "Erro ao conectar com o banco!"));
db.once("open", ()=> {
	console.log("Conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());
routes(app);

app.use(Manipulador404);
app.use(ManipuladorDeErros);

export default app;