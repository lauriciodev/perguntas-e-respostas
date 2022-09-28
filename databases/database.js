const Sequelize = require("sequelize");

const conection = new Sequelize("perguntas","root","berlim2062", { 
  host:"localhost",
  dialect:"mysql"
 });

 module.exports = conection;