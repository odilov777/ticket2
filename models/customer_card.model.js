const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Customer_card = sequelize.define("Customer_card", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
        },
        month: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
        },
        is_main: {
            type: DataTypes.BOOLEAN,
        },
    });

    Customer_card.associate = (models) => {
        Customer_card.belongsTo(models.Customer , {
            foreignKey: "customer_id",
            as: "customer"
        });
    };

    return Customer_card;
};
