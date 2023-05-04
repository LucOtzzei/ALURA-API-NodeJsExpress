import express from "express";

const app = express();
const livros = [
    {id:1, titulo: 'O imperador republicano'},
    {id:2, titulo: 'Getulio vargas'}
]

app.get('/', (req, res)=> {
    res.status(200);
    res.send('Curso de Node.JS');
});
app.get('/livros', (req, res)=>{
    res.status(200);
    res.json(livros);
})

export default app