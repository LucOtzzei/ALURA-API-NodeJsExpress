class ErrorBase extends Error{
    constructor(mensagem = "Erro interno no servidor", status = 500){
        super();
        this.message = mensagem;
        this.status = status;
    }

    EnviarResposta(res){
        res.status(this.status).send({message: this.message, status: this.status})
    }
}

export default ErrorBase;