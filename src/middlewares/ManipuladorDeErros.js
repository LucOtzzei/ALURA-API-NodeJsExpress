import mongoose from "mongoose";
import ErrorBase from "../errors/ErrorBase.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import ErroValidacao from "../errors/ErroValidacao.js";
import NaoEncontrado from "../errors/NaoEncontrado.js";

function ManipuladorDeErros(erro, req, res, next){
	if(erro instanceof mongoose.Error.CastError) new RequisicaoIncorreta().EnviarResposta(res);
	else if(erro instanceof mongoose.Error.ValidationError) new ErroValidacao(erro).EnviarResposta(res);
	else if(erro instanceof NaoEncontrado) erro.EnviarResposta(res);
	else new ErrorBase().EnviarResposta(res);
};

export default ManipuladorDeErros;