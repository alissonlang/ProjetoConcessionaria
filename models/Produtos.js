const Comentario = require('./Comentario');
const db = require('./db');

const Produtos = db.sequelize.define('produtos', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    marca: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    cor: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    }
});

Produtos.sync();

module.exports = Produtos;