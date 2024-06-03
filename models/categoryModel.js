const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const Category = sequelize.define('Category', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Category;

Category.sync({ force: false }).then(() => {
    console.log('Category table created if not exists');
});