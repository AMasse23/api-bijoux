const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');
const User = require('./userModel');
const Bijou = require('./bijouModel');
const Location = sequelize.define('Location', {
    dateDebutLocation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dateFinLocation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idBijou: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
Location.belongsTo(User, { foreignKey: 'idUser' });
Location.belongsTo(Bijou, { foreignKey: 'idBijou' })
module.exports = Location;

Location.sync({ force: false }).then(() => {
    console.log('Location table created if not exists');
});