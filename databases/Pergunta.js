const Sequelize = require("sequelize");
const connection = require("./database");


const Pergunta = connection.define("perguntas",{
  titulo:{
    type: Sequelize.STRING,
    allowNull:false
  },
  descricao:{
    type:Sequelize.TEXT,
    allowNull:false
  }
});

Pergunta.sync({force:false}).then(() => {});

module.exports = Pergunta;


// o force no parametro indica que nao ira forcar a criação da tabela caso exista
