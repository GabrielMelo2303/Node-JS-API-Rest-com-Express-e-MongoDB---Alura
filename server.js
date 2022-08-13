import app from './src/app.js'

const port = process.env.PORT || 3000 // Porta que o servidor irá rodar.


app.listen(port, () => { // Esta função é responsavél por fazer com que o servidor suba localmente.
    console.log(`Server running at http://localhost:${port}`) // Estou informando a porta no qual meu servidor esta alocado.
})