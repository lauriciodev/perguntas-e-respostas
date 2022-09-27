const express = require("express");
const app = express();

//setando ejs com engine express
app.set("view engine","ejs");

app.get("/",(req,res) =>{
res.render("index",{
  nome:"lauricio"
});
});

app.get("/sobre",(req,res) =>{
res.render("sobre");
});

app.listen(8080,(erro) => erro ? console.log("erro"):console.log("servidor ok"));

