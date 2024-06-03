const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const Category = require('./categoryModel');

const Bijou = sequelize.define('Bijou', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prixVente: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    prixLocation: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

// Define the association
Bijou.belongsTo(Category, { foreignKey: 'idCategory' });

module.exports = Bijou;

Bijou.sync({ force: false }).then(() => {
    console.log('Bijou table created if not exists');
});