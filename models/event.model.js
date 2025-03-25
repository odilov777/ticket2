const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.STRING,
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        finish_date: {
            type: DataTypes.STRING,
        },
        finish_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        info: {
            type: DataTypes.STRING,
        },
        event_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        human_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        venue_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.STRING,
        },
    });

    
    Event.associate = (models) => {
        Event.hasMany(models.Ticket, {
            foreignKey: "event_id",
            as: "ticket"
        });
        Event.belongsTo(models.Event_type , {
            foreignKey: "event_type_id",
            as: "event_type"
        });
        Event.belongsTo(models.Human_category , {
            foreignKey: "human_category_id",
            as: "human_category"
        });
        Event.belongsTo(models.Venue , {
            foreignKey: "venue_id",
            as: "venue"
        });
        Event.belongsTo(models.Lang , {
            foreignKey: "lang_id",
            as: "lang"
        });
    };

    return Event;
};
