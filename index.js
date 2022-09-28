const express = require("express");
const app = express();
const bodyParse = require("body-parser");


//setando body-parser
app.use(bodyParse.urlencoded({extended:false}));

//setando ejs com engine express
app.set("view engine","ejs");
app.use(express.static("public"))

app.get("/",(req,res) =>{
res.render("index")
})


app.get("/perguntar", (req,res) =>{
  res.render("perguntar")
})


app.post("/salvar",(req,res) =>{
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;


  res.send("<h1> titulo: " + titulo + " descricao " + descricao + " </h1>"  )
})

app.listen(8080,(erro) => erro ? console.log("erro"):console.log("servidor ok"));

