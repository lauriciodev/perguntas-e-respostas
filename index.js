const express = require("express");
const app = express();

//setando ejs com engine express
app.set("view engine","ejs");

app.get("/:nome/:idade",(req,res) =>{


  let nome = req.params.nome
  let idade = req.params.idade
  //como visto acima podemos resceber os parametros direto da url e passar para o nosso objeto

  //essas variaveis podem ser criadas diretamente fora ou dentro do objeto!

  let errorMessage = false

  let produtos = [
    {nome:"refrigerante",preco:3},
    {nome:"escova de dentes",preco:6},
    {nome:"creme pra cabelo",preco:13},
    {nome:"salgadinho",preco:5},
    {nome:"energetico",preco:15}
  ]

res.render("index",{
  nome:nome,
  idade:idade,
  erroMsg:errorMessage,
  produtos:produtos,
 });
});

app.get("/sobre",(req,res) =>{
res.render("sobre");
});

app.listen(8080,(erro) => erro ? console.log("erro"):console.log("servidor ok"));

