const db = require('./db');

const Comentario = db.sequelize.define('comentarios', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
});

Comentario.sync();

module.exports = Comentario;