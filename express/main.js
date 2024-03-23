const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Seja bem vindo ao meu app!");
})

app.get('/about', (req, res) => {
    res.send("Sobre mim!");
})

app.listen(8080, function(){
    console.log("Servidor rodando!");
});