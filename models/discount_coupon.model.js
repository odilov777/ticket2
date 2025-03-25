const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Discount_coupon = sequelize.define("Discount_coupon", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        finish_date: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Discount_coupon.associate = (models) => {
        Discount_coupon.hasMany(models.Booking, {
            foreignKey: "discount_coupon_id",
            as: "bookings"
        });
    };

    return Discount_coupon;
}