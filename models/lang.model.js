const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Lang = sequelize.define("Lang", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Lang.associate = (models) => {
        Lang.hasMany(models.Customer, {
            foreignKey: "lang_id",
            as: "customers"
        });
        Lang.hasMany(models.Event, {
            foreignKey: "lang_id",
            as: "event"
        });
    };

    return Lang;
};
