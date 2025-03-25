const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sector_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        row_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seat_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location_in_schema: {
            type: DataTypes.STRING,
        },
    });

    
    Seat.associate = (models) => {
        Seat.hasMany(models.Ticket, {
            foreignKey: "seat_id",
            as: "ticket"
        });
        Seat.belongsTo(models.Sector , {
            foreignKey: "sector_id",
            as: "sector"
        });
        Seat.belongsTo(models.Venue , {
            foreignKey: "venue_id",
            as: "venue"
        });
        Seat.belongsTo(models.Seat_type , {
            foreignKey: "seat_type_id",
            as: "seat_type"
        });
    };

    return Seat;
};
