"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class clothe extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            clothe.belongsTo(models.category);
            clothe.belongsToMany(models.customer, { through: models.order });
        }
    }
    clothe.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Name can't be empty!",
                    },
                },
            },
            image: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Image link can't be empty!",
                    },
                },
            },
            price: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Price must be a number",
                    },
                },
            },
            stock: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Stock must be a number",
                    },
                },
            },
            categoryId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Category Id must be a number",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "clothe",
        }
    );
    return clothe;
};
