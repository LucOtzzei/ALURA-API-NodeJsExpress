import { Mongoose } from "mongoose";
import {livros} from "../models/index.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

class LivroController{
	static listarLivros = async (req, res, next)=>{
		try {
			const livrosResultado = await livros.find().populate("autor").exec();
			
			if(livrosResultado == null) {
				res.status(404).send({message: `Livro não encontrado!`});
			}		
			res.status(200).json(livrosResultado);
		} catch (erro) {
			next(erro);
		}
	};
	static listarLivroPorId = async (req, res, next)=>{
		try{
			let id = req.params.id;
			let livro = await livros.findById(id).populate("autor", "nome").exec();
			if(livro !== null) new NaoEncontrado("Id do Livro nao localizado.");
			res.status(200).json(livro.toJSON());
		}catch(erro){
			next(erro);
		}
	};
	static cadastrarLivro = async (req, res, next)=>{
		try{
			let livro = new livros(req.body);
			livro.save();
			res.status(201).send(livro.toJSON());
		}catch(err){
			next(err);
		}
	};
	static atualizarLivro = async (req, res, next)=>{
		try{
			const id = req.params.id;
			await livros.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).send({message: "Livro atualizado com sucesso"});
		}catch(err){
			next(err);
		}
	};
	//NÃO FUNCIONA
	static excluirLivro = async (req, res, next)=>{
		try{
			const id = req.params.id;
			await livros.findByIdAndDelete(id, (err) => {
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
	static listarLivrosPorFiltro = async (req, res)=>{
		try{
			const {editora, titulo} = req.query;
			var lista = await livros.find({editora: editora, titulo: titulo});
			res.status(200).send(lista);
		}catch(err){
			next(err);
		}
	};
}

export default LivroController;