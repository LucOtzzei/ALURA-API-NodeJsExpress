import NaoEncontrado from "../errors/NaoEncontrado.js";
import {autores} from "../models/index.js";

class AutoresController{
	static listarLivros = async (req, res, next)=>{
		try{
			const autoresResultado = await autores.find();
			res.status(200).json(autoresResultado);
		} catch(err){
			next(err);
		}
	};
	static listarLivroPorId = async (req, res, next) =>{
		try{
			const id = req.params.id;
			const autorResultado = await autores.findById(id);
			if(autorResultado !== null){
				res.status(200).json(autorResultado);
			} 
			new NaoEncontrado("Id do autor nao localizado!");		
		}catch(err){
			next(err);
		}
	};
	static cadastrarAutor = async (req, res, next) => {
		try{
			let autor = new autores(req.body);
			autor.save();
			res.status(201).send({message: "Autor cadastrado com sucesso"});
		}catch(err){
			next(err);
		}
	};
	static atualizarAutor = async (req, res, next) => {
		try{
			const id = req.params.id;
			await autores.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).send({message: " autor atualizado."});
		}catch(err){
			next(err);
		}
	};
	static excluirAutor = async (req, res, next) => {
		try{
			const id = req.params.id;
			await autores.findByIdAndDelete(id, (err) => {
				if(!err){
					res.status(200).send({message: "Livro deletado com sucesso!"});
				}else{
					res.status(500).send({message: `${err.message} falha ao deletar`});
				}
			});
            
		}catch(err){
			next(err);
		}
	};
}

export default AutoresController;