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
        }
    }
    clothe.init(
        {
            name: DataTypes.STRING,
            image: DataTypes.STRING,
            price: DataTypes.INTEGER,
            stock: DataTypes.INTEGER,
            categoryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "clothe",
        }
    );
    return clothe;
};
