"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            order.belongsTo(models.customer);
            order.belongsTo(models.clothe);
        }
    }
    order.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            customerId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Customer Id must be a number",
                    },
                },
            },
            clotheId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Clothe Id must be a number",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "order",
        }
    );
    return order;
};
