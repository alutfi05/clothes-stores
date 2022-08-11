const { clothe, category } = require("../models");

class ClotheController {
    static async getClothes(req, res) {
        try {
            let clothes = await clothe.findAll({
                include: [category],
                order: [["id", "asc"]],
            });

            res.render("clotheViews/clothe.ejs", { clothes });
        } catch (error) {
            res.json(error);
        }
    }

    static createPage(req, res) {
        res.render("clotheViews/createPage.ejs");
    }

    static async create(req, res) {
        try {
            const { name, image, price, stock, categoryId } = req.body;

            let createClothe = await clothe.create({
                name,
                image,
                price,
                stock,
                categoryId,
            });

            res.redirect("/clothes");
        } catch (error) {
            res.json(error);
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.clotheId;

            let deleteClothe = await clothe.destroy({ where: { id } });

            deleteClothe === 1
                ? res.redirect("/clothes")
                : res.json({ message: `Clothe id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }

    static async updatePage(req, res) {
        try {
            const id = +req.params.clotheId;

            let findClotheById = await clothe.findByPk(id);

            res.render("clotheViews/updatePage.ejs", { findClotheById });
        } catch (error) {
            res.json(error);
        }
    }

    static async update(req, res) {
        try {
            const id = +req.params.clotheId;
            const { name, image, price, stock, categoryId } = req.body;

            let updateClothe = await clothe.update(
                { name, image, price, stock, categoryId },
                { where: { id } }
            );

            updateClothe[0] === 1
                ? res.redirect("/clothes")
                : res.json({ message: `Clothe id ${id} not found!` });
        } catch (error) {
            res.json(error);
        }
    }
}

module.exports = ClotheController;
