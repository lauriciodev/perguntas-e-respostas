const Sequelize = require("sequelize");
const connetction = require("./database");

const Resposta = connetction.define("respostas",{
corpo:{
  type:Sequelize.TEXT,
  allowNull:false
},
 perguntaId:{
  type:Sequelize.INTEGER,
  allowNull:false
 }
});

Resposta.sync({force: false});
module.exports = Resposta;

