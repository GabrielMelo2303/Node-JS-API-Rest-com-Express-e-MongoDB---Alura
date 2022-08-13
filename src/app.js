import express from "express";
const app = express();

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "Diario de um Banana"},
    {id: 3, "titulo": "Código Limpo"},
    {id: 4, "titulo": "Biblia Sagrada"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node da Alura');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

export default app