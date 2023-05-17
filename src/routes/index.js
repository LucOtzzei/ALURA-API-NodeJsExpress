import express from "express";
import livrosRoute from "./livro.routes.js";
import autoresRoute from "./autor.routes.js";

const routes = (app)=> {
	app.route("/").get((req, res)=> {
		res.status(200).send({titulo: "Curso de Node.JS"});
	});

	app.use(express.json(), 
		livrosRoute, 
		autoresRoute
	);
};

export default routes;