const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        site: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        schema: {
            type: DataTypes.STRING,
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    
    Venue.associate = (models) => {
        Venue.hasMany(models.Venue_photo, {
            foreignKey: "venue_id",
            as: "venue_photo"
        });
        Venue.hasMany(models.Seat, {
            foreignKey: "venue_id",
            as: "seat"
        });
        Venue.hasMany(models.Event, {
            foreignKey: "venue_id",
            as: "event"
        });
        Venue.belongsTo(models.Region , {
            foreignKey: "region_id",
            as: "region"
        });
        Venue.belongsTo(models.District , {
            foreignKey: "district_id",
            as: "district"
        });
    };

    return Venue;
};
