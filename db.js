const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dblogin5205', 'login5205', 'fPmhUOMDSbjNdGp', {
    host: '127.0.0.1',
    dialect: 'mariadb'
});

sequelize.authenticate()
    .then(() => console.log('Connected to the database!'))
    .catch(err => console.error('Unable to connect to the database:', err));

exports.sequelize = sequelize;