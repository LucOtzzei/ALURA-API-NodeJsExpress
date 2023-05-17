import ErrorBase from "./ErrorBase.js";

class NaoEncontrado extends ErrorBase{
    constructor(){
        super("Pagina não encontrada!", 404);
    }
}

export default NaoEncontrado;