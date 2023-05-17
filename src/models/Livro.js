import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
	id: {type: String},
	titulo: {type: String, required: true},
	autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: true},
	editora: {type: String, required: [true, "O CAMPO EDITORA NAO PODE ESTAR EM BRANCO"]},
	numeroPaginas: {
		type: Number, 
		validate: {
			validator: (valor)=>{
				return valor >= 10 && valor <= 1000;
			},
		message: "O numero de paginas deve estar entre 10 e 1000. Valor inserido:{VALUE}"
		}
	}
});

const livros = mongoose.model("livros", livroSchema);

export default livros;