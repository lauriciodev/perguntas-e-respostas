const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const connection = require("./databases/database");
const perguntaModel = require("./databases/Pergunta");


//databases

connection
.authenticate()
.then(() =>{
  console.log("conexão feita com o banco de dados")
})
.catch((erro) =>{
  console.log(erro);
})


//setando body-parser
app.use(bodyParse.urlencoded({extended:false}));

//setando ejs com engine express
app.set("view engine","ejs");
app.use(express.static("public"))

app.get("/",(req,res) =>{

perguntaModel.findAll(
{raw: true,
order:[["id","DESC"]] //desc = decrescente || asc = crescente
}).then( perguntas =>{
  res.render("index",{
    perguntas:perguntas
  });
});


});


app.get("/perguntar", (req,res) =>{
  res.render("perguntar")
})


app.post("/salvar",(req,res) =>{
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;

  perguntaModel.create({
    titulo: titulo,
    descricao:descricao
  }).then(() =>{
    res.redirect("/");
  })

   
})

app.listen(8080,(erro) => erro ? console.log("erro"):console.log("servidor ok"));

