const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const ticket_statusModel = require("./ticket_status.model");

module.exports = (sequelize) => {
    const Ticket_type = sequelize.define("Ticket_type", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Ticket_type.associate = (models) => {
        Ticket_type.hasMany(models.Ticket, {
            foreignKey: "ticket_type_id",
            as: "ticket"
        });
    };

    return Ticket_type;
}