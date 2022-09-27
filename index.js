const express = require("express");
const app = express();

//setando ejs com engine express
app.set("view engine","ejs");
app.use(express.static("public"))

app.get("/",(req,res) =>{
res.render("index")
})


app.listen(8080,(erro) => erro ? console.log("erro"):console.log("servidor ok"));

