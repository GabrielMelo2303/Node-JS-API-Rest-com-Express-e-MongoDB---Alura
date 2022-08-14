import express from "express";
import db from "./config/dbConnect.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, 'Erro de conexão')) // logando o erro de conexão com o banco
db.once("open", () => {
    console.log('conexão com o banco feito com sucesso')
}) // tentativa de realizar a conexão com o banco de dados

const app = express();

app.use(express.json());

/**const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "Diario de um Banana"},
    {id: 3, "titulo": "Código Limpo"},
    {id: 4, "titulo": "Biblia Sagrada"},
]; **/

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node da Alura');
});

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros);
    })
});

app.get('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`O livro ${id} foi apagado com sucesso!`);
});

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
};

export default app