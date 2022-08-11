const { category, clothe } = require("../models");

class CategoryController {
    static async getCategories(req, res) {
        try {
            let categories = await category.findAll({
                order: [["id", "asc"]],
            });

            res.render("categoryViews/category.ejs", { categories });
        } catch (error) {
            res.json(error);
        }
    }

    static createPage(req, res) {
        res.render("categoryViews/createPage.ejs");
    }

    static async create(req, res) {
        try {
            const { name } = req.body;

            let createCategory = await category.create({ name });

            res.redirect("/categories");
        } catch (error) {
            res.json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.categoryId;

            let deleteCategory = await category.destroy({ where: { id } });

            let deleteClothe = await clothe.destroy({
                where: {
                    categoryId: id,
                },
            });

            deleteCategory === 1
                ? res.redirect("/categories")
                : res.json({
                      message: `Category id ${id} not found!`,
                  });
        } catch (error) {
            res.json(error);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.categoryId;

            let findCategoryById = await category.findByPk(id);

            res.render("categoryViews/updatePage.ejs", { findCategoryById });
        } catch (error) {
            res.json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.categoryId;
            const { name } = req.body;

            let updateCategory = await category.update(
                { name },
                { where: { id } }
            );

            updateCategory[0] === 1
                ? res.redirect("/categories")
                : res.json({
                      message: `Category id ${id} not found!`,
                  });
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = CategoryController;
