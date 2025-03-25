const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashed_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        birth_date: {
            type: DataTypes.STRING,
        },
        gender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hashed_refresh_token: {
            type: DataTypes.STRING,
        },
    });

    
    Customer.associate = (models) => {
        Customer.hasMany(models.Customer_address, {
            foreignKey: "customer_id",
            as: "customer_address"
        });
        Customer.hasMany(models.Cart, {
            foreignKey: "customer_id",
            as: "cart"
        });
        Customer.hasMany(models.Customer_card, {
            foreignKey: "customer_id",
            as: "customer_card"
        });
        Customer.belongsTo(models.Lang , {
            foreignKey: "lang_id",
            as: "lang"
        });
        Customer.belongsTo(models.Gender , {
            foreignKey: "gender_id",
            as: "gender"
        });
    };

    return Customer;
};
