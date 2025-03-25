const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
const ticket_statusModel = require("./ticket_status.model");

module.exports = (sequelize) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        service_fee: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ticket_status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ticket_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    
    Ticket.associate = (models) => {
        Ticket.hasMany(models.Cart_item, {
            foreignKey: "ticket_id",
            as: "cart_item"
        });
        Ticket.belongsTo(models.Event , {
            foreignKey: "event_id",
            as: "event"
        });
        Ticket.belongsTo(models.Seat , {
            foreignKey: "seat_id",
            as: "seat"
        });
        Ticket.belongsTo(models.Ticket_status , {
            foreignKey: "ticket_status_id",
            as: "ticket_status"
        });
        Ticket.belongsTo(models.Ticket_type , {
            foreignKey: "ticket_type_id",
            as: "ticket_type"
        });
    };

    return Ticket;
};
