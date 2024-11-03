const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Ana Almeida',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e estudante'
    },
    {
        nome: 'Clara Silvia',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e amante de jogos'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres);
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);