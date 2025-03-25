const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Venue_venuetype = sequelize.define("Venue_venuetype", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venue_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Venue_venuetype.associate = (models) => {
        Venue_venuetype.belongsTo(models.Venue , {
            foreignKey: "venue_id",
            as: "venue"
        });
        Venue_venuetype.belongsTo(models.Venue_type , {
            foreignKey: "venue_type_id",
            as: "venue_type"
        });
    };

    return Venue_venuetype;
};
