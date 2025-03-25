const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Admin = sequelize.define("Admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
        },
        is_creator: {
            type: DataTypes.BOOLEAN,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
        },
    });



    return Admin;
};
