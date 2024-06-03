const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresseRue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codePostal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ville: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courriel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telFixe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telPortable: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;

User.sync({ force: false }).then(() => {
    console.log('User table created if not exists');
});