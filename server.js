const http = require('http'); // Importação do modulo http.
const port = 3000 // Porta que o servidor irá rodar.

const rotas = {
    '/': 'Curso da Alura',
    '/livros': 'Livros disponiveis',
    '/autores': 'Listagem de autores',
    '/editoras': 'Listagem de editoras'
}

const server = http.createServer((req, res) => { // Conexão do meu servidor.
    res.writeHead(200, {'Content-Type':'Text/plain'}); // StatusCode e estou informando que o meu content-type será texto.
    res.end(rotas[req.url]) //Estou respondendo para o cliente que fez a request, escrevendo 'Alguma Mensagem de acordo com a URL' em sua pagina no navegador.
})

server.listen(port, () => { // Esta função é responsavél por fazer com que o servidor suba localmente.
    console.log(`Server running at http://localhost:${port}`) // Estou informando a porta no qual meu servidor esta alocado.
})