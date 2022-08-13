"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            customer.belongsToMany(models.clothe, { through: models.order });
        }
    }
    customer.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Name can't be empty!",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Email can't be empty!",
                    },
                },
            },
            phoneNumber: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Phone Number must be a number",
                    },
                },
            },
            city: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "City can't be empty!",
                    },
                },
            },
            address: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Address can't be empty!",
                    },
                },
            },
            postalCode: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Postal Code must be a number",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "customer",
        }
    );
    return customer;
};
