const mongoose = require('mongoose');
require('dotenv').config();

async function conectaBancoDeDados(){
    try {
        console.log("conexão com o banco de dados iniciou!");

        await mongoose.connect(process.env.MONGO_URL);

        console.log('conexão realizada com sucesso');
    } catch (erro) {
        console.log(erro);
    }
}

module.exports = conectaBancoDeDados;