const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    const Customer_address = sequelize.define("Customer_address", {
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
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
        },
        house: {
            type: DataTypes.STRING,
        },
        flat_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
        post_index: {
            type: DataTypes.STRING,
        },
        info: {
            type: DataTypes.STRING,
        },
    });

    Customer_address.associate = (models) => {
        Customer_address.belongsTo(models.Customer , {
            foreignKey: "customer_id",
            as: "customer"
        });
        Customer_address.belongsTo(models.Country , {
            foreignKey: "country_id",
            as: "country"
        });
        Customer_address.belongsTo(models.Region , {
            foreignKey: "region_id",
            as: "region"
        });
        Customer_address.belongsTo(models.District , {
            foreignKey: "district_id",
            as: "district"
        });
        Customer_address.belongsTo(models.Flat , {
            foreignKey: "flat_id",
            as: "flat"
        });
        
    };

    return Customer_address;
};
